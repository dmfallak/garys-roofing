import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <Section background="primary" padding="xl">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-lg text-gray-100">
          Contact us today for a free quote on your roofing project
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button as="link" href="/quote" size="lg" variant="secondary">
            Request a Quote
          </Button>
          <Button
            as="link"
            href="/contact"
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
