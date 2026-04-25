'use client'
import React from "react"
import useProject from "@/hooks/use-project"
import { api } from "@/trpc/react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import AskQuestionCard from "../dashboard/ask-question-card"
import MDEditor from "@uiw/react-md-editor"
import CodeReferences from "../dashboard/code-references"

export default function QAPage() {
    const { projectId } = useProject()
    const { data: questions } = api.project.getQuestions.useQuery({ projectId })
    const [questionIndex, setQuestionIndex] = React.useState(0)
    const question = questions?.[questionIndex]

    return (
        <div>
            <AskQuestionCard />
            <div className="h-4"></div>
            <h1 className="text-xl font-semibold">Saved Questions</h1>
            <div className="h-2"></div>
            
            <Sheet>
                <div className="flex flex-col gap-2">
                    {questions?.map((question, index) => (
                        <React.Fragment key={question.id}>
                            <SheetTrigger onClick={() => setQuestionIndex(index)} asChild>
                                <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow border cursor-pointer">
                                    <img className="rounded-full" height={30} width={30} src={question.user.imageUrl ?? "/default-avatar.png"} />
                                    <div className="text-left flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <p className="text-gray-700 line-clamp-1 text-lg font-medium">
                                                {question.question}
                                            </p>
                                            <span className="text-xs text-gray-400 whitespace-nowrap">
                                                {question.createdAt.toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-sm line-clamp-1">
                                            {question.answer}
                                        </p>
                                    </div>
                                </div>
                            </SheetTrigger>
                        </React.Fragment>
                    ))}
                </div>

                {question && (
                    <SheetContent style={{ width: '80vw', maxWidth: '80vw' }} className="flex flex-col h-full overflow-hidden p-0">
                        {/* Header */}
                        <div className="px-6 py-4 border-b">
                            <SheetTitle className="font-bold text-3xl">{question.question}</SheetTitle>
                        </div>
                        
                        {/* Scrollable content */}
                        <div className="flex-1 overflow-y-auto px-6 py-4">
                            <MDEditor.Markdown 
                                source={question.answer} 
                                className="prose prose-sm max-w-none"
                            />
                            <div className="h-6"></div>
                            <CodeReferences fileReferences={(question.fileReferences ?? []) as any} />
                        </div>
                    </SheetContent>
                )}
            </Sheet>
        </div>
    )
}