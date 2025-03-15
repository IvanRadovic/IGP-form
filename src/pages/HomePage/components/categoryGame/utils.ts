import { categoryImages } from "./constants.ts";

interface Category {
  slug: string;
  title: string;
  publishing?: {
    status: string;
  };
  type: string;
  multilingual?: { language: string; title: string }[];
}

const validCategoryTypes = new Set([
  "category",
  "subCategory",
  "tags",
  "type",
  "extraCategories",
]);

export const getAvailableCategories = (categoryGames: Category[] = []) =>
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
      icon: categoryImages[slug] || categoryImages.jackpot,
    }));
