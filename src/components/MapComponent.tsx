import React, { useEffect, useRef } from 'react';
import * as L from 'leaflet';
import { LocationData } from '../types';

const HEART_SVG = `
  <svg viewBox="0 0 32 32" class="heart-marker" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 28.2l-1.9-1.7C7.4 20.3 3 16.3 3 11.5 3 7.6 6.1 4.5 10 4.5c2.2 0 4.3 1 5.7 2.7 1.4-1.7 3.5-2.7 5.7-2.7 3.9 0 7 3.1 7 7 0 4.8-4.4 8.8-11.1 15l-1.6 1.7z" fill="#f472b6" stroke="#ffffff" stroke-width="2"/>
    <circle cx="16" cy="11" r="3" fill="rgba(255,255,255,0.4)" />
  </svg>
`;

interface MapComponentProps {
  locations: LocationData[];
  selectedLocation: LocationData | null;
  onLocationClick: (loc: LocationData) => void;
  onMapClick: () => void;
  onZoomChange: (zoom: number) => void;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  locations, 
  selectedLocation, 
  onLocationClick, 
  onMapClick,
  onZoomChange 
}) => {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Initialize map
    const map = L.map(containerRef.current, {
      center: [20, 0],
      zoom: 3,
      minZoom: 2,
      maxZoom: 18,
      zoomControl: false,
      worldCopyJump: true
    });

    // Clean Google-like tiles (CartoDB Voyager)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO'
    }).addTo(map);

    // Zoom controls at bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    map.on('zoomend', () => {
      onZoomChange(map.getZoom());
    });

    map.on('click', () => {
      onMapClick();
    });

    mapRef.current = map;

    // Add "Memory Halos" (localized region highlights) and Markers
    locations.forEach((loc) => {
      // 1. Add a soft glow circle around the city to show the "visited region"
      // Radius of 80km provides a nice regional highlight without covering whole countries
      L.circle(loc.coords, {
        radius: 80000, 
        fillColor: '#fb7185', // rose-400
        fillOpacity: 0.15,
        stroke: false,
        interactive: false
      }).addTo(map);

      // 2. Add the heart marker
      const icon = L.divIcon({
        html: HEART_SVG,
        className: 'custom-heart-marker',
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });

      const marker = L.marker(loc.coords, { icon })
        .addTo(map)
        .bindTooltip(loc.name, { 
          direction: 'top', 
          offset: [0, -20],
          className: 'custom-tooltip bg-white text-pink-600 font-bold border-none shadow-md rounded-lg px-2 py-1'
        })
        .on('click', (e) => {
          L.DomEvent.stopPropagation(e);
          onLocationClick(loc);
        });
      
      markersRef.current[loc.id] = marker;
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []); // Only run once on mount

  // Sync selection with a smooth flyTo animation
  useEffect(() => {
    if (selectedLocation && mapRef.current) {
      mapRef.current.flyTo(selectedLocation.coords, 8, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }
  }, [selectedLocation]);

  return <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" style={{ background: '#f0f4f8' }} />;
};

export default MapComponent;

