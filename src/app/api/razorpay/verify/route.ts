import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { db } from '@/server/db'

export async function POST(req: NextRequest) {
    const { userId } = await auth()
    if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        credits
    } = await req.json()

    // Verify signature
    const body = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
        .update(body)
        .digest('hex')

    if (expectedSignature !== razorpay_signature) {
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Add credits to user
    await db.user.update({
        where: { id: userId },
        data: { credits: { increment: credits } }
    })

    return NextResponse.json({ success: true })
}