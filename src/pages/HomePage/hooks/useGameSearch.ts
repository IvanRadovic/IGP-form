import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { Game } from "../../../api/services/games/interface.ts";

/**
 * Custom hook to handle search functionality for games list on home page
 * @param allGames - List of all games
 * @param setVisibleGames - Function to set visible games
 * @param setCurrentPage - Function to set current page
 */

export const useGameSearch = (
  allGames: Game[] | undefined,
  setVisibleGames: (games: Game[]) => void,
  setCurrentPage: (page: number) => void,
) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 300);
  const [searchResultsCount, setSearchResultsCount] = useState(0);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (!allGames) return;

    let filteredGames: Game[];

    if (!debouncedQuery) {
      filteredGames = allGames.slice(0, 24);
    } else {
      const lowerCaseQuery = debouncedQuery.toLowerCase();
      filteredGames = allGames.filter(
        ({ name, provider }) =>
          name.toLowerCase().includes(lowerCaseQuery) ||
          provider.toLowerCase().includes(lowerCaseQuery),
      );
    }

    setVisibleGames(filteredGames);
    setSearchResultsCount(filteredGames.length);
    setCurrentPage(1);
  }, [debouncedQuery, allGames, setVisibleGames, setCurrentPage]);

  const isSearching = searchQuery !== debouncedQuery;

  return {
    searchQuery,
    handleSearch,
    isSearching,
    searchResultsCount,
  };
};
