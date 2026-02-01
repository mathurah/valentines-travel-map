import React, { useState, useCallback } from 'react';
import MapComponent from './components/MapComponent';
import SidePanel from './components/SidePanel';
import IntroOverlay from './components/IntroOverlay';
import Sidebar from './components/Sidebar';
import {
  LOCATIONS,
  HEADER_EMOJI,
  HEADER_TITLE,
  HEADER_SUBTITLE,
  MOBILE_INSTRUCTIONS
} from './config';
import { LocationData } from './types';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [currentZoom, setCurrentZoom] = useState(3);

  const handleLocationClick = useCallback((loc: LocationData) => {
    setSelectedLocation(loc);
  }, []);

  const handleMapClick = useCallback(() => {
    setSelectedLocation(null);
  }, []);

  const handleStart = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col bg-gray-50 overflow-hidden">
      {showIntro && <IntroOverlay onStart={handleStart} />}

      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-[600] bg-white/90 backdrop-blur-sm border-b border-gray-200 h-16 flex items-center justify-between px-6 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-bounce">{HEADER_EMOJI}</span>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              {HEADER_TITLE}
            </h1>
            <div className="flex items-center gap-2">
               <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest hidden sm:block">
                {HEADER_SUBTITLE}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Zoom Level</span>
             <span className="text-pink-600 font-mono font-bold">{currentZoom.toFixed(1)}x</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex pt-16 overflow-hidden">
        {/* Sidebar Nav */}
        <Sidebar 
          locations={LOCATIONS} 
          onSelect={handleLocationClick} 
          selectedId={selectedLocation?.id}
        />

        {/* Map View */}
        <main className="flex-1 relative bg-[#f0f4f8]">
          <MapComponent 
            locations={LOCATIONS}
            selectedLocation={selectedLocation}
            onLocationClick={handleLocationClick}
            onMapClick={handleMapClick}
            onZoomChange={setCurrentZoom}
          />
        </main>
      </div>

      {/* Details Side Panel */}
      <SidePanel 
        location={selectedLocation} 
        onClose={() => setSelectedLocation(null)} 
      />

      {/* Mobile Instructions */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[700] bg-white/90 px-4 py-2 rounded-full shadow-lg border border-pink-100 backdrop-blur-sm pointer-events-none">
        <p className="text-[10px] text-pink-600 font-bold text-center whitespace-nowrap">
          {MOBILE_INSTRUCTIONS}
        </p>
      </div>
    </div>
  );
};

export default App;

