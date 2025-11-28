import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote | Gary's Roofing",
  description:
    "Request a free, no-obligation quote for your roofing project in Cambridge, Ontario. Fast response, detailed estimates, and transparent pricing.",
};

export default function QuotePage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Get a Free Quote</h1>
          <p className="mt-4 text-lg text-gray-100">
            Tell us about your roofing project and we'll provide a detailed, no-obligation quote
          </p>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray" padding="md">
        <div className="grid gap-6 sm:grid-cols-3">
          <Card padding="md" className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-heading font-semibold text-gray-900">Fast Response</h3>
            <p className="mt-2 text-sm text-gray-600">We'll get back to you within 24 hours</p>
          </Card>

          <Card padding="md" className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-heading font-semibold text-gray-900">Transparent Pricing</h3>
            <p className="mt-2 text-sm text-gray-600">Detailed estimates with no hidden fees</p>
          </Card>

          <Card padding="md" className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-heading font-semibold text-gray-900">No Obligation</h3>
            <p className="mt-2 text-sm text-gray-600">Free quotes with no pressure to buy</p>
          </Card>
        </div>
      </Section>

      {/* Quote Form */}
      <Section background="white">
        <div className="mx-auto max-w-4xl">
          <Card padding="lg">
            <div className="mb-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-gray-900">
                Tell Us About Your Project
              </h2>
              <p className="mt-2 text-gray-600">
                Fill out the form below and we'll provide a detailed quote tailored to your needs
              </p>
            </div>
            <QuoteForm />
          </Card>
        </div>
      </Section>

      {/* Alternative Contact Options */}
      <Section background="gray">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary-dark p-8 text-center text-white sm:p-12">
          <h2 className="font-heading text-3xl font-bold">Prefer to Talk?</h2>
          <p className="mt-4 text-lg text-gray-100">
            Call us directly for immediate assistance or to schedule an on-site consultation
          </p>
          <div className="mt-8">
            <a
              href="tel:+15195551234"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (519) 555-1234
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
