"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { serviceAreas, centerCoordinates, serviceRadiusKm } from "@/data/serviceAreas";

// Fix for default marker icons in react-leaflet
const createCustomIcon = (color: string) =>
  new Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

const homeIcon = createCustomIcon("red");
const serviceIcon = createCustomIcon("blue");

export default function ServiceMap() {
  return (
    <div className="h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
      <MapContainer
        center={centerCoordinates}
        zoom={10}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Service radius circle */}
        <Circle
          center={centerCoordinates}
          radius={serviceRadiusKm * 1000}
          pathOptions={{
            color: "#1E3A8A",
            fillColor: "#1E3A8A",
            fillOpacity: 0.1,
          }}
        />

        {/* Cambridge (home base) marker */}
        <Marker position={centerCoordinates} icon={homeIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-heading text-lg font-bold text-primary">Cambridge</h3>
              <p className="mt-1 text-sm text-gray-600">Our home base</p>
              <p className="mt-2 text-sm font-medium">Gary's Roofing Headquarters</p>
            </div>
          </Popup>
        </Marker>

        {/* Other service area markers */}
        {serviceAreas
          .filter((area) => area.name !== "Cambridge")
          .map((area) => (
            <Marker key={area.name} position={area.coordinates} icon={serviceIcon}>
              <Popup>
                <div className="text-center">
                  <h3 className="font-heading text-lg font-bold text-primary">{area.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{area.description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
