import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Service | Gary's Roofing",
  description: "Terms of service for Gary's Roofing. Read our terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <>
      <Section background="primary" padding="xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-lg text-gray-100">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </Section>

      <Section background="white">
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the services of Gary's Roofing, you agree to be bound by these Terms
            of Service and all applicable laws and regulations.
          </p>

          <h2>Services</h2>
          <p>
            Gary's Roofing provides professional roofing services including installation, repair,
            inspection, and maintenance for residential and commercial properties in Cambridge, Ontario
            and surrounding areas.
          </p>

          <h2>Quotes and Estimates</h2>
          <ul>
            <li>All quotes and estimates are provided free of charge and without obligation</li>
            <li>Quotes are valid for 30 days unless otherwise specified</li>
            <li>Final pricing may vary based on unforeseen circumstances discovered during work</li>
            <li>Any changes to scope of work will be communicated and approved before proceeding</li>
          </ul>

          <h2>Payment Terms</h2>
          <ul>
            <li>Payment terms will be outlined in your service agreement</li>
            <li>Deposits may be required for larger projects</li>
            <li>Final payment is due upon completion of work</li>
            <li>We accept cash, check, and major credit cards</li>
          </ul>

          <h2>Warranties</h2>
          <p>
            Warranty terms vary depending on the type of service and materials used. Specific warranty
            information will be provided in your service agreement. We stand behind our work and offer
            warranties on both labour and materials where applicable.
          </p>

          <h2>Scheduling and Cancellation</h2>
          <ul>
            <li>We will make every effort to complete work within agreed timeframes</li>
            <li>Weather conditions may affect scheduling for exterior work</li>
            <li>Cancellations must be made at least 24 hours in advance</li>
            <li>Deposits may be non-refundable if materials have been ordered</li>
          </ul>

          <h2>Liability</h2>
          <p>
            Gary's Roofing carries full liability insurance and WSIB coverage. We are not liable for
            damage caused by:
          </p>
          <ul>
            <li>Pre-existing structural issues not disclosed or discovered during inspection</li>
            <li>Acts of nature or extreme weather events after completion</li>
            <li>Damage caused by third parties after our work is complete</li>
          </ul>

          <h2>Property Access</h2>
          <p>
            By hiring our services, you grant us permission to access your property as necessary to
            complete the work. We will respect your property and clean up after completing our work.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Gary's Roofing shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising out of or
            relating to our services.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective
            immediately upon posting to our website.
          </p>

          <h2>Contact Information</h2>
          <p>For questions about these Terms of Service, please contact us:</p>
          <ul>
            <li>Email: info@garysroofing.ca</li>
            <li>Phone: (519) 555-1234</li>
            <li>Service Area: Cambridge, ON and surrounding areas</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
