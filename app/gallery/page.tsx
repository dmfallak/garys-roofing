"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import PhotoGrid from "@/components/gallery/PhotoGrid";
import { categories } from "@/data/projects";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Project Gallery</h1>
          <p className="mt-4 text-lg text-gray-100">
            View our completed roofing projects throughout Cambridge and surrounding areas
          </p>
        </div>
      </Section>

      {/* Category Filter */}
      <Section background="white" padding="md">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg px-6 py-2 font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Gallery Grid */}
      <Section background="gray">
        <PhotoGrid selectedCategory={selectedCategory} />
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary-dark p-8 text-center text-white sm:p-12">
          <h2 className="font-heading text-3xl font-bold">Ready to Transform Your Roof?</h2>
          <p className="mt-4 text-lg text-gray-100">
            Let's discuss your roofing project and create amazing results like these.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as="link" href="/quote" variant="secondary" size="lg">
              Get a Free Quote
            </Button>
            <Button
              as="link"
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
