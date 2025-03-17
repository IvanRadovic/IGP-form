import { useFetchData } from "../../../hooks/useFetchData.ts";
import { CategoryGames, Game } from "../../../api/services/games/interface.ts";
/*======= API SERVICES ===========*/
import {
  getCategoryGames,
  getGames,
} from "../../../api/services/games/gamesApiService.ts";

/**
 * Custom hook to fetch games and category games data
 * @returns allGames - List of all games
 * @returns isLoadingGames - Loading state for all games
 * @returns gamesError - Error state for all games
 * @returns categoryGames - List of category games
 * @returns isLoadingCategories - Loading state for category games
 * @returns categoriesError - Error state for category games
 *
 * example usage:
 * const { allGames, isLoadingGames, gamesError, categoryGames, isLoadingCategories, categoriesError } = useGames();
 */

export const useGames = () => {
  const {
    data: allGames,
    loading: isLoadingGames,
    error: gamesError,
  } = useFetchData<Game[]>(getGames);
  const {
    data: categoryGames,
    loading: isLoadingCategories,
    error: categoriesError,
  } = useFetchData<CategoryGames[]>(getCategoryGames);

  return {
    allGames,
    isLoadingGames,
    gamesError,
    categoryGames,
    isLoadingCategories,
    categoriesError,
  };
};
