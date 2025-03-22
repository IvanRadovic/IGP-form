import { createSelector } from "@reduxjs/toolkit";
/*========= SELECTORS =============*/
import { selectCategoryGames, selectGames } from "./baseSelectors.ts";

/*========= IMAGES ==========*/
import { CATEGORY_IMAGES_ARRAY } from "../../constants.ts";
import defaultImage from "../../assets/images/background/image-fallback.jpg";

/**
 * @name selectFilteredCategories
 * @description - Selects all categories that have at least one game
 * @returns {string[]} - List of categories
 * @example
 * const categories = useSelector(selectFilteredCategories);
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
 * @name selectFilteredExtraCategories
 * @description - Selects all categories that have no games
 * @returns {string[]} - List of categories
 * @example
 * const extraCategories = useSelector(extraCategories);
 */
export const selectFilteredExtraCategories = createSelector(
  [selectGames, selectCategoryGames],
  (games, categories) => {
    let extraCategories = categories.filter(
      (category) => category.type === "extraCategories",
    );

    return extraCategories
      .filter((category) =>
        games.some((game) =>
          Array.isArray(game.extraCategories)
            ? game.extraCategories.includes(category.slug)
            : game.extraCategories === category.slug,
        ),
      )
      .map((category, index) => ({
        ...category,
        image: CATEGORY_IMAGES_ARRAY[index] || defaultImage,
      }));
  },
);
