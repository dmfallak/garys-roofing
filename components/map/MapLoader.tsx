"use client";

import dynamic from "next/dynamic";

// Import map dynamically to avoid SSR issues with Leaflet
const ServiceMap = dynamic(() => import("@/components/map/ServiceMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[500px] items-center justify-center rounded-lg bg-gray-100">
      <p className="text-gray-600">Loading map...</p>
    </div>
  ),
});

export default ServiceMap;
