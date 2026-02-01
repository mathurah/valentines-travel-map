import React from "react";
import {
  LOCATIONS,
  INTRO_EMOJI,
  INTRO_TITLE,
  INTRO_DESCRIPTION,
  INTRO_STATS_SUFFIX,
  INTRO_BUTTON_TEXT,
  INTRO_EMOJIS
} from "../config";

interface IntroOverlayProps {
  onStart: () => void;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onStart }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-pink-50/95 backdrop-blur-sm">
      <div className="max-w-md w-full p-8 text-center bg-white rounded-3xl shadow-2xl border-4 border-pink-200 transform transition-all">
        <div className="text-6xl mb-6">{INTRO_EMOJI}</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {INTRO_TITLE}
        </h1>
        <p className="text-gray-600 mb-8 italic">
          {INTRO_DESCRIPTION}
        </p>

        <div className="space-y-4">
          <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
            {LOCATIONS.length} {INTRO_STATS_SUFFIX}
          </p>
          <button
            onClick={onStart}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-pink-200 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            {INTRO_BUTTON_TEXT}
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-4 text-2xl">
          {INTRO_EMOJIS.map((emoji, idx) => (
            <span key={idx}>{emoji}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;
