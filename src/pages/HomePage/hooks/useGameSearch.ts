import { useState } from "react";
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

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (!query) {
      setVisibleGames(allGames?.slice(0, 24) || []);
      setCurrentPage(1);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const filteredGames =
      allGames?.filter(
        ({ name, provider }) =>
          name.toLowerCase().includes(lowerCaseQuery) ||
          provider.toLowerCase().includes(lowerCaseQuery),
      ) || [];

    setVisibleGames(filteredGames);
  };

  return { searchQuery, handleSearch };
};
