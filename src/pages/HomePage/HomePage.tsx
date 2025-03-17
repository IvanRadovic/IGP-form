/*======= HOOKS ===========*/
import { useGameSearch } from "./hooks/useGameSearch.ts";
import { useGames } from "./hooks/useGames.ts";
import { useInfiniteScroll } from "./hooks/useInfitiveScroll.ts";

/*======= COMPONENTS ===========*/
import Banner from "./components/bunner/bunner.tsx";
import CategorySearch from "./components/categorySearch/CategorySearch.tsx";
import GamesList from "./components/gameList/GameList.tsx";

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
