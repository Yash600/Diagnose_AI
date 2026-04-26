'use client'
import { Card } from '@/components/ui/card'
import { Presentation, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { api } from '@/trpc/react'
import useProject from '@/hooks/use-project'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useUploadThing } from '@/lib/uploadthing'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const MeetingCard = () => {
    const { project } = useProject()
    const processMeeting = useMutation({mutationFn: async(data: { meetingUrl: string, meetingId: string, projectId: string }) => {
        const response = await axios.post('/api/process-meeting', data)
        return response.data
    }})
    const [isUploading, setIsUploading] = React.useState(false)
    const [progress, setProgress] = React.useState(0)
    const uploadMeeting = api.project.uploadMeeting.useMutation()
    const router = useRouter()

    const { startUpload } = useUploadThing('meetingUploader', {
        onUploadProgress: (p) => setProgress(p),
        onClientUploadComplete: (res) => {
            const file = res?.[0]
            if (!file || !project) {
                setIsUploading(false)
                return
            }
            const url = file.ufsUrl
            uploadMeeting.mutate(
                {
                    projectId: project.id,
                    meetingUrl: url,
                    name: file.name
                },
                {
                    onSuccess: (meeting) => {
                        toast.success("Meeting uploaded!")
                        router.push('/meetings')
                        processMeeting.mutateAsync({meetingUrl: url, meetingId: meeting.id, projectId: project.id})
                    },
                    onError: (e) => {
                        console.error(e)
                        toast.error("Failed to save meeting")
                    }
                }
            )
            setIsUploading(false)
        },
        onUploadError: (err) => {
            setIsUploading(false)
            toast.error("Upload failed: " + err.message)
        }
    })

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'audio/*': ['.mp3', '.wav', '.m4a']
        },
        multiple: false,
        maxSize: 50 * 1024 * 1024,
        onDrop: async (acceptedFiles) => {
            if (!project) return
            setIsUploading(true)
            setProgress(0)
            const file = acceptedFiles[0]
            if (!file) return
            await startUpload([file])
        }
    })

    return (
        <Card className='col-span-2 flex flex-col items-center justify-center p-6' {...getRootProps()}>
            {!isUploading && (
                <>
                    <Presentation className='h-10 w-10 animate-bounce' />
                    <h3 className='mt-2 text-sm font-semibold text-gray-900'>
                        Create a new meeting
                    </h3>
                    <p className='mt-1 text-center text-sm text-gray-500'>
                        Analyze your meeting with Diagnose.
                        <br />
                        Powered by AI.
                    </p>
                    <div className='mt-6'>
                        <Button disabled={isUploading}>
                            <Upload className='-ml-0.5 mr-1.5 h-5 w-5' aria-hidden="true" />
                            Upload Meeting
                            <input className='hidden' {...getInputProps()} />
                        </Button>
                    </div>
                </>
            )}

            {isUploading && (
                <div className='flex flex-col items-center gap-2'>
                    <CircularProgressbar
                        value={progress}
                        text={`${progress}%`}
                        className='size-20'
                        styles={buildStyles({ pathColor: '#3b82f6', textColor: '#3b82f6' })}
                    />
                    <p className='text-sm text-gray-500 text-center'>Uploading your meeting...</p>
                </div>
            )}
        </Card>
    )
}

export default MeetingCard