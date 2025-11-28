import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section background="white" padding="xl">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-heading text-6xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900">Page Not Found</h2>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't
          exist.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button as="link" href="/" size="lg">
            Go Home
          </Button>
          <Button as="link" href="/contact" size="lg" variant="outline">
            Contact Us
          </Button>
        </div>

        <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
          <div>
            <h3 className="font-heading text-lg font-semibold text-gray-900">Popular Pages</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/services" className="text-primary hover:text-primary-dark">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-primary hover:text-primary-dark">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-primary hover:text-primary-dark">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary hover:text-primary-dark">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-gray-900">Need Help?</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="tel:+15195551234" className="text-primary hover:text-primary-dark">
                  Call (519) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:info@garysroofing.ca" className="text-primary hover:text-primary-dark">
                  Email Us
                </a>
              </li>
              <li>
                <Link href="/quote" className="text-primary hover:text-primary-dark">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
