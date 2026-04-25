"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import useProject from '@/hooks/use-project'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Image from 'next/image'
import { askQuestion } from './action'
import MDEditor from '@uiw/react-md-editor'
import CodeReferences from './code-references'
import { api } from '@/trpc/react'
import { toast } from 'sonner'
import useReFetch from '@/hooks/use-refetch'


const AskQuestionCard = () => {
    const { project } = useProject()
    const [question, setQuestion] = React.useState("")
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [fileReferences, setFileReferences] = React.useState<{fileName: string, sourceCode: string; summary: string}[]>([])
    const [answer, setAnswer] = React.useState("")
    const saveAnswer = api.project.saveAnswer.useMutation()

    const abortControllerRef = React.useRef<AbortController | null>(null)

    const onSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (!project?.id) return
        
        // Create new abort controller for this request
        abortControllerRef.current = new AbortController()
        
        setLoading(true)
        setAnswer("")
        setFileReferences([])
        setOpen(true)

        try {
            const { output, filesReferences } = await askQuestion(question, project.id)
            setFileReferences(filesReferences)
            setAnswer(output)
        } catch (error: any) {
            if (error.name === 'AbortError') {
                setAnswer("Request cancelled.")
            } else {
                setAnswer(error.message ?? "Sorry, something went wrong.")
            }
        } finally {
            setLoading(false)
        }
    }

    const onCancel = () => {
        abortControllerRef.current?.abort()
        setLoading(false)
        setAnswer("Request cancelled.")
    }

    const refetch = useReFetch()

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className='sm:max-w-[80vw] max-h-[80vh] overflow-y-auto'>
                    <DialogHeader>
                        <div className='flex items-center gap-2'>
                            <DialogTitle>
                                <Image src='/logo.png' alt='diagnose_ai' width={60} height={60} />
                                <Button disabled={saveAnswer.isPending} variant={'outline'} onClick={()=>{
                                    saveAnswer.mutate({
                                        projectId: project!.id,
                                        question,
                                        answer,
                                        fileReferences 
                                    }, {
                                        onSuccess: () => {
                                            toast.success('Answer saved!')
                                            refetch()
                                        },
                                        onError: () => {
                                            toast.error('Failed to save answer!')
                                        }
                                    })
                                }}>
                                    Save Answer
                                </Button>
                            </DialogTitle>
                        </div>
                    </DialogHeader>

                    {loading ? (
                        <div className='flex flex-col items-center gap-3'>
                            <p className='text-muted-foreground animate-pulse'>Thinking...</p>
                            <Button variant='outline' onClick={onCancel}>
                                Stop
                            </Button>
                        </div>
                    ) : (
                        <div className='prose prose-sm max-w-none'>
                            <MDEditor.Markdown source={answer} className='max-w-[70vw] !h-full max-h-[40vh] overflow-scroll'/>
                            <div className='h-4'></div>
                            <CodeReferences fileReferences={fileReferences} />
                        </div>
                    )}

                    {fileReferences.length > 0 && (
                        <>
                            <h2 className='font-semibold mt-4'>Files Referenced</h2>
                            <div className='flex flex-wrap gap-2'>
                                {fileReferences.map((file) => (
                                    <span key={file.fileName} className='bg-muted px-2 py-1 rounded text-sm'>
                                        {file.fileName}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}
                    <Button type='buttton' onClick={() => {setOpen(false)}}>
                        Close
                    </Button>
                </DialogContent>
            </Dialog>

            <Card className='relative col-span-3'>
                <CardHeader>
                    <CardTitle>Ask a Question</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit}>
                        <Textarea
                            placeholder='Which file should I edit to change the home page?'
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <div className='h-4'></div>
                        <Button type='submit' disabled={loading}>
                            {loading ? 'Thinking...' : 'Ask Diagnose_AI'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default AskQuestionCard