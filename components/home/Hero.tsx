import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-primary to-primary-dark py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Professional Roofing Services in{" "}
            <span className="text-accent">Cambridge, Ontario</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl">
            Expert residential and commercial roofing solutions. Quality workmanship, reliable
            service, and customer satisfaction guaranteed.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="link" href="/quote" size="lg" variant="secondary">
              Get a Free Quote
            </Button>
            <Button as="link" href="/contact" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-6 text-white sm:flex-row sm:gap-12">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:+15195551234" className="text-sm hover:text-accent">
                (519) 555-1234
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
              </svg>
              <span className="text-sm">24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
