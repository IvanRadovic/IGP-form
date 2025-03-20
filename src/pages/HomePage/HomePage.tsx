/*======= HOOKS ===========*/
import { useGameSearch } from "./hooks/useGameSearch.ts";
import { useGames } from "./hooks/useGames.ts";
import { useInfiniteScroll } from "./hooks/useInfitiveScroll.ts";

/*======= COMPONENTS ===========*/
import Banner from "./components/bunner/bunner.tsx";
import CategorySearch from "./components/categorySearch/CategorySearch.tsx";
import GamesList from "./components/gameList/GameList.tsx";
import ActiveLoader from "../../components/ui/loader/ActiveLoader.tsx";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { isLoading, error } = useGames();
  const subcategoriesList = useSelector((state) => state.games.subCategoryList);

  console.log("subcategoriesList", subcategoriesList);
  const {
    searchQuery,
    handleSearch,
    isSearching,
    searchResultsCount,
    filteredGames: allGames,
  } = useGameSearch();
  const {
    visibleGames,
    lastGameRef,
    isLoadingMore,
    setVisibleGames,
    setCurrentPage,
  } = useInfiniteScroll(allGames);

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <ActiveLoader title="Loading games..." />;

  return (
    <div className="home-page">
      <Banner />
      <CategorySearch onSearch={handleSearch} />

      {isSearching && visibleGames && (
        <ActiveLoader title="Searching games..." />
      )}
      {!!searchQuery && !isSearching && (
        <div className="d-flex justify-content-center align-items-center">
          <h5 className="text-light">
            ( {searchResultsCount} matching games )
          </h5>
        </div>
      )}

      <GamesList
        games={visibleGames}
        lastGameRef={lastGameRef}
        isLoadingMore={isLoadingMore}
      />
    </div>
  );
};
export default HomePage;
