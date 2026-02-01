# Valentine's Travel Map

An interactive map where you can document all your travel memories with your s/o. I built this for Valentine's Day - feel free to fork it and make it your own!

![Preview](preview.png)

## Getting Started

### Prerequisites

Make sure you have Node.js installed (v16 or higher).

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/mathurah/valentines-travel-map.git
cd valentines-travel-map
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser to preview it locally.

## Customization

Everything you need to customize is in `src/config.tsx`. You input your locations and add the file paths to the images here!

### Adding Locations

Each location needs an id, name, coordinates, date, story, and images. Here's the format:

```typescript
{
  id: "paris",                        // unique id (lowercase, no spaces)
  name: "Paris, France",              // display name
  coords: [48.8566, 2.3522],          // [latitude, longitude]
  date: "Summer 2023",                // when you visited
  story: "Where we had our first croissant together!",
  images: ["/images/paris.jpg"],      // your photos
}
```

**Getting coordinates:**
- Right-click on Google Maps and click the coordinates to copy them
- Or just ask ChatGPT/Claude: "Give me the GPS coordinates for [location] in the format [latitude, longitude]"

### Adding Photos

1. Put your photos in the `public/images/` folder
2. Reference them in your location like: `images: ["/images/paris.jpg"]`
3. You can add multiple photos: `images: ["/images/paris1.jpg", "/images/paris2.jpg"]`

### Customizing Text

All the text content is at the top of `src/config.tsx`. You can change:

- `HEADER_EMOJI` - The bouncing emoji in the header
- `HEADER_TITLE` - The pink gradient title at the top
- `HEADER_SUBTITLE` - Subtitle under the title
- `INTRO_EMOJI` - Large emoji on the welcome screen
- `INTRO_TITLE` - Welcome screen title
- `INTRO_DESCRIPTION` - Welcome screen description
- `INTRO_BUTTON_TEXT` - Start button text
- `INTRO_EMOJIS` - Array of decorative emojis on the intro screen
- `SIDEBAR_TITLE` - Left sidebar heading
- `SIDEBAR_PIN_EMOJI` - Emoji next to each location in the sidebar
- `PANEL_GALLERY_TITLE` - Title for the photo gallery section
- `MOBILE_INSTRUCTIONS` - Instruction text shown on mobile


## Deploying

I'd recommend Vercel - just connect your GitHub repo and it'll deploy automatically. 

You can also use Netlify (drag and drop the `dist` folder after running `npm run build`) or GitHub Pages if you prefer.

## Troubleshooting

**Images not showing up?**
- Make sure they're in `public/images/`
- The path should start with `/images/` not `./images/`
- Check that the filename casing matches exactly

**Map not loading?**
- Check browser console for errors
- Make sure coordinates are `[latitude, longitude]` format (lat first, not lng)

## Tech Stack

React, TypeScript, Leaflet, Tailwind, Vite
