import { useCallback, useEffect, useMemo } from "react";
import { RootState } from "../../../store/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { useFetchData } from "../../../hooks/useFetchData.ts";

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
} from "../../../store/games/gamesReducer.ts";

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
  const dispatch = useDispatch();

  // Ispravan selektor sa fallback vrednostima
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

  // Memorized fetch funkcije
  const fetchGamesMemoized = useCallback(getGames, []);
  const fetchCategoryGamesMemoized = useCallback(getCategoryGames, []);

  // Fetch podaci
  const {
    data: allGames,
    loading: isLoadingGames,
    error: gamesError,
  } = useFetchData(fetchGamesMemoized);
  const {
    data: categoryGamesData,
    loading: isLoadingCategories,
    error: categoriesError,
  } = useFetchData(fetchCategoryGamesMemoized);

  // Efekat koji ažurira Redux store samo kada se podaci promene
  useEffect(() => {
    if (isLoadingGames || isLoadingCategories) {
      dispatch(setLoading(true));
    }

    if (gamesError || categoriesError) {
      dispatch(setError(gamesError || categoriesError));
    }

    if (allGames) {
      dispatch(setGames(allGames));
    }

    if (categoryGamesData) {
      dispatch(setCategoryGames(categoryGamesData));
    }

    dispatch(setLoading(false));
  }, [
    allGames,
    categoryGamesData,
    isLoadingGames,
    isLoadingCategories,
    gamesError,
    categoriesError,
    dispatch,
  ]);

  return { games, categoryGames, isLoading, error };
};
