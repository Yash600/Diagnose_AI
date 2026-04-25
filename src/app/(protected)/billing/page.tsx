'use client' 
import React from 'react'
import { api } from '@/trpc/react'
import { Info } from 'lucide-react'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { createCheckoutSession } from './action'
import { toast } from 'sonner'

const BillingPage = () => {
    const { data: user, refetch } = api.project.getMyCredits.useQuery()
    const [creditsToBuy, setCreditsToBuy] = React.useState<number[]>([100])
    const creditsToBuyAmount = creditsToBuy[0]!
    const price = (creditsToBuyAmount * 10).toFixed(0)

    const handleBuy = async () => {
        try {
            const { orderId, amount, keyId } = await createCheckoutSession(creditsToBuyAmount)

            // Load Razorpay script
            const script = document.createElement('script')
            script.src = 'https://checkout.razorpay.com/v1/checkout.js'
            document.body.appendChild(script)

            script.onload = () => {
                const options = {
                    key: keyId,
                    amount,
                    currency: 'INR',
                    name: 'Diagnose AI',
                    description: `${creditsToBuyAmount} Credits`,
                    order_id: orderId,
                    handler: async (response: any) => {
                        const res = await fetch('/api/razorpay/verify', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                credits: creditsToBuyAmount
                            })
                        })
                        if (res.ok) {
                            toast.success(`${creditsToBuyAmount} credits added!`)
                            refetch()
                        } else {
                            toast.error('Payment verification failed')
                        }
                    },
                    theme: { color: '#7c3aed' }
                }
                // @ts-ignore
                const rzp = new window.Razorpay(options)
                rzp.open()
            }
        } catch (error) {
            toast.error('Something went wrong')
            console.error(error)
        }
    }

    return (
        <div>
            <h1 className='text-xl font-semibold'>Billing</h1>
            <div className='h-2'></div>
            <p className='text-sm text-gray-500'>
                You currently have <span className='font-bold'>{user?.credits ?? 0}</span> credits.
            </p>
            <div className="h-2"></div>
            <div className='bg-blue-50 px-4 py-2 rounded-md border border-blue-200 text-blue-700'>
                <div className='flex items-center gap-2'>
                    <Info className='size-4'/>
                    <p className='text-sm'>Each credit allows you to index 1 file in a repository.</p>
                </div>
                <p className='text-sm'>E.g. If your project has 100 files, you will need 100 credits to index it.</p>
            </div>
            <div className='h-4'></div>
            <Slider 
                defaultValue={[100]} 
                max={1000} 
                min={10} 
                step={10} 
                onValueChange={value => setCreditsToBuy(value)} 
                value={creditsToBuy}
            />
            <div className="h-4"></div>
            <Button onClick={handleBuy}>
                Buy {creditsToBuyAmount} credits for ₹{price}
            </Button>
        </div>
    )
}

export default BillingPage