import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "use-debounce";

/*************** interface ***************/
import { Game } from "../../../api/services/games/interface.ts";

/*************** redux functions ***************/
import { selectFilteredGames } from "../../../store/selectors";

/**
 * @hook useGameSearch
 * @desciprtion useGameSearch hook to handle search functionality for games list on home page
 * @returns searchQuery - search query string
 * @returns filteredGames - list of games filtered by search query
 * @returns handleSearch - function to handle search query
 * @returns isSearching - boolean to check if search is in progress
 * @returns searchResultsCount - count of search results
 *
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
