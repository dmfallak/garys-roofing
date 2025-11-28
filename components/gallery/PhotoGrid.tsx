"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { projects, type Project } from "@/data/projects";
import Card from "@/components/ui/Card";

interface PhotoGridProps {
  selectedCategory: string;
}

export default function PhotoGrid({ selectedCategory }: PhotoGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [viewType, setViewType] = useState<"before" | "after">("after");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const handleImageClick = (project: Project, type: "before" | "after") => {
    setCurrentProject(project);
    setViewType(type);
    setLightboxOpen(true);
  };

  const getLightboxSlides = () => {
    if (!currentProject) return [];

    const baseSlides = [
      {
        src: currentProject.afterImage,
        alt: `${currentProject.title} - After`,
        title: `${currentProject.title} - After`,
      },
      {
        src: currentProject.beforeImage,
        alt: `${currentProject.title} - Before`,
        title: `${currentProject.title} - Before`,
      },
    ];

    return viewType === "before" ? baseSlides.reverse() : baseSlides;
  };

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.id} padding="sm" hover className="overflow-hidden">
            <div className="grid grid-cols-2 gap-2">
              {/* Before Image */}
              <div
                className="group relative aspect-square cursor-pointer overflow-hidden rounded"
                onClick={() => handleImageClick(project, "before")}
              >
                <Image
                  src={project.beforeImage}
                  alt={`${project.title} - Before`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded bg-white px-3 py-1 text-sm font-medium text-gray-900">
                    Before
                  </span>
                </div>
              </div>

              {/* After Image */}
              <div
                className="group relative aspect-square cursor-pointer overflow-hidden rounded"
                onClick={() => handleImageClick(project, "after")}
              >
                <Image
                  src={project.afterImage}
                  alt={`${project.title} - After`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded bg-primary px-3 py-1 text-sm font-medium text-white">
                    After
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-heading text-lg font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
                <span className="rounded-full bg-primary/10 px-2 py-1">{project.category}</span>
                <span className="rounded-full bg-gray-100 px-2 py-1">{project.location}</span>
                <span className="rounded-full bg-gray-100 px-2 py-1">{project.year}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-600">No projects found in this category.</p>
        </div>
      )}

      {currentProject && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={getLightboxSlides()}
        />
      )}
    </>
  );
}
