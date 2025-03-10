// src/api/services/games/interface.ts
export interface Game {
  id: number;
  demoMode: boolean;
  type: string;
  category: string;
  subCategory: string;
  extraCategories: string;
  rtp: number;
  desktopEnabled: boolean;
  desktopID: number;
  desktopDescription: string;
  provider: string;
  vendor: string;
  portal: string;
  created_at: string;
  desktopSlug: string;
  name: string;
  resolution: string;
  tags: string;
  multilingual: any[];
  geoFilter: {
    id: number;
  };
  desktopThumbnail: {
    url: string;
  };
}
export interface GameRes {
  id: number;
  demoMode: boolean;
  type: string;
  category: string;
  subCategory: string;
  // Add other properties as needed
}

export interface Multilingual {
  id: number;
  language: string;
  title: string;
  description: string;
}

export interface Publishing {
  id: number;
  publishDate: string;
  status: string;
}

export interface CategoryGames {
  id: number;
  slug: string;
  portal: string;
  multilingual: Multilingual[];
  publishing: Publishing;
  type: string;
}
