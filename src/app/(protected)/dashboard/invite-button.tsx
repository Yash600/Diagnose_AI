'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import useProject from '@/hooks/use-project'
import { Input } from '@/components/ui/input'
import React from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const InviteButton = () => {
    const {projectId} = useProject()
    const [open, setOpen] = React.useState(false)
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Invite Team Member</DialogTitle>
                    </DialogHeader>
                    <p className='text-sm text-gray-500'>
                        Share the following link to invite team members to this project:
                    </p>
                    <Input className='mt-4' readOnly onClick={() => {
                            navigator.clipboard.writeText(`${window.location.origin}/join/${projectId}`) 
                            toast.success("copied to clipboard") 
                        }} 
                        value={open ? `${window.location.origin}/join/${projectId}` : ''}
                    />
                </DialogContent>
            </Dialog>
            <Button size='sm' onClick={() => setOpen(true)}>Invite Team Member</Button>
        </>
    )
}

export default InviteButton
