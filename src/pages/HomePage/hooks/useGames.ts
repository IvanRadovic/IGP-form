import { useEffect } from "react";
import { RootState } from "../../../store/store.ts";
import { useDispatch, useSelector } from "react-redux";

/*======= API SERVICES ===========*/
import {
  getCategoryGames,
  getGames,
} from "../../../api/services/games/gamesApiService.ts";
import {
  setCategoryGames,
  setError,
  setGames,
  setLoading,
} from "../../../store/reducers/gamesReducer/gamesReducer.ts";
import { CategoryGames, Game } from "../../../api/services/games/interface.ts";

/**
 * @hook useGames
 * @description useGames hook to fetch games and category games data
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
  const dispatch = useDispatch();

  const gamesState = useSelector(
    (state: RootState) =>
      state.games || {
        games: [],
        categoryGames: [],
        isLoading: false,
        error: null,
      },
  );

  const { games, categoryGames, isLoading, error } = gamesState;

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const [gamesData, categoryGamesData] = await Promise.all([
          new Promise<Game[]>((resolve, reject) => getGames(resolve, reject)),
          new Promise<CategoryGames[]>((resolve, reject) =>
            getCategoryGames(resolve, reject),
          ),
        ]);
        dispatch(setGames(gamesData));
        dispatch(setCategoryGames(categoryGamesData));
      } catch (err) {
        dispatch(setError(err));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  return { games, categoryGames, isLoading, error };
};
