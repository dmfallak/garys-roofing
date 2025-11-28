import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Gary's Roofing",
  description:
    "Get in touch with Gary's Roofing for all your roofing needs in Cambridge, Ontario. Call (519) 555-1234 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-100">
            Get in touch with us for all your roofing needs
          </p>
        </div>
      </Section>

      {/* Contact Information & Form */}
      <Section background="gray">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-gray-900">Get In Touch</h2>
            <p className="mt-4 text-gray-600">
              Have questions about our roofing services? Need a quote? We're here to help!
              Contact us by phone, email, or use the form and we'll get back to you promptly.
            </p>

            <div className="mt-8 space-y-6">
              {/* Phone */}
              <Card padding="md">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:+15195551234"
                      className="mt-1 text-primary hover:text-primary-dark"
                    >
                      (519) 555-1234
                    </a>
                    <p className="mt-1 text-sm text-gray-600">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card padding="md">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:info@garysroofing.ca"
                      className="mt-1 text-primary hover:text-primary-dark"
                    >
                      info@garysroofing.ca
                    </a>
                    <p className="mt-1 text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card padding="md">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="mt-1 text-gray-600">
                      Serving Cambridge, Kitchener,
                      <br />
                      Waterloo, and surrounding areas
                    </p>
                  </div>
                </div>
              </Card>

              {/* Business Hours */}
              <Card padding="md">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <div className="mt-1 space-y-1 text-sm text-gray-600">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency Service Only</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card padding="lg">
              <h2 className="font-heading text-2xl font-bold text-gray-900">Send Us a Message</h2>
              <p className="mt-2 text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
