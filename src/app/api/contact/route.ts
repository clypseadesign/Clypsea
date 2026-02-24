import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
    try {
        // Initialize the Resend client inside the handler so it doesn't crash the Next.js static build step
        const resend = new Resend(process.env.RESEND_API_KEY);

        const body = await req.json();
        const { name, email, company, service, budget, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // Send email via Resend
        const data = await resend.emails.send({
            from: 'Clypsea Contact Form <onboarding@resend.dev>', // Resend's default testing domain. You will need to verify your own domain in Resend for production use.
            to: ['clypse.design.agency@gmail.com'],
            subject: `New Lead: ${name} from ${company || 'N/A'}`,
            html: `
                <h2>New Contact Inquiry from Clypsea Website</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                <p><strong>Service Requested:</strong> ${service || 'Not specified'}</p>
                <p><strong>Estimated Budget:</strong> ${budget || 'Not specified'}</p>
                <br/>
                <h3>Message:</h3>
                <p>${message}</p>
            `,
            // Optional: Reply-to the user directly
            replyTo: email,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json(
            { error: 'Failed to send communication. Please try again later.' },
            { status: 500 }
        );
    }
}
