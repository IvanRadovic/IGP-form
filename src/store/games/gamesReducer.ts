import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, CategoryGames } from "../../api/services/games/interface";

interface GamesState {
  games: Game[];
  categoryGames: CategoryGames[];
  subCategoryList: [] | string[];
  tagsList: [] | string[];
  selectedTags: string[] | [];
  selectedCategory: string | null;
  selectedExtraCategory: string | null;
  selectedSubCategory: string[] | [];
  extraCategories: [] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: GamesState = {
  games: [],
  categoryGames: [],
  selectedCategory: null,
  selectedExtraCategory: null,
  selectedSubCategory: [],
  subCategoryList: [],
  tagsList: [],
  selectedTags: [],
  extraCategories: [],
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

    // Categories
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      if (state.selectedCategory !== action.payload) {
        state.selectedCategory = action.payload;
        // state.selectedSubCategory = [];
      }
    },

    // Extra Categories
    setSelectedExtraCategories(state, action: PayloadAction<string[]>) {
      if (state.extraCategories !== action.payload) {
        state.selectedExtraCategory = action.payload;
      }
    },

    //Subcategories
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

    // Tags
    setSelectedTagList(state, action: PayloadAction<string[]>) {
      state.tagsList = action.payload;
    },
    setSelectedTags(state, action: PayloadAction<string[]>) {
      if (state.selectedTags.includes(action.payload)) {
        state.selectedTags.pop(action.payload);
      } else {
        state.selectedTags.push(action.payload);
      }
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
  setSelectedExtraCategories,
  setSubCategoryList,
  setSelectedTagList,
  setSelectedTags,
} = gamesSlice.actions;
export const gamesReducer = gamesSlice.reducer;
