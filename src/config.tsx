import { LocationData } from "./types";

// ============================================
// CUSTOMIZE: Edit all your text content here!
// ============================================

// Header text (shown at top of page)
export const HEADER_EMOJI = "🌍";
export const HEADER_TITLE = "Our Adventures Around the World";
export const HEADER_SUBTITLE = "Click markers to see our memories • Drag to pan";

// Intro overlay (welcome screen)
export const INTRO_EMOJI = "🌍";
export const INTRO_TITLE = "Our Travel Map";
export const INTRO_DESCRIPTION = "Explore all the special places we've visited together. Click on the heart markers to see our memories from each location!";
export const INTRO_STATS_SUFFIX = "places"; // Will show as "X places"
export const INTRO_BUTTON_TEXT = "View Map";
export const INTRO_EMOJIS = ["🏠", "✈️", "🏖️", "🍕", "🥂"];

// Sidebar (location list)
export const SIDEBAR_TITLE = "The Itinerary";
export const SIDEBAR_PIN_EMOJI = "📍";

// Side panel (location details)
export const PANEL_GALLERY_TITLE = "Photos";
export const PANEL_NO_PHOTOS_EMOJI = "📸";
export const PANEL_NO_PHOTOS_TEXT = "No photos added yet";

// Mobile instructions
export const MOBILE_INSTRUCTIONS = "Tap markers to view";

// ============================================
// CUSTOMIZE: Add your own locations below!
// ============================================
// Each location needs: id, name, coords [lat, lng], date, story, images array, and type
export const LOCATIONS: LocationData[] = [
  {
    id: "paris",
    name: "Paris, France",
    coords: [48.8566, 2.3522],
    date: "Spring 2024",
    story: "Add your story about this special place here...",
    images: [], // Add image paths like: ["/images/paris.jpg"]
  },
  {
    id: "tokyo",
    name: "Tokyo, Japan",
    coords: [35.6762, 139.6503],
    date: "Summer 2024",
    story: "Add your story about this special place here...",
    images: [],
  },
  {
    id: "new-york",
    name: "New York, USA",
    coords: [40.7128, -74.006],
    date: "Fall 2024",
    story: "Add your story about this special place here...",
    images: [],
  },
];

// ============================================
// COMING SOON: Color customization
// ============================================
// Future versions will support:
// - ACCENT_COLOR: Change the pink theme to any color
// - BACKGROUND_COLOR: Customize the app background
