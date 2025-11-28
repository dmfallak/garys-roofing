import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | Gary's Roofing",
  description: "Privacy policy for Gary's Roofing. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Section background="primary" padding="xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-gray-100">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </Section>

      <Section background="white">
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Introduction</h2>
          <p>
            Gary's Roofing ("we", "our", or "us") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you visit
            our website or use our services.
          </p>

          <h2>Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect personal information that you provide to us, including:</p>
          <ul>
            <li>Name and contact information (email address, phone number, mailing address)</li>
            <li>Property information and service requests</li>
            <li>Payment information for services rendered</li>
            <li>Communications with us</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect certain information, including:</p>
          <ul>
            <li>IP address and browser type</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our roofing services</li>
            <li>Respond to your inquiries and service requests</li>
            <li>Send you quotes, estimates, and service updates</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Service providers who assist in our business operations</li>
            <li>Legal and regulatory authorities when required by law</li>
            <li>Professional advisors such as lawyers and accountants</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your
            personal information. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to or restrict certain processing of your information</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            We may use cookies and similar tracking technologies to track activity on our website and
            store certain information. You can instruct your browser to refuse all cookies or to
            indicate when a cookie is being sent.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li>Email: info@garysroofing.ca</li>
            <li>Phone: (519) 555-1234</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
