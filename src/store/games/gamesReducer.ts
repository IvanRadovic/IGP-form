import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, CategoryGames } from "../../api/services/games/interface";

interface GamesState {
  games: Game[];
  categoryGames: CategoryGames[];
  selectedCategory: string | null;
  selectedSubCategory: string[] | [];
  subCategoryList: [];
  isLoading: boolean;
  error: string | null;
}

const initialState: GamesState = {
  games: [],
  categoryGames: [],
  selectedCategory: null,
  selectedSubCategory: [],
  subCategoryList: [],
  isLoading: false,
  error: null,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setGames(state, action: PayloadAction<Game[]>) {
      state.games = action.payload;
    },
    setCategoryGames(state, action: PayloadAction<CategoryGames[]>) {
      state.categoryGames = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      if (state.selectedCategory !== action.payload) {
        state.selectedCategory = action.payload;
        state.selectedSubCategory = [];
      }
    },

    setSubCategoryList(state, action: PayloadAction<string[]>) {
      state.subCategoryList = action.payload;
    },
    setSelectedSubCategory(state, action: PayloadAction<string | null>) {
      if (state.selectedSubCategory.includes(action.payload)) {
        state.selectedSubCategory.pop(action.payload);
      } else {
        state.selectedSubCategory.push(action.payload);
      }
    },
    resetSubCategory(state) {
      state.selectedSubCategory = [];
      state.subCategoryList = null;
    },
  },
});

export const {
  setGames,
  setCategoryGames,
  setLoading,
  setError,
  setSelectedSubCategory,
  setSelectedCategory,
  resetSubCategory,
  setSubCategoryList,
} = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
