import Link from "next/link";
import Container from "@/components/ui/Container";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Contact", href: "/contact" },
    { name: "Get a Quote", href: "/quote" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <span className="text-2xl font-bold">GR</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl font-bold">Gary's Roofing</span>
                  <span className="text-sm text-gray-400">Cambridge, Ontario</span>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm text-gray-400">
                Professional roofing services in Cambridge, Ontario and surrounding areas.
                Residential and commercial roofing, repairs, inspections, and emergency services.
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+15195551234" className="hover:text-accent">
                    (519) 555-1234
                  </a>
                </p>
                <p className="text-sm">
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:info@garysroofing.ca" className="hover:text-accent">
                    info@garysroofing.ca
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-heading text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="mb-4 font-heading text-lg font-semibold">Service Areas</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Cambridge</li>
                <li>Kitchener</li>
                <li>Waterloo</li>
                <li>Guelph</li>
                <li>Ayr</li>
                <li>Paris</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <p className="text-sm text-gray-400">
                &copy; {currentYear} Gary's Roofing. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
