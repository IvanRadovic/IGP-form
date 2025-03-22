import { createSelector } from "@reduxjs/toolkit";

/*========= SELECTORS ============*/
import { selectFilteredGames } from "./gameSelectors.ts";

/**
 * Selects all available filters
 * @returns {Object} - Object containing all available filters
 * @example
 * const availableFilters = useSelector(selectAvailableFilters);
 */
export const selectAvailableFilters = createSelector(
  [selectFilteredGames],
  (filteredGames) => ({
    subCategories: [...new Set(filteredGames.map((game) => game.subCategory))],
    tagsList: [...new Set(filteredGames.flatMap((game) => game.tags))], // Promijenjeno u tagsList
    typesList: [...new Set(filteredGames.map((game) => game.type))], // Promijenjeno u typesList
  }),
);
