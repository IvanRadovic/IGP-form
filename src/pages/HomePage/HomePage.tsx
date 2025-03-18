/*======= HOOKS ===========*/
import { useGameSearch } from "./hooks/useGameSearch.ts";
import { useGames } from "./hooks/useGames.ts";
import { useInfiniteScroll } from "./hooks/useInfitiveScroll.ts";

/*======= COMPONENTS ===========*/
import Banner from "./components/bunner/bunner.tsx";
import CategorySearch from "./components/categorySearch/CategorySearch.tsx";
import GamesList from "./components/gameList/GameList.tsx";
import { useEffect, useMemo } from "react";

const HomePage = () => {
  const { allGames, isLoadingGames, gamesError, categoryGames } = useGames();
  const {
    visibleGames,
    lastGameRef,
    isLoadingMore,
    setVisibleGames,
    setCurrentPage,
  } = useInfiniteScroll(allGames);
  const { handleSearch } = useGameSearch(
    allGames,
    setVisibleGames,
    setCurrentPage,
  );

  // Create unique arrays from json data, for navigation
  const categoriesInGames = useMemo(
    () => [...new Set(allGames?.map((game) => game.category))],
    [allGames],
  ); // 11 items

  // Subcategories
  const categoriesOverall = useMemo(
    () => [...new Set(categoryGames?.map((game) => game.slug))],
    [categoryGames],
  );

  // // Filtriranje categoryGames da ostanu samo one koje postoje u uniqueCategories
  // const filteredCategoryGames = useMemo(
  //   () =>
  //     categoryGames?.filter((category) => categoriesInGames.includes(category)),
  //   [categoryGames, categoriesInGames],
  // );

  const uniqueSubCategories = useMemo(() => {
    const subCategoryMap = new Map<string, Set<string>>(); // subCategory -> Set(category)

    allGames?.forEach((game) => {
      if (game.subCategory && game.category) {
        if (!subCategoryMap.has(game.subCategory)) {
          subCategoryMap.set(game.subCategory, new Set());
        }
        subCategoryMap.get(game.subCategory)?.add(game.category);
      }
    });

    return Array.from(subCategoryMap.entries()).map(([sub, categories]) => ({
      subCategory: sub,
      categories: Array.from(categories), // pretvaramo Set u niz
    }));
  }, [allGames]);

  // Unique type
  const uniqueTypes = useMemo(
    () => [...new Set(allGames?.map((game) => game.type).filter(Boolean))],
    [allGames],
  );

  // Unique tags (pošto je `tags` niz, spajamo sve u jedan Set)
  const uniqueTags = useMemo(
    () => [...new Set(allGames?.map((game) => game.tags).filter(Boolean))],
    [allGames],
  );

  // Unique extraCategories
  const uniqueExtraCategories = useMemo(() => {
    const extraCategoriesSet = new Set<string>();
    allGames?.forEach((game) => {
      if (game.extraCategories && game.extraCategories.trim() !== "") {
        extraCategoriesSet.add(game.extraCategories);
      }
    });
    return Array.from(extraCategoriesSet);
  }, [allGames]);

  // Novi niz: filtriramo igre sa `extraCategories` koje nisu prazan string
  const gamesWithExtraCategories = useMemo(
    () =>
      allGames?.filter(
        (game) => game.extraCategories && game.extraCategories.trim() !== "",
      ),
    [allGames],
  );

  useEffect(() => {
    console.log(" Categories in games:", categoriesInGames);
    console.log("Categories Overall:", categoriesOverall);
    console.log("Available Games:", filteredCategoryGames);
    // console.log("Unique SubCategories:", uniqueSubCategories);
    console.log("Filtered Category Games:", filteredCategoryGames);
    // console.log("uniqueTypes:", uniqueTypes);
    // console.log("uniqueTags:", uniqueTags);
    // console.log("uniqueExtraCategories:", uniqueExtraCategories);
    // console.log("Games with Extra Categories:", gamesWithExtraCategories);
  }, [
    categoryGames,
    categoriesInGames,
    uniqueSubCategories,
    uniqueTypes,
    uniqueTags,
    uniqueExtraCategories,
  ]);

  const getCategoryTitle = (slug: string, categories: any[]): string => {
    const category = categories.find((cat) => cat.slug === slug);

    if (category && category.multilingual?.length > 0) {
      return category.multilingual[0].title || slug;
    }

    return slug;
  };

  // Filtriramo categoryGames da sadrže samo validne kategorije i subkategorije
  const filteredCategoryGames = useMemo(
    () =>
      categoryGames?.filter((category) => {
        if (category.type === "category") {
          return categoriesInGames.includes(category.slug);
        }
        if (category.type === "subCategory") {
          return uniqueSubCategories.some(
            (sub) => sub.subCategory === category.slug,
          );
        }
        if (category.type === "type") {
          return uniqueTypes.includes(category.slug);
        }
        if (category.type === "tag") {
          return uniqueTags.includes(category.slug);
        }
        if (category.type === "extraCategory") {
          return uniqueExtraCategories.includes(category.slug);
        }
        return false;
      }),
    [
      categoryGames,
      categoriesInGames,
      uniqueSubCategories,
      uniqueTypes,
      uniqueTags,
      uniqueExtraCategories,
    ],
  ); // 10 items, one category from allGames doesn't exist into json data for categories

  if (gamesError) return <div>Error: {gamesError.message}</div>;
  if (isLoadingGames) return <div>Loading initial games...</div>;

  return (
    <div className="home-page">
      <Banner />
      <CategorySearch categoryGames={categoryGames} onSearch={handleSearch} />
      <GamesList
        games={visibleGames}
        lastGameRef={lastGameRef}
        isLoadingMore={isLoadingMore}
      />
    </div>
  );
};

export default HomePage;
