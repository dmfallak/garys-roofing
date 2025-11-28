// EXAMPLE: How to use local images instead of Unsplash
// Copy this and replace data/projects.ts with your actual project info

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  beforeImage: string;
  afterImage: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Smith Residence Roof Replacement",
    description: "Complete asphalt shingle roof replacement - 2,500 sq ft home",
    category: "Residential",
    location: "Cambridge, ON",
    year: "2024",
    beforeImage: "/images/projects/smith-before.jpg",    // ← Your local image
    afterImage: "/images/projects/smith-after.jpg",      // ← Your local image
  },
  {
    id: "2",
    title: "Downtown Office Building",
    description: "Commercial flat roof TPO membrane installation",
    category: "Commercial",
    location: "Kitchener, ON",
    year: "2024",
    beforeImage: "/images/projects/office-before.jpg",   // ← Your local image
    afterImage: "/images/projects/office-after.jpg",     // ← Your local image
  },
  // Add more projects here...
];

export const categories = ["All", "Residential", "Commercial", "Repair", "Eavestrough"];
