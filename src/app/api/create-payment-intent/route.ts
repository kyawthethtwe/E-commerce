import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-02-24.acacia",
})

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { amount, item, shippingAddress } = body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency: "bht",
            metadata: {
                items : JSON.stringify(item),
                shippingAddress: JSON.stringify(shippingAddress),
            }
        })
        return NextResponse.json({ clientSecret: paymentIntent.client_secret})
    } catch (error) {
        console.error("Error creating payment intent:", error);
        return NextResponse.json({error: "Failed to create payment intent"}, {status: 500})
        
    }
}