import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store.ts";

/*========= CATEGORY IMAGES ==========*/
import { CATEGORY_IMAGES_ARRAY } from "../constants.ts";
import defaultImage from "../assets/images/background/image-fallback.jpg";

/*========== SELECTORS ============*/
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
export const extraCategories = (state: RootState) =>
  state.games.extraCategories;
export const selectSelectedTypes = (state: RootState) =>
  state.games.selectedTypes;

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
 * Selects all categories that have no games
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

    extraCategories = extraCategories
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

    return extraCategories;
  },
);

/**
 * Selects all games that match selected category and subcategory
 * @returns {Game[]} - List of games
 * @example
 * const filteredGames = useSelector(selectFilteredGames);
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
  (
    games,
    selectedCategory,
    selectedExtraCategory,
    selectedSubCategory,
    selectedTags,
    selectedType,
  ) => {
    let filteredGames = games;

    if (selectedCategory) {
      filteredGames = filteredGames.filter(
        (game) => game.category === selectedCategory,
      );
    }

    if (selectedSubCategory.length > 0) {
      filteredGames = filteredGames.filter((game) =>
        selectedSubCategory.includes(game.subCategory),
      );
    }

    if (selectedTags.length > 0) {
      filteredGames = filteredGames.filter((game) =>
        selectedTags.includes(game.tags),
      );
    }

    if (selectedType.length > 0) {
      filteredGames = filteredGames.filter((game) =>
        selectedType.includes(game.type),
      );
    }

    if (selectedExtraCategory) {
      filteredGames = filteredGames.filter(
        (game) => game.extraCategories === selectedExtraCategory,
      );
    }

    return filteredGames;
  },
);
