import { pollCommit } from "@/lib/github";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";
import { checkCredits, indexGithubRepo } from "@/lib/github-loader";
import { getProgress } from "@/lib/progress-store";
import { Upload } from "lucide-react";

export const projectRouter = createTRPCRouter({
    createProject: protectedProcedure.input(
        z.object({
            name: z.string(),
            githubUrl: z.string(),
            githubToken: z.string().optional()    
        })
    ).mutation(async ({ ctx, input }) => {
        const project = await ctx.db.project.create({
            data: {
                githubUrl: input.githubUrl,
                name: input.name,
                userToProjects: {
                    create: {
                        userId: ctx.user.userId!,
                    },  
                },  
            },
        });

        // Run in background - don't await so frontend gets projectId immediately
        indexGithubRepo(project.id, input.githubUrl, input.githubToken)
            .then(() => pollCommit(project.id))
            .catch(async (error: any) => {
                console.error("Indexing failed:", error.message);
                await ctx.db.userToProject.deleteMany({ where: { projectId: project.id } })
                await ctx.db.project.delete({ where: { id: project.id } })
            });

        // Return immediately so frontend can start polling progress
        return { projectId: project.id };
    }),

    getIndexingProgress: protectedProcedure.input(
        z.object({ projectId: z.string() })
    ).query(async ({ input }) => {
        return getProgress(input.projectId);
    }),

    getProjects: protectedProcedure.query(async ({ ctx }) => {
        return await ctx.db.project.findMany({
            where: {
                deletedAt: null,
                userToProjects: {
                    some: {
                        userId: ctx.user.userId!
                    }
                }
            }
        })    
    }),

    getCommits: protectedProcedure.input(
        z.object({
            projectId: z.string() 
        })
    ).query(async ({ ctx, input }) => {
        pollCommit(input.projectId).then().catch(console.error)
        return await ctx.db.commit.findMany({
            where: {
                projectId: input.projectId
            }
        })
    }),

    saveAnswer: protectedProcedure.input(z.object({
        projectId: z.string(),
        question: z.string(),
        fileReferences: z.any(),
        answer: z.string()
    })).mutation(async ({ ctx, input }) => {
        return await ctx.db.question.create({
            data: {
                answer: input.answer,
                question: input.question,
                fileReferences: input.fileReferences,
                userId: ctx.user.userId!, 
                projectId: input.projectId
            } 
        })
    }),

    getQuestions: protectedProcedure.input(z.object({projectId: z.string()}))
    .query(async ({ ctx, input }) => {
        return await ctx.db.question.findMany({
            where: {
                projectId: input.projectId,
            }, 
            include: {
                user: true
            },
            orderBy: {
                createdAt: "desc"
            }
        })
    }),

    uploadMeeting: protectedProcedure.input(z.object({projectId: z.string(), meetingUrl:z.string(), name: z.string() }))
    .mutation(async ({ ctx, input }) => {
        const meeting = await ctx.db.meeting.create({
            data: {
                meetingUrl: input.meetingUrl,
                projectId: input.projectId,
                name: input.name,
                status: "PROCESSING"
            }
        })
        return meeting
    }),

    getMeetings: protectedProcedure.input(z.object({projectId: z.string()}))
    .query(async ({ ctx, input }) => {
        return await ctx.db.meeting.findMany({
            where: {projectId: input.projectId}, 
            orderBy: {createdAt: "desc"},
            include: {issues: true}
        })
    }),

    deleteMeeting: protectedProcedure.input(z.object({meetingId: z.string()}))
    .mutation(async ({ ctx, input }) => {
        await ctx.db.issue.deleteMany({where: {meetingId: input.meetingId}})
    }),

    getMeetingById: protectedProcedure.input(z.object({meetingId: z.string()}))
    .query(async ({ ctx, input }) => {
        return await ctx.db.meeting.findUnique({
            where: {id: input.meetingId},
            include: {issues: true}
        })
    }),

    archiveProject: protectedProcedure.input(z.object({projectId: z.string()}))
    .mutation(async ({ ctx, input }) => {
        await ctx.db.project.update({
            where: {id: input.projectId},
            data: {deletedAt: new Date()}
        })
    }),

    getTeamMembers: protectedProcedure.input(z.object({projectId: z.string()}))
    .query(async ({ ctx, input }) => {
        return await ctx.db.userToProject.findMany({
            where: {projectId: input.projectId},
            include: {user: true}
        })
    }),

    getMyCredits: protectedProcedure.query(async ({ ctx }) => {
        return await ctx.db.user.findUnique({
            where: { id: ctx.user.userId! }, 
            select: { credits: true }
        })
    }),

    checkCredits: protectedProcedure.input(z.object({githubUrl: z.string(), githubToken: z.string().optional()}))
    .mutation(async ({ ctx, input }) => {
        const fileCount = await checkCredits(input.githubUrl, input.githubToken)
        const userCredits = await ctx.db.user.findUnique({
            where: { id: ctx.user.userId! }, 
            select: { credits: true }
        })
        return { fileCount, userCredits: userCredits?.credits || 0 }
    })
})