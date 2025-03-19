import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

/*************** interface ***************/
import { Game } from "../../../api/services/games/interface.ts";

/*************** redux functions ***************/
import { selectFilteredGames } from "../../../store/selector.ts";

/**
 * Custom hook to handle search functionality for games list on home page
 * @param allGames - List of all games
 * @param setVisibleGames - Function to set visible games
 * @param setCurrentPage - Function to set current page
 */
export const useGameSearch = () => {
  const allGames = useSelector(selectFilteredGames);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 300);
  const [filteredGames, setFilteredGames] = useState<Game[]>(allGames);
  const [searchResultsCount, setSearchResultsCount] = useState(0);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  useEffect(() => {
    if (!allGames) return;

    let resultGames = allGames;

    if (debouncedQuery) {
      const lowerCaseQuery = debouncedQuery.toLowerCase();
      resultGames = allGames.filter(
        ({ name, provider }) =>
          name.toLowerCase().includes(lowerCaseQuery) ||
          provider.toLowerCase().includes(lowerCaseQuery),
      );
    }

    setFilteredGames(resultGames);
    setSearchResultsCount(resultGames.length);
  }, [debouncedQuery, allGames]);

  const isSearching = useMemo(
    () => searchQuery !== debouncedQuery,
    [searchQuery, debouncedQuery],
  );

  return {
    searchQuery,
    filteredGames,
    handleSearch,
    isSearching,
    searchResultsCount,
  };
};
