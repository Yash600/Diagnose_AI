"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { api } from "@/trpc/react"
import { toast } from "sonner"
import useReFetch from "@/hooks/use-refetch"
import { useState } from "react"
import { Info } from "lucide-react"

type FormInput = {
    repoUrl: string
    projectName: string
    githubToken?: string
}

const CreatePage = () => {
    const { register, handleSubmit, reset } = useForm<FormInput>()
    const createProject = api.project.createProject.useMutation()
    const checkCredits = api.project.checkCredits.useMutation()
    const refetch = useReFetch()
    const [createdProjectId, setCreatedProjectId] = useState<string | null>(null)

    const { data: progressData } = api.project.getIndexingProgress.useQuery(
        { projectId: createdProjectId! },
        {
            enabled: !!createdProjectId,
            refetchInterval: (data) => data?.status === "done" || data?.status === "error" ? false : 2000
        }
    )

    // Wipe progress once done
    if (progressData?.status === "done" && createdProjectId) {
        toast.success("Repository indexed successfully!")
        setCreatedProjectId(null)
        refetch()
    }

    if (progressData?.status === "error" && createdProjectId) {
        toast.error("Indexing failed. Please try again.")
        setCreatedProjectId(null)
    }

    function onSubmit(data: FormInput) {
        if(!!checkCredits.data){
            createProject.mutate({
                githubUrl: data.repoUrl,
                name: data.projectName,
                githubToken: data.githubToken
            }, {
                onSuccess: (data) => {
                    toast.success("Project created! Indexing repository...")
                    setCreatedProjectId(data.projectId)
                    reset()
                },
                onError: (error) => {
                    toast.error(error.message ?? "Failed to create project.")
                }
            })
        } else {
            checkCredits.mutate({
                githubUrl: data.repoUrl,
                githubToken: data.githubToken
            })
        }
    }

    const isIndexing = !!createdProjectId && progressData?.status === "processing"
    const percentage = progressData && progressData.total > 0
        ? Math.round((progressData.processed / progressData.total) * 100)
        : 0

    const hasEnoughCredits = checkCredits?.data.userCredits ? checkCredits.data.fileCount <= checkCredits.data.userCredits : false
    return (
        <div className="flex items-center gap-12 h-full justify-center">
            <img src="/github.png" className="h-56 w-auto rounded-l-full" />
            <div>
                <div>
                    <h1 className="font-semibold text-2xl">
                        Link Your Github Repository
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter the URL of your Github repository to link it with diagnose_ai.
                    </p>
                </div>
                <div className="h-4"></div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register("projectName", { required: true })} placeholder="Project Name" required />
                    <div className="h-2"></div>
                    <Input {...register("repoUrl", { required: true })} placeholder="Github URL" required />
                    <div className="h-2"></div>
                    <Input {...register("githubToken")} placeholder="Github Token (Optional)" />
                    {!!checkCredits.data && (
                        <>
                            <div className="mt-4 bg-orange-50 px-4 py-2 rounded-md border border-orange-200 text-orange-700">
                                <div className="flex items-center gap-2">
                                    <Info className="size-4"/>
                                    <p className="text-sm">You will be charged <strong>{checkCredits.data?.fileCount}</strong> credits for this repository.</p>
                                </div>
                                <p className="text-sm text-blue-600 ml-6">You have <strong>{checkCredits.data?.userCredits}</strong> credits remaining.</p>
                            </div>
                        </>
                    )}
                    <div className="h-4"></div>
                    <Button type="submit" disabled={createProject.isPending || checkCredits.isPending}>
                        {!!checkCredits.data ? "Create Project" : "Check Credits"}
                    </Button>
                </form>

                {/* Progress bar — only shows while indexing */}
                {isIndexing && (
                    <div className="mt-4 w-full">
                        <div className="flex justify-between text-sm text-muted-foreground mb-1">
                            <span>Indexing repository...</span>
                            <span>{progressData?.processed ?? 0}/{progressData?.total ?? 0} files ({percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CreatePage