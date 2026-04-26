"use client"
import useProject from '@/hooks/use-project'
import { cn } from '@/lib/utils'
import { api } from '@/trpc/react'
import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'


const CommitLog = () => {
    const {projectId, project} = useProject()
    const {data: commits} = api.project.getCommits.useQuery({projectId}, { enabled: !!projectId })
    return (
        <>
            <ul className='space-y-6'>
                {commits?.map((commit, commitIndex) => {
                    return (
                        <li key={commit.id} className='relative flex gap-x-4'>
                            <div className={cn(commitIndex === (commits?.length ?? 0)-1 ? 'h-6' : '-bottom-6', 'absolute left-0 top-0 flex w-6 justify-center')}>
                                <div className='w-px translate-x-1 bg-gray-200'></div>
                            </div>

                            <>
                                <img src={commit.commitAuthorAvatar || '/avatar.png'} alt='commitAvatar' className='relative mt-4 size-8 flex-none rounded-full bg-gray-50'/>
                                <div className='flex-auto rounded-mg bg-white p-3 ring-1 ring-insert ring-gray-200'>
                                    <div className='flex justify-between gap-x-4 '>
                                        <Link target='_blank' href={`${project?.githubUrl}/commits/${commit.commitHash}`} className='py-0.5 text-xs font-semibold leading-3 text-gray-500'>
                                            <span className='font-medium text-gray-800 '>
                                                {commit.commitAuthorName}
                                            </span>
                                            <span className='inline-flex items-center '>
                                                commited
                                                <ExternalLink className='ml-1 size-4 '/>
                                            </span>
                                        </Link>
                                    </div>

                                    <span className='font-semibold'>
                                        {commit.commitMessage}
                                    </span>
                                    <pre className='mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-500 break-words overflow-hidden'>
                                        {commit.summary}
                                    </pre>
                                </div>
                            </>
                        </li>
                    )
                }

                )}
            </ul>
        </>
    )
}

export default CommitLog
