'use server'
import { auth } from '@clerk/nextjs/server'
import { razorpay } from '@/lib/razorpay'

export async function createCheckoutSession(credits: number) {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const amount = credits * 10 * 100  // credits × ₹10 × 100 paise

    const order = await razorpay.orders.create({
        amount,
        currency: 'INR',
        receipt: `rcpt_${Date.now()}`,  // ✅ short receipt,
        notes: {
            userId,
            credits: credits.toString()
        }
    })

    return {
        orderId: order.id,
        amount,
        credits,
        keyId: process.env.RAZORPAY_KEY_ID!
    }
}