import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, message } = body ?? {}

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 })
        }
        if (!isValidEmail(email)) {
            return NextResponse.json({ error: "Invalid email" }, { status: 400 })
        }
        if (String(message).length < 10) {
            return NextResponse.json({ error: "Message too short" }, { status: 400 })
        }

        const to = process.env.CONTACT_TO_EMAIL
        const from = process.env.CONTACT_FROM_EMAIL

        if (!to || !from) {
            return NextResponse.json({ error: "Server not configured" }, { status: 500 })
        }

        // Send email
        const { data, error } = await resend.emails.send({
            from: `Portfolio Contact <${from}>`,
            to: [to],
            replyTo: email, // so you can reply directly to the visitor
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        })

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ ok: true, id: data?.id })
    } catch (err: any) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    }
}