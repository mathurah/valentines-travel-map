import React from "react";
import { LocationData } from "../types";
import { SIDEBAR_TITLE, SIDEBAR_PIN_EMOJI } from "../config";

interface SidebarProps {
  locations: LocationData[];
  onSelect: (location: LocationData) => void;
  selectedId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  locations,
  onSelect,
  selectedId,
}) => {
  return (
    <div className="hidden md:flex flex-col w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 z-[500] h-full">
      <div className="p-6 pb-4">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
          {SIDEBAR_TITLE}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto px-6">
        <div className="space-y-1">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => onSelect(loc)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-3 ${
                selectedId === loc.id
                  ? "bg-pink-100 text-pink-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <span className="text-lg">{SIDEBAR_PIN_EMOJI}</span>
              <div className="truncate">
                <div className="font-medium truncate">{loc.name}</div>
                <div className="text-[10px] opacity-70">{loc.date}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

