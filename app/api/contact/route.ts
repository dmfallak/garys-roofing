import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contactSchema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // TODO: Implement email sending with Resend
    // For now, we'll just log the data
    console.log("Contact form submission:", validatedData);

    // Example of how to use Resend (uncomment when RESEND_API_KEY is set):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Gary\'s Roofing <noreply@garysroofing.ca>',
      to: [process.env.CONTACT_EMAIL || 'info@garysroofing.ca'],
      subject: `Contact Form: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });
    */

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
