import { CATEGORY_IMAGES } from "./constants.ts";
import { Categories } from "./interface.ts";

const validCategoryTypes = new Set([
  "category",
  "subCategory",
  "tags",
  "type",
  "extraCategories",
]);

/**
 * Get available categories for the user to see
 * @param categoryGames - List of categories
 * @returns List of available categories for the user to see
 */
export const getAvailableCategories = (categoryGames: Categories[] = []) =>
  categoryGames
    ?.filter(
      ({ publishing, type }) =>
        publishing?.status === "published" && validCategoryTypes.has(type),
    )
    ?.map(({ slug, title, type, multilingual }) => ({
      slug,
      title:
        type === "extraCategories"
          ? multilingual?.find(({ language }) => language === "en")?.title ||
            slug
          : title,
      icon: CATEGORY_IMAGES[slug] || CATEGORY_IMAGES.jackpot,
    }));
