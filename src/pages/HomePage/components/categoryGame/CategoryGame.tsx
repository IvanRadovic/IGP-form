import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/*========== INTERFACES ============*/
import { CategoryGameProps } from "./interface.ts";

/*========== REDUX FUNCTIONS ============*/
import {
  setSelectedCategory,
  setSelectedTagList,
  setSubCategoryList,
  setTypesList,
} from "../../../../store/reducers/gamesReducer/gamesReducer.ts";

/*========== COMPONENTS ============*/
import FilterList from "../advancedFilter/FilterList.tsx";
import FilterButton from "../categoryGameParts/filterButton/FilterButton.tsx";
import CategoryList from "../categoryGameParts/categoriesList/CategoryList.tsx";
import AllGamesButton from "../categoryGameParts/allGamesButton/AllGamesButton.tsx";

/*========== CONSTANTS ============*/
import { getFilterConfigs } from "./constants.ts";

/*========== SELECTORS ============*/
import {
  selectAvailableFilters,
  selectFilteredCategories,
  selectFilteredExtraCategories,
  selectSelectedCategory,
  selectSelectedExtraCategory,
  selectSelectedSubCategory,
  selectSelectedTags,
  selectSelectedTypes,
} from "../../../../store/selectors";

/**
 * @component CategoryGame
 * @description - CategoryGame renders category games and advance filter for games
 * @interface CategoryGameProps - interface for props
 * @containedComponents - FilterList, FilterButton, CategoryList, AllGamesButton
 */
const CategoryGame: FC<CategoryGameProps> = () => {
  const dispatch = useDispatch();

  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

  const subsCategories = useSelector((state) => state.games.subCategoryList);
  const tags = useSelector((state) => state.games.tagsList);
  const types = useSelector((state) => state.games.typesList);
  const selectedSubCategory = useSelector(selectSelectedSubCategory);
  const selectedTags = useSelector(selectSelectedTags);
  const selectedCategory = useSelector(selectSelectedCategory);
  const selectedExtraCategory = useSelector(selectSelectedExtraCategory);
  const selectedTypes = useSelector(selectSelectedTypes);

  const categoryList = useSelector(selectFilteredCategories);

  //TODO - implement extra categories to work together with categories (they work separately now)
  const extraCategories = useSelector(selectFilteredExtraCategories);

  const { subCategories, tagsList, typesList } = useSelector(
    selectAvailableFilters,
  );

  const filterConfigs = useMemo(
    () =>
      getFilterConfigs(
        subsCategories,
        tags,
        types,
        selectedSubCategory,
        selectedTags,
        selectedTypes,
        dispatch,
      ),
    [
      subsCategories,
      tags,
      types,
      selectedSubCategory,
      selectedTags,
      selectedTypes,
      dispatch,
    ],
  );

  useEffect(() => {
    dispatch(setSubCategoryList(subCategories));
    dispatch(setSelectedTagList(tagsList));
    dispatch(setTypesList(typesList));
  }, [selectedCategory, selectedExtraCategory]);

  return (
    <>
      <div className="categories-container">
        <AllGamesButton
          selectedCategory={selectedCategory}
          setSelectedCategory={() => dispatch(setSelectedCategory(null))}
        />
        <CategoryList
          categories={categoryList}
          selectedCategory={selectedCategory}
          onSelectCategory={(slug) => dispatch(setSelectedCategory(slug))}
        />
        <FilterButton
          filterIsOpen={filterIsOpen}
          setFilterIsOpen={setFilterIsOpen}
        />
      </div>

      {/*=============== subcategories, types, tags ==================*/}
      <div className={`row mainFilter ${filterIsOpen ? "open" : ""}`}>
        {filterConfigs.map((config, index) => (
          <FilterList
            key={`${config.title}-${index}`}
            url={config.url}
            filters={config.filters}
            selectedFilter={config.selectedFilter}
            title={config.title}
            onFilterSelect={config.onFilterSelect}
          />
        ))}
      </div>
    </>
  );
};

export default CategoryGame;
