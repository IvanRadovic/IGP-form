import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* ============ INTEFACES ===============*/
import { Game, CategoryGames } from "../../api/services/games/interface";
import { GamesState } from "./interface.ts";

const initialState: GamesState = {
  games: [],
  categoryGames: [],
  selectedCategory: null,
  subCategoryList: [],
  selectedSubCategory: [],
  selectedExtraCategory: null,
  tagsList: [],
  typesList: [],
  selectedTypes: [],
  selectedTags: [],
  extraCategories: [],
  isLoading: false,
  error: null,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    // Games
    setGames(state, action: PayloadAction<Game[]>) {
      state.games = action.payload;
    },
    // Category
    setCategoryGames(state, action: PayloadAction<CategoryGames[]>) {
      state.categoryGames = action.payload;
    },
    // Loading
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    // Error
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },

    // Categories
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      if (state.selectedCategory !== action.payload) {
        state.selectedCategory = action.payload;
        state.extraCategories = null;
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

    //types
    setTypesList(state, action: PayloadAction<string[]>) {
      state.typesList = action.payload;
    },
    setSelectedTypes(state, action: PayloadAction<string | null>) {
      if (state.selectedTypes.includes(action.payload)) {
        state.selectedTypes.pop(action.payload);
      } else {
        state.selectedTypes.push(action.payload);
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
  setSelectedTypes,
  setTypesList,
} = gamesSlice.actions;

export const gamesReducer = gamesSlice.reducer;
