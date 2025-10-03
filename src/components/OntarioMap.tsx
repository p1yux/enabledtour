import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import eventData from "@/entities/Event.json";
import { Calendar, MapPin } from "lucide-react";
import { format, parse } from "date-fns";
import "leaflet/dist/leaflet.css";

// Fix for default markers in react-leaflet
import L from "leaflet";
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const provinceCenters: { [key: string]: [number, number] } = {
  Ontario: [43.6532, -79.3832],                 // Ottawa
  Quebec: [46.8138, -71.2080],                 // Québec City
  "British Columbia": [48.4073, -123.3298],    // Victoria
  Alberta: [53.6316, -113.323975],             // Edmonton
  Manitoba: [49.8951, -97.1384],               // Winnipeg
  Saskatchewan: [50.4452, -104.6189],          // Regina
  "Nova Scotia": [44.6511, -63.5827],          // Halifax
  "New Brunswick": [45.9650, -66.6463],        // Fredericton
  "Prince Edward Island": [46.2389, -63.1292], // Charlottetown
  "Newfoundland and Labrador": [47.5605, -52.7128], // St. John’s
};

export default function OntarioMap() {
  // Province selection state
  const [selectedProvince, setSelectedProvince] = useState("Ontario");

  // Ontario city coordinates from Event.json
  const ontarioCities = Array.isArray(eventData)
    ? eventData.map(e => ({ name: e.city, lat: e.lat, lng: e.lng, link: e.registration_url, status: e.status }))
    : [];

  // Use eventData directly from JSON
  const events = Array.isArray(eventData) ? eventData : [];

  const getEventForCity = (cityName) => {
    return events.find(event => event.city === cityName);
  };

  // Create custom icons for cities with and without events
  const createCustomIcon = (status: string) => {
    const hasEvent = status === "confirmed" || status === "";
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 3px solid white;
          background-color: ${hasEvent ? '#10b981' : '#a8a8a8ff'};
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          ${hasEvent ? 'animation: pulse 2s infinite;' : ''}
        "></div>
      `,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
  };

  return (
    <section id="cities" className="py-24 bg-white relative z-0 mt-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-5xl leading-none">🗺️</span>
              <h2 className="text-primary text-3xl md:text-4xl font-bold text-gray-900 justify">
                Cities We're Visiting
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Click on the markers to see event details for each city
            </p>
          </div>
            <div className="mb-6">
            {/* Province filter buttons */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba", "Saskatchewan", "Nova Scotia", "New Brunswick", "Prince Edward Island", "Newfoundland and Labrador"].map(province => (
              <button
              key={province}
              className={`px-3 py-1 rounded-full border text-xs font-medium transition ${
              province === selectedProvince
                ? "bg-primary text-white border-primary shadow"
                : "bg-gray-50 text-gray-800 border-gray-200"
              }`}
              // disabled={province !== "Ontario"}
              onClick={() => setSelectedProvince(province)}
              >
              {province}
              </button>
              ))}
            </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border">
            <MapContainer
              center={provinceCenters[selectedProvince]}
              zoom={5.5}
              style={{ height: "500px", width: "100%" }}
              scrollWheelZoom={false}
              key={selectedProvince} // force re-center on province change
            >
              <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {ontarioCities.map((city, index) => {
                const cityEvent = getEventForCity(city.name);
                return (
                  <Marker
                    key={index}
                    position={[city.lat, city.lng]}
                    icon={createCustomIcon(city.status) as any}
                  >
                    <Popup>
                      <div className="p-2">
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="w-5 h-5 text-blue-600" />
                          <h3 className="font-bold text-gray-900 text-lg">{city.name}</h3>
                        </div>
                        
                        {cityEvent ? (
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-800">{cityEvent.title}</h4>
                            {cityEvent.status === "confirmed" && (
                            <>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Calendar className="w-4 h-4" />
                                <span>
                                  {format(
                                    parse(cityEvent.date, "yyyy-MM-dd", new Date()),
                                    "MMM d, yyyy"
                                  )}
                                </span>
                                {cityEvent.time && <span>at {cityEvent.time}</span>}
                              </div>
                            
                              {cityEvent.venue && (
                                <p className="text-sm text-gray-600">
                                  <strong>Venue:</strong> {cityEvent.venue}
                                </p>
                              )}
                            </>
                            )}
                            {/* {cityEvent.description && (
                              <p className="text-sm text-gray-600 mt-2">
                                {cityEvent.description}
                              </p>
                            )} */}
                            {cityEvent.description && (
                              <p className="text-sm text-gray-600 mt-2">
                                Status: {cityEvent.status}
                              </p>
                            )}
                            {cityEvent.status === "confirmed" && (
                            <>
                            {cityEvent.registration_url && (
                              <a 
                                href={cityEvent.registration_url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block mt-2 px-3 py-1 bg-primary text-white !important text-sm border rounded hover:bg-white hover:text-primary hover:border-primary"
                              >
                                Register Now
                              </a>
                            )}
                            </>
                            )}
                          </div>
                        ) : (
                          <div className="text-sm text-gray-600">
                            <p className="mb-2">We're planning to visit {city.name}!</p>
                            <p className="text-xs text-gray-500">Event details coming soon. Follow us for updates!</p>
                          </div>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
          
          <div className="text-center mt-8">
            <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow animate-pulse"></div>
                <span>Events scheduled</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#a8a8a8ff] rounded-full border-2 border-white shadow"></div>
                <span>Planned stops</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              More cities being added—follow us to stay updated!
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .leaflet-container a {
        color: white;
        }
        .leaflet-control-zoom-in span, .leaflet-control-zoom-out span {
        color: grey;
        }
      `}</style>
    </section>
  );
}