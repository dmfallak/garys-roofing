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
    title: "Residential Roof Replacement",
    description: "Complete asphalt shingle roof replacement on a two-story home in Cambridge.",
    category: "Residential",
    location: "Cambridge, ON",
    year: "2024",
    beforeImage: "/images/projects/project-1-before.png",
    afterImage: "/images/projects/project-1-after.png",
  },
  {
    id: "2",
    title: "Metal Roof Installation",
    description: "Modern metal roofing installation for increased durability and energy efficiency.",
    category: "Residential",
    location: "Kitchener, ON",
    year: "2024",
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    id: "3",
    title: "Commercial Flat Roof",
    description: "TPO membrane installation on commercial building with improved drainage system.",
    category: "Commercial",
    location: "Waterloo, ON",
    year: "2023",
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
    afterImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  },
  {
    id: "4",
    title: "Storm Damage Repair",
    description: "Emergency repair and shingle replacement after severe storm damage.",
    category: "Repair",
    location: "Guelph, ON",
    year: "2024",
    beforeImage: "https://images.unsplash.com/photo-1521587765099-8835e7201186?w=800",
    afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
  },
  {
    id: "5",
    title: "Eavestrough Installation",
    description: "Seamless eavestrough and downspout installation with leaf guards.",
    category: "Eavestrough",
    location: "Cambridge, ON",
    year: "2023",
    beforeImage: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800",
    afterImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
  },
  {
    id: "6",
    title: "Heritage Home Restoration",
    description: "Careful restoration of historic home roof while maintaining original character.",
    category: "Residential",
    location: "Paris, ON",
    year: "2023",
    beforeImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  },
];

export const categories = ["All", "Residential", "Commercial", "Repair", "Eavestrough"];
