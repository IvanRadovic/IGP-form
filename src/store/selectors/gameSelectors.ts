import { createSelector } from "@reduxjs/toolkit";

/*========== SELECTORS ==============*/
import {
  selectGames,
  selectSelectedCategory,
  selectSelectedExtraCategory,
  selectSelectedSubCategory,
  selectSelectedTags,
  selectSelectedTypes,
} from "./baseSelectors";

/**
 * @name selectFilteredGames
 * @description - Selects all games that match the selected filters (category, extra category, subcategory, tags, types)
 * @returns {Game[]} - List of games
 * @example
 * const games = useSelector(selectFilteredGames);
 */
export const selectFilteredGames = createSelector(
  [
    selectGames,
    selectSelectedCategory,
    selectSelectedExtraCategory,
    selectSelectedSubCategory,
    selectSelectedTags,
    selectSelectedTypes,
  ],
  (games, category, extraCategory, subCategory, tags, types) =>
    games.filter((game) => {
      const matchesCategory = !category || game.category === category;
      const matchesExtraCategory =
        !extraCategory || game.extraCategories === extraCategory;
      const matchesSubCategory =
        subCategory.length === 0 || subCategory.includes(game.subCategory);
      const matchesTags = tags.length === 0 || tags.includes(game.tags);
      const matchesTypes = types.length === 0 || types.includes(game.type);

      return (
        matchesCategory &&
        matchesExtraCategory &&
        matchesSubCategory &&
        matchesTags &&
        matchesTypes
      );
    }),
);
