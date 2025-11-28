import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { serviceAreas } from "@/data/serviceAreas";
import ServiceMap from "@/components/map/MapLoader";

export const metadata: Metadata = {
  title: "Service Areas | Gary's Roofing",
  description:
    "Gary's Roofing serves Cambridge, Kitchener, Waterloo, Guelph, and surrounding areas in Ontario. Professional roofing services throughout the Waterloo Region.",
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Service Areas</h1>
          <p className="mt-4 text-lg text-gray-100">
            Serving Cambridge, Waterloo Region, and surrounding communities
          </p>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="white">
        <div className="mb-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900">Where We Serve</h2>
          <p className="mt-4 text-lg text-gray-600">
            We proudly serve Cambridge and communities within a 50km radius
          </p>
        </div>
        <ServiceMap />
      </Section>

      {/* Service Areas List */}
      <Section background="gray">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900">Our Service Areas</h2>
          <p className="mt-4 text-lg text-gray-600">
            Professional roofing services available in these communities
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <Card key={area.name} padding="lg" hover>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    {area.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{area.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Additional Coverage Info */}
      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold text-gray-900">
              Don't See Your Area?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We may still be able to help! Our service area extends to many communities throughout
              Southern Ontario.
            </p>
            <p className="mt-4 text-gray-600">
              Contact us to discuss your roofing project. We'll let you know if we can serve your
              location and provide you with a detailed quote for your roofing needs.
            </p>
            <div className="mt-8">
              <Button as="link" href="/contact" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          <Card padding="lg" className="bg-gradient-to-br from-primary to-primary-dark text-white">
            <h3 className="font-heading text-2xl font-bold">Service Commitment</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Same-day emergency service available",
                "Free on-site consultations",
                "Detailed written estimates",
                "Licensed and insured in Ontario",
                "Local family-owned business",
                "Supporting our community since 1990",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Request a free quote for your roofing project today
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="link" href="/quote" size="lg">
              Request a Quote
            </Button>
            <Button as="link" href="tel:+15195551234" size="lg" variant="secondary">
              Call (519) 555-1234
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
