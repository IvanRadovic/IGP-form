// utils/category-filter.ts
import {
  CategoryGames,
  Game,
  ProcessedCategory,
} from "../api/services/games/interface.ts";

/**
 * @name filterVisibleCategories
 * @description - Filters visible categories based on the games and category definitions
 * @param allGames - List of all games
 * @param categoryDefinitions - List of category definitions
 * @returns - List of processed categories
 */
export const filterVisibleCategories = (
  allGames: Game[],
  categoryDefinitions: CategoryGames[],
): ProcessedCategory[] => {
  const gameProperties = {
    category: new Set<string>(),
    subCategory: new Set<string>(),
    tags: new Set<string>(),
    type: new Set<string>(),
    extraCategories: new Set<string>(),
  };

  allGames?.forEach((game) => {
    if (game.category) gameProperties.category.add(game.category);
    if (game.subCategory)
      game.subCategory
        .split(",")
        .forEach((s) => s.trim() && gameProperties.subCategory.add(s.trim()));
    if (game.tags)
      game.tags
        .split(",")
        .forEach((t) => t.trim() && gameProperties.tags.add(t.trim()));
    if (game.type) gameProperties.type.add(game.type);
    if (game.extraCategories)
      game.extraCategories
        .split(",")
        .forEach(
          (ec) => ec.trim() && gameProperties.extraCategories.add(ec.trim()),
        );
  });

  const processedDefinitions =
    categoryDefinitions
      ?.filter((category) => {
        const type = category.type as keyof typeof gameProperties;

        // Provera za extraCategories zahteva posebnu obradu
        if (category.type === "extraCategories") {
          const extraSlugs = Array.from(gameProperties.extraCategories);
          return extraSlugs.includes(category.slug);
        }

        return gameProperties[type]?.has(category.slug);
      })
      .map((category) => ({
        id: category.id,
        title:
          category.type === "extraCategories"
            ? category.multilingual?.find((m) => m.language === "en")?.title ||
              category.slug
            : category.title || "",
        type: category.type,
        slug: category.slug,
      })) || [];

  const dynamicCategories: ProcessedCategory[] = [];

  gameProperties?.subCategory?.forEach((subCat) => {
    if (
      !categoryDefinitions.some(
        (c) => c.type === "subCategory" && c.slug === subCat,
      )
    ) {
      dynamicCategories.push({
        title: subCat,
        type: "subCategory",
        slug: subCat.toLowerCase().replace(/\s+/g, "-"),
      });
    }
  });

  gameProperties?.tags.forEach((tag) => {
    if (!categoryDefinitions.some((c) => c.type === "tags" && c.slug === tag)) {
      dynamicCategories.push({
        title: tag,
        type: "tags",
        slug: tag.toLowerCase().replace(/\s+/g, "-"),
      });
    }
  });

  // 4. Kombinuj rezultate
  return [...processedDefinitions, ...dynamicCategories]?.filter((category) =>
    ["category", "subCategory", "tags", "type", "extraCategories"].includes(
      category.type,
    ),
  );
};
