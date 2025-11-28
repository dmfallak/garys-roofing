export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "residential-roofing",
    title: "Residential Roofing Installation",
    description:
      "Complete roof installation services for homes throughout Cambridge and surrounding areas. We install high-quality asphalt shingles, metal roofing, and other materials designed to protect your home for decades.",
    features: [
      "Asphalt shingle installation",
      "Metal roofing systems",
      "Roof tear-off and disposal",
      "Proper ventilation systems",
      "Quality underlayment",
      "Manufacturer warranties",
    ],
    icon: "home",
  },
  {
    id: "commercial-roofing",
    title: "Commercial Roofing",
    description:
      "Professional commercial roofing solutions for businesses, industrial buildings, and multi-unit residential properties. We understand the unique requirements of commercial roofing projects.",
    features: [
      "Flat roof systems",
      "TPO and EPDM membranes",
      "Modified bitumen",
      "Built-up roofing (BUR)",
      "Commercial repairs",
      "Preventive maintenance programs",
    ],
    icon: "building",
  },
  {
    id: "roof-repairs",
    title: "Roof Repairs & Maintenance",
    description:
      "Fast, reliable roof repair services to fix leaks, damaged shingles, and other roofing problems. Don't let a small issue become a major expense.",
    features: [
      "Leak detection and repair",
      "Shingle replacement",
      "Flashing repairs",
      "Storm damage repair",
      "Ice dam removal",
      "Preventive maintenance",
    ],
    icon: "wrench",
  },
  {
    id: "roof-inspections",
    title: "Professional Roof Inspections",
    description:
      "Thorough roof inspections to assess the condition of your roof and identify potential problems before they become serious issues.",
    features: [
      "Comprehensive visual inspection",
      "Detailed inspection report",
      "Photo documentation",
      "Repair recommendations",
      "Insurance claim support",
      "Pre-purchase inspections",
    ],
    icon: "clipboard",
  },
  {
    id: "emergency-services",
    title: "24/7 Emergency Roofing Services",
    description:
      "Available 24/7 for emergency roofing situations. Whether it's storm damage, a fallen tree, or sudden leak, we respond quickly to protect your property.",
    features: [
      "24/7 emergency response",
      "Temporary repairs",
      "Tarping services",
      "Storm damage assessment",
      "Insurance claim assistance",
      "Permanent repair solutions",
    ],
    icon: "alert",
  },
  {
    id: "eavestrough",
    title: "Eavestrough Installation & Repair",
    description:
      "Professional eavestrough (gutter) installation and repair services to protect your foundation and landscaping from water damage.",
    features: [
      "Seamless eavestrough installation",
      "Eavestrough cleaning",
      "Downspout installation",
      "Leaf guard systems",
      "Repair and realignment",
      "Custom colour matching",
    ],
    icon: "download",
  },
  {
    id: "soffit-fascia",
    title: "Soffit & Fascia",
    description:
      "Complete soffit and fascia installation and repair to protect your roof edges and improve your home's appearance.",
    features: [
      "Aluminum soffit and fascia",
      "Vinyl options available",
      "Ventilated soffit systems",
      "Custom colours",
      "Repair services",
      "Professional installation",
    ],
    icon: "layers",
  },
  {
    id: "roof-replacement",
    title: "Complete Roof Replacement",
    description:
      "When repairs are no longer cost-effective, we provide complete roof replacement services with quality materials and expert installation.",
    features: [
      "Free roof assessments",
      "Multiple material options",
      "Complete tear-off",
      "Deck inspection and repair",
      "New ventilation systems",
      "Extended warranties",
    ],
    icon: "refresh",
  },
];
