import { useState, useEffect, useCallback, useRef, useMemo } from "react";

import { Game } from "../../../api/services/games/interface.ts";

const PAGE_SIZE = 24;

/**
 * @name useInfiniteScroll
 * @description Custom hook to handle infinite scroll for games list on home page
 * @param allGames - List of all games
 * @returns visibleGames - List of games visible on the screen
 * @returns lastGameRef - Ref for last game element
 * @returns isLoadingMore - Loading state for more games
 * @returns loadMoreGames - function to load more games
 * @returns setVisibleGames - function to set visible games
 * @returns setCurrentPage - function to set current page
 *
 */
export const useInfiniteScroll = (allGames: Game[] | undefined) => {
  const [visibleGames, setVisibleGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const hasMore = useMemo(
    () => visibleGames.length < (allGames?.length || 0),
    [visibleGames, allGames],
  );

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
    return () => observer.current?.disconnect();
  }, []);

  return {
    visibleGames,
    lastGameRef,
    isLoadingMore,
    loadMoreGames,
    setVisibleGames: useCallback(setVisibleGames, []),
    setCurrentPage: useCallback(setCurrentPage, []),
  };
};
