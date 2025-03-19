import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store.ts";

/*========= CATEGORY IMAGES ==========*/
import { CATEGORY_IMAGES_ARRAY } from "../constants.ts";
import defaultImage from "../assets/images/background/image-fallback.jpg";

export const selectGames = (state: RootState) => state.games.games;
export const selectSelectedCategory = (state: RootState) =>
  state.games.selectedCategory;
export const selectSelectedSubCategory = (state: RootState) =>
  state.games.selectedSubCategory;
export const selectCategoryGames = (state: RootState) =>
  state.games.categoryGames;

/**
 *  Selects all categories that have at least one game
 *  @returns {string[]} - List of categories
 *  @example
 *  const categories = useSelector(selectFilteredCategories);
 */
export const selectFilteredCategories = createSelector(
  [selectGames, selectCategoryGames],
  (games, categories) => {
    return categories
      .filter((category) =>
        games.some((game) => game.category === category.slug),
      )
      .map((category, index) => ({
        ...category,
        image: CATEGORY_IMAGES_ARRAY[index] || defaultImage,
      }));
  },
);

/**
 * Selects all games that match selected category and subcategory
 * @returns {Game[]} - List of games
 * @example
 * const filteredGames = useSelector(selectFilteredGames);
 */
export const selectFilteredGames = createSelector(
  [selectGames, selectSelectedCategory, selectSelectedSubCategory],
  (games, selectedCategory, selectedSubCategory) => {
    let filteredGames = games;

    if (selectedCategory) {
      filteredGames = filteredGames.filter(
        (game) => game.category === selectedCategory,
      );
    }

    if (selectedSubCategory) {
      filteredGames = filteredGames.filter(
        (game) => game.subCategory === selectedSubCategory,
      );
    }

    return filteredGames;
  },
);
