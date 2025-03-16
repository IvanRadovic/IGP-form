import React, { useState, useEffect, useCallback, useRef } from "react";

import bunner1 from "../../assets/images/banner/banner1.png";

/*======= HOOKS ===========*/
import { useFetchData } from "../../hooks/useFetchData.ts";

/*======= API SERVICES ===========*/
import {
  getCategoryGames,
  getGames,
} from "../../api/services/games/gamesApiService.ts";

/*======= INTERFACES ===========*/
import { CategoryGames, Game } from "../../api/services/games/interface.ts";
import { GameCard } from "./components/game/GameCard.tsx";

/*======= COMPONENTS ===========*/
import CategoryGame from "./components/categoryGame/CategoryGame.tsx";
import SearchField from "../../components/UI/serach/Search.tsx";

const PAGE_SIZE = 24;

const HomePage = () => {
  const {
    data: allGames,
    loading: initialLoading,
    error: gamesError,
  } = useFetchData<Game[]>(getGames);

  const {
    data: categoryGames,
    loading: loadingCategoryGames,
    error: errorCategoryGames,
  } = useFetchData<CategoryGames[]>(getCategoryGames);

  const [visibleGames, setVisibleGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const observer = useRef<IntersectionObserver>();
  const hasMore = visibleGames.length < (allGames?.length || 0);

  const loadMoreGames = useCallback(() => {
    if (!allGames || isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const nextIndex = nextPage * PAGE_SIZE;

      setVisibleGames((prev) => [
        ...prev,
        ...allGames.slice(nextIndex, nextIndex + PAGE_SIZE),
      ]);
      setCurrentPage(nextPage);
      setIsLoadingMore(false);
    }, 300);
  }, [allGames, currentPage, isLoadingMore, hasMore]);

  const lastGameRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoadingMore) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreGames();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoadingMore, hasMore, loadMoreGames],
  );

  useEffect(() => {
    if (allGames?.length) {
      setVisibleGames(allGames.slice(0, PAGE_SIZE));
      setCurrentPage(1);
    }
  }, [allGames]);
  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  if (gamesError) return <div>Error: {gamesError.message}</div>;
  if (initialLoading) return <div>Loading initial games...</div>;

  const handleSearch = (query: string) => {
    if (!query) {
      setVisibleGames(allGames?.slice(0, PAGE_SIZE) || []);
      setCurrentPage(1);
      return;
    }

    const filteredGames = categoryGames.filter((game) =>
      game.title.toLowerCase().includes(query.toLowerCase()),
    );
    setVisibleGames(filteredGames);
  };

  if (gamesError) return <div>Error: {gamesError.message}</div>;
  if (initialLoading) return <div>Loading initial games...</div>;

  return (
    <div className="home-page">
      <div className="categories-search-container">
        <img
          src={bunner1}
          className="w-100"
          style={{
            height: "350px",
            borderRadius: "10px",
            objectFit: "cover",
            objectPosition: "bottom",
          }}
          alt="banner"
        />

        <CategoryGame categoryGames={categoryGames} />
        <div className={"d-flex justify-content-center align-items-center"}>
          <SearchField onSearch={handleSearch} />
        </div>
      </div>
      <div className="games-grid">
        {visibleGames.map((game, index) => (
          <div
            key={game.id}
            ref={index === visibleGames.length - 1 ? lastGameRef : null}
          >
            <GameCard
              title={game.name}
              imageUrl={game.desktopThumbnail?.url}
              provider={game.provider}
            />
          </div>
        ))}
      </div>

      {isLoadingMore && (
        <div className="loading-indicator">Loading more games...</div>
      )}
    </div>
  );
};

export default HomePage;
