import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store.ts";

/*========= CATEGORY IMAGES ==========*/
import { CATEGORY_IMAGES_ARRAY } from "../constants.ts";
import defaultImage from "../assets/images/background/image-fallback.jpg";

export const selectGames = (state: RootState) => state.games.games;
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
