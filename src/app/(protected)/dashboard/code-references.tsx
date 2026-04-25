'use client'
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { lucario } from 'react-syntax-highlighter/dist/esm/styles/prism'

type Props = {
    fileReferences: { fileName: string, sourceCode: string; summary: string }[]
}

const CodeReferences = ({ fileReferences }: Props) => {
    const [tab, setTab] = React.useState(fileReferences[0]?.fileName)
    if (!fileReferences || fileReferences.length === 0) return null

    return (
        <div className='w-full'>
            <Tabs value={tab} onValueChange={setTab}>
                <div className='overflow-x-auto flex gap-2 bg-gray-200 p-1 rounded-md'>
                    {fileReferences.map((file) => (  // ✅ () not {}
                        <button 
                            onClick={() => setTab(file.fileName)} 
                            key={file.fileName} 
                            className={cn(
                                'px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap text-muted-foreground hover:bg-muted',
                                { 'bg-primary text-primary-foreground': tab === file.fileName } // ✅ fileName not filename
                            )}
                        >
                            {file.fileName}
                        </button>
                    ))}
                </div>
                {fileReferences.map((file) => (
                    <TabsContent 
                        key={file.fileName} 
                        value={file.fileName} 
                        className='max-h-[40vh] overflow-auto rounded-md mt-2'
                    >
                        <SyntaxHighlighter language='typescript' style={lucario}>
                            {file.sourceCode}
                        </SyntaxHighlighter>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

export default CodeReferences