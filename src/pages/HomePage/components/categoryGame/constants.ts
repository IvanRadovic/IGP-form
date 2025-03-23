import { AppDispatch } from "../../../../store/store.ts";

/* ============= IMAGES =================*/
import list from "../../../../assets/images/categoriesFilter/application.png";
import priceTag from "../../../../assets/images/categoriesFilter/price-tag.png";
import typesImg from "../../../../assets/images/categoriesFilter/shapes.png";

/* ============= REDUX FUNCTIONS =================*/
import {
  setSelectedSubCategory,
  setSelectedTags,
  setSelectedTypes,
} from "../../../../store/reducers/gamesReducer/gamesReducer.ts";

export type FilterListConfig = {
  url: string;
  filters: string[];
  selectedFilter: string | null;
  title: "Subcategories" | "Tags" | "Types";
  onFilterSelect: (filter: string) => void;
};

/**
 * @name getFilterConfigs
 * @description - Returns filter configurations for subcategories, tags and types with selected filters and dispatch function to update selected filter state
 * @interface FilterListConfig - interface for filter configurations
 * @param subsCategories - list of subcategories to be displayed
 * @param tags - list of tags to be displayed
 * @param types - list of types to be displayed
 * @param selectedSubCategory - selected subcategory filter
 * @param selectedTags - selected tags filter
 * @param selectedTypes - selected types filter
 * @param dispatch - dispatch function to update selected filter state
 */
export const getFilterConfigs = (
  subsCategories: string[],
  tags: string[],
  types: string[],
  selectedSubCategory: string | null,
  selectedTags: string | null,
  selectedTypes: string | null,
  dispatch: AppDispatch,
): FilterListConfig[] => [
  {
    url: list,
    filters: subsCategories,
    selectedFilter: selectedSubCategory,
    title: "Subcategories",
    onFilterSelect: (filter) => dispatch(setSelectedSubCategory(filter)),
  },
  {
    url: priceTag,
    filters: tags,
    selectedFilter: selectedTags,
    title: "Tags",
    onFilterSelect: (filter) => dispatch(setSelectedTags(filter)),
  },
  {
    url: typesImg,
    filters: types,
    selectedFilter: selectedTypes,
    title: "Types",
    onFilterSelect: (filter) => dispatch(setSelectedTypes(filter)),
  },
];
