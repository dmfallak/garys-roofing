export interface ServiceArea {
  name: string;
  description: string;
  coordinates: [number, number];
}

export const serviceAreas: ServiceArea[] = [
  {
    name: "Cambridge",
    description: "Our home base and primary service area",
    coordinates: [43.3616, -80.3144],
  },
  {
    name: "Kitchener",
    description: "Full roofing services available",
    coordinates: [43.4516, -80.4925],
  },
  {
    name: "Waterloo",
    description: "Residential and commercial roofing",
    coordinates: [43.4643, -80.5204],
  },
  {
    name: "Guelph",
    description: "Comprehensive roofing solutions",
    coordinates: [43.5448, -80.2482],
  },
  {
    name: "Ayr",
    description: "Local roofing services",
    coordinates: [43.2833, -80.4500],
  },
  {
    name: "Paris",
    description: "Professional roofing contractor",
    coordinates: [43.1955, -80.3840],
  },
  {
    name: "Brantford",
    description: "Quality roofing services",
    coordinates: [43.1394, -80.2644],
  },
];

// Cambridge coordinates (center of map)
export const centerCoordinates: [number, number] = [43.3616, -80.3144];

// Service radius in kilometers
export const serviceRadiusKm = 50;
