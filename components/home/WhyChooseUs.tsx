import Section from "@/components/ui/Section";

const features = [
  {
    title: "30+ Years Experience",
    description: "Decades of expertise in residential and commercial roofing across Ontario.",
  },
  {
    title: "Quality Materials",
    description: "We use only the highest quality roofing materials from trusted manufacturers.",
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind and protection.",
  },
  {
    title: "Competitive Pricing",
    description: "Fair, transparent pricing with detailed quotes and no hidden fees.",
  },
  {
    title: "Warranty Guaranteed",
    description: "Comprehensive warranties on all workmanship and materials.",
  },
  {
    title: "Customer Satisfaction",
    description: "Your satisfaction is our priority. We don't finish until you're happy.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section background="white">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Gary's Roofing?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're committed to providing the highest quality roofing services in Cambridge and
            surrounding areas. When you choose Gary's Roofing, you're choosing reliability,
            expertise, and exceptional customer service.
          </p>
          <p className="mt-4 text-gray-600">
            From minor repairs to complete roof replacements, we handle every project with the
            same level of professionalism and attention to detail. Our team is dedicated to
            protecting your home or business with durable, weather-resistant roofing solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
