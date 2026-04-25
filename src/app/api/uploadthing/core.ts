import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    meetingUploader: f({
        audio: { maxFileSize: "64MB", maxFileCount: 1 }
    })
    .middleware(() => ({ }))
    .onUploadComplete(({ file }) => {
        try {
            console.log("✅ Upload complete:", file.ufsUrl)
            return { url: file.ufsUrl }
        } catch (error) {
            console.error("❌ onUploadComplete error:", error)
        }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;