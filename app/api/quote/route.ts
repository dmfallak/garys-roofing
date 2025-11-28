import { NextRequest, NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation/quoteSchema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = quoteSchema.parse(body);

    // TODO: Implement email sending with Resend
    // For now, we'll just log the data
    console.log("Quote form submission:", validatedData);

    // Example of how to use Resend (uncomment when RESEND_API_KEY is set):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Gary\'s Roofing <noreply@garysroofing.ca>',
      to: [process.env.CONTACT_EMAIL || 'info@garysroofing.ca'],
      subject: `Quote Request from ${validatedData.name}`,
      html: `
        <h2>New Quote Request</h2>
        <h3>Contact Information</h3>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Address:</strong> ${validatedData.address}, ${validatedData.city}</p>

        <h3>Project Details</h3>
        <p><strong>Services:</strong> ${validatedData.serviceType.join(', ')}</p>
        <p><strong>Property Type:</strong> ${validatedData.propertyType}</p>
        <p><strong>Description:</strong> ${validatedData.projectDescription}</p>

        <h3>Additional Details</h3>
        <p><strong>Urgency:</strong> ${validatedData.urgency}</p>
        <p><strong>Preferred Contact:</strong> ${validatedData.preferredContactMethod}</p>
      `,
    });
    */

    return NextResponse.json(
      { message: "Quote request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote form:", error);
    return NextResponse.json(
      { error: "Failed to send quote request" },
      { status: 500 }
    );
  }
}
