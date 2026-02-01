import React from 'react';
import { LocationData } from '../types';
import {
  PANEL_GALLERY_TITLE,
  PANEL_NO_PHOTOS_EMOJI,
  PANEL_NO_PHOTOS_TEXT
} from '../config';

interface SidePanelProps {
  location: LocationData | null;
  onClose: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ location, onClose }) => {
  if (!location) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-[1000] w-full sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-gray-100 flex flex-col">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-pink-50">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{location.name}</h2>
          <span className="text-xs font-semibold text-pink-600 uppercase tracking-tighter">{location.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="p-2 hover:bg-white rounded-full transition-colors text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-8">
          <div className="prose prose-pink">
            <p className="text-gray-700 leading-relaxed italic">
              {location.story}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{PANEL_GALLERY_TITLE}</h3>
          </div>

          {location.images.filter(img => img && img.trim()).length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {location.images.filter(img => img && img.trim()).map((img, idx) => (
                <div key={idx} className="relative group rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={img}
                    alt={`${location.name} memory ${idx + 1}`}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
              <span className="text-3xl block mb-2">{PANEL_NO_PHOTOS_EMOJI}</span>
              <p className="text-xs text-gray-400">{PANEL_NO_PHOTOS_TEXT}</p>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default SidePanel;

