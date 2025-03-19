/*======= HOOKS ===========*/
import { useGameSearch } from "./hooks/useGameSearch.ts";
import { useGames } from "./hooks/useGames.ts";
import { useInfiniteScroll } from "./hooks/useInfitiveScroll.ts";

/*======= COMPONENTS ===========*/
import Banner from "./components/bunner/bunner.tsx";
import CategorySearch from "./components/categorySearch/CategorySearch.tsx";
import GamesList from "./components/gameList/GameList.tsx";
import { useEffect, useMemo } from "react";
import { filterVisibleCategories } from "../../utils/categoryFilter.ts";
import ActiveLoader from "../../components/ui/loader/ActiveLoader.tsx";

const HomePage = () => {
  const { games, isLoading, error, categoryGames } = useGames();
  const {
    visibleGames,
    lastGameRef,
    isLoadingMore,
    setVisibleGames,
    setCurrentPage,
  } = useInfiniteScroll(games);
  const { searchQuery, handleSearch, isSearching, searchResultsCount } =
    useGameSearch(games, setVisibleGames, setCurrentPage);

  const availableValues = filterVisibleCategories(games, categoryGames);

  // Create unique arrays from json data, for navigation
  const categoriesInGames = useMemo(
    () => [...new Set(games?.map((game) => game.category))],
    [games],
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

    games?.forEach((game) => {
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
  }, [games]);

  // Unique type
  const uniqueTypes = useMemo(
    () => [...new Set(games?.map((game) => game.type).filter(Boolean))],
    [games],
  );

  // Unique tags (pošto je `tags` niz, spajamo sve u jedan Set)
  const uniqueTags = useMemo(
    () => [...new Set(games?.map((game) => game.tags).filter(Boolean))],
    [games],
  );

  // Unique extraCategories
  const uniqueExtraCategories = useMemo(() => {
    const extraCategoriesSet = new Set<string>();
    games?.forEach((game) => {
      if (game.extraCategories && game.extraCategories.trim() !== "") {
        extraCategoriesSet.add(game.extraCategories);
      }
    });
    return Array.from(extraCategoriesSet);
  }, [games]);

  // Novi niz: filtriramo igre sa `extraCategories` koje nisu prazan string
  const gamesWithExtraCategories = useMemo(
    () =>
      games?.filter(
        (game) => game.extraCategories && game.extraCategories.trim() !== "",
      ),
    [games],
  );

  useEffect(() => {
    console.log("AVAILABLE VALUES:", availableValues);
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
  ); // 10 items, one category from games doesn't exist into json data for categories

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <ActiveLoader title="Loading games..." />;

  return (
    <div className="home-page">
      <Banner />
      <CategorySearch onSearch={handleSearch} />

      {/* Search status indicators */}
      {isSearching && <ActiveLoader title="Searching games..." />}
      {!!searchQuery && !isSearching && (
        <div className="d-flex justify-content-center align-items-center">
          <h5 className="text-light">
            ( {searchResultsCount} matching games )
          </h5>
        </div>
      )}

      {isLoading ? (
        <ActiveLoader title="Loading games..." />
      ) : (
        <GamesList
          games={visibleGames}
          lastGameRef={lastGameRef}
          isLoadingMore={isLoadingMore}
        />
      )}
    </div>
  );
};

export default HomePage;
