import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Gary's Roofing",
  description:
    "Learn about Gary's Roofing, your trusted roofing contractor in Cambridge, Ontario. Over 30 years of experience in residential and commercial roofing.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">About Gary's Roofing</h1>
          <p className="mt-4 text-lg text-gray-100">
            Your trusted roofing partner in Cambridge, Ontario for over 30 years
          </p>
        </div>
      </Section>

      {/* Story Section */}
      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="mt-6 space-y-4 text-gray-600">
              <p>
                Gary's Roofing was founded with a simple mission: to provide honest, reliable, and
                high-quality roofing services to homeowners and businesses in Cambridge, Ontario
                and the surrounding areas.
              </p>
              <p>
                What started as a one-person operation has grown into a trusted name in the local
                community. Over the years, we've completed thousands of roofing projects, from
                simple repairs to complete roof replacements, always maintaining our commitment to
                quality and customer satisfaction.
              </p>
              <p>
                As a locally-owned and operated business, we understand the unique challenges that
                Ontario's weather presents. We use this knowledge to recommend the best roofing
                solutions for our climate, ensuring your roof will stand the test of time.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card padding="lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-gray-600">
                    To protect homes and businesses with durable, high-quality roofing while
                    providing exceptional customer service and honest, transparent pricing.
                  </p>
                </div>
              </div>
            </Card>

            <Card padding="lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900">Our Vision</h3>
                  <p className="mt-2 text-gray-600">
                    To be the most trusted and recommended roofing company in the Waterloo Region,
                    known for quality workmanship and outstanding customer care.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900">Our Values</h2>
          <p className="mt-4 text-lg text-gray-600">
            These core values guide everything we do
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Integrity",
              description:
                "We believe in honest communication, transparent pricing, and doing what's right for our customers.",
            },
            {
              title: "Quality",
              description:
                "We never compromise on the quality of our materials or workmanship. Your roof is an investment we take seriously.",
            },
            {
              title: "Reliability",
              description:
                "When we make a commitment, we keep it. You can count on us to show up on time and complete the job as promised.",
            },
            {
              title: "Safety",
              description:
                "Safety is our top priority. We follow all industry standards and safety protocols to protect our team and your property.",
            },
            {
              title: "Community",
              description:
                "As a local business, we're committed to serving and supporting the Cambridge community.",
            },
            {
              title: "Excellence",
              description:
                "We strive for excellence in every project, treating each roof as if it were our own.",
            },
          ].map((value) => (
            <Card key={value.title} padding="lg" hover>
              <h3 className="font-heading text-xl font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-2 text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certifications Section */}
      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-bold text-gray-900">
              Licensed & Certified
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We maintain all necessary licenses, certifications, and insurance to provide you with
              professional roofing services you can trust.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Licensed roofing contractor in Ontario",
                "Comprehensive liability insurance",
                "WSIB coverage for all workers",
                "Certified by leading manufacturers",
                "Up-to-date with building codes",
                "Ongoing professional training",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 flex-shrink-0 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-primary to-primary-dark p-8 text-white">
            <h3 className="font-heading text-2xl font-bold">Why Choose Gary's Roofing?</h3>
            <div className="mt-6 space-y-4">
              <div>
                <div className="text-4xl font-bold text-accent">30+</div>
                <div className="text-sm text-gray-200">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">1000+</div>
                <div className="text-sm text-gray-200">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent">100%</div>
                <div className="text-sm text-gray-200">Customer Satisfaction</div>
              </div>
            </div>
            <div className="mt-8">
              <Button as="link" href="/quote" variant="secondary" size="md">
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the Gary's Roofing difference. Contact us today for a free consultation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="link" href="/quote" size="lg">
              Request a Quote
            </Button>
            <Button as="link" href="/contact" size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
