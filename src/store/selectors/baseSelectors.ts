import { RootState } from "../store.ts";

// Selectors
export const selectGames = (state: RootState) => state.games.games;
export const selectSelectedCategory = (state: RootState) =>
  state.games.selectedCategory;
export const selectSelectedExtraCategory = (state: RootState) =>
  state.games.selectedExtraCategory;
export const selectSelectedSubCategory = (state: RootState) =>
  state.games.selectedSubCategory;
export const selectCategoryGames = (state: RootState) =>
  state.games.categoryGames;
export const selectSelectedTags = (state: RootState) =>
  state.games.selectedTags;
export const selectExtraCategories = (state: RootState) =>
  state.games.extraCategories;
export const selectSelectedTypes = (state: RootState) =>
  state.games.selectedTypes;
