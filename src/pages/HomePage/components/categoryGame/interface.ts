interface Category {
  slug: string;
  title: string;
  publishing?: {
    status: string;
  };
  type: string;
  multilingual?: { language: string; title: string }[];
}

export interface CategoryGameProps {
  categoryGames?: Category[];
}

export interface Categories {
  slug: string;
  title: string;
  publishing?: {
    status: string;
  };
  type: string;
  multilingual?: { language: string; title: string }[];
}
