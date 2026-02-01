
export interface LocationData {
  id: string;
  name: string;
  coords: [number, number];
  date: string;
  story: string;
  images: string[];
}

export interface AppState {
  showIntro: boolean;
  selectedLocation: LocationData | null;
  currentZoom: number;
}

