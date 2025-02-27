import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-02-24.acacia",
})

export async function GET(req: Request, { params}: { params : { id: string}}){
    try {
        const paymenIntent = await stripe.paymentIntents.retrieve(params.id);
        const items = JSON.parse(paymenIntent.metadata.items);
        const shippingAddress = JSON.parse(paymenIntent.metadata.shippingAddress || "{}");

        return NextResponse.json({
            id: paymenIntent.id,
            amount: paymenIntent.amount,
            status: paymenIntent.status,
            items,
            shippingAddress,
            created: paymenIntent.created
        })

    } catch (error) {
        console.error("Error fetching payment intent:", error);
        return NextResponse.json({error: "Failed to fetch payment intent"}, {status: 500})
    }
}