import { CategoryGames, Game } from "../../../api/services/games/interface.ts";

export interface GamesState {
  games: Game[];
  categoryGames: CategoryGames[];
  selectedCategory: string | null;
  subCategoryList: [] | string[];
  selectedSubCategory: string[] | [];
  tagsList: [] | string[];
  typesList: [] | string[];
  selectedTypes: string[] | [];
  selectedTags: string[] | [];
  selectedExtraCategory: string | null;
  extraCategories: [] | null;
  isLoading: boolean;
  error: string | null;
}
