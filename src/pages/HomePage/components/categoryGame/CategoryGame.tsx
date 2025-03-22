import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/*========== IMAGES ============*/
import fallBackImg from "../../../../assets/images/background/image-fallback.jpg";
import casino from "../../../../assets/images/new/casino.png";
import filter from "../../../../assets/images/new/filter.png";

/*========== INTERFACES ============*/
import { CategoryGameProps } from "./interface.ts";

/*========== REDUX FUNCTIONS ============*/
import {
  selectFilteredCategories,
  selectFilteredGames,
  selectSelectedCategory,
  selectSelectedSubCategory,
  selectSelectedTags,
  selectFilteredExtraCategories,
  selectSelectedExtraCategory,
  selectSelectedTypes,
} from "../../../../store/selector.ts";
import {
  setSelectedCategory,
  setSelectedTagList,
  setSubCategoryList,
  setTypesList,
} from "../../../../store/games/gamesReducer.ts";

/*========== COMPONENTS ============*/
import FilterList from "../advancedFilter/FilterList.tsx";

/*========== FUNCTIONS ============*/
import { getFilterConfigs } from "./constants.ts";

/**
 * @name CategoryGame component
 * @description - Renders category games and advance filter for games
 * @components - FilterList
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
  const extraCategories = useSelector(selectFilteredExtraCategories);
  const filteredGames = useSelector(selectFilteredGames);

  const subCategories = useMemo(
    () => [...new Set(filteredGames.map((game) => game.subCategory))],
    [filteredGames],
  );
  const tagsList = useMemo(
    () => [...new Set(filteredGames.map((game) => game.tags))],
    [filteredGames],
  );

  const typesList = useMemo(
    () => [...new Set(filteredGames.map((game) => game.type))],
    [filteredGames],
  );

  // Filter configurations
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

  // Effects
  useEffect(() => {
    dispatch(setSubCategoryList(subCategories));
    dispatch(setSelectedTagList(tagsList));
    dispatch(setTypesList(typesList));
  }, [selectedCategory, selectedExtraCategory]);

  return (
    <>
      {/*<ul style={{ color: "white" }}>*/}
      {/*  {extraCategories?.map((category) => (*/}
      {/*    <li key={category.title}>*/}
      {/*      <span*/}
      {/*        onClick={() =>*/}
      {/*          dispatch(setSelectedExtraCategories(category.slug))*/}
      {/*        }*/}
      {/*      >*/}
      {/*        {category.multilingual[0].title}*/}
      {/*      </span>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      <div className="categories-container">
        <div
          className={`category ${selectedCategory ? "" : "active"}`}
          onClick={() => dispatch(setSelectedCategory(null))}
        >
          <img className="img-category" src={casino} alt="All games" />
          <span>All games</span>
        </div>
        <div className="categoryScroll">
          {categoryList?.map(({ title, image, slug }) => (
            <div
              key={title}
              className={`category ${selectedCategory === slug ? "active" : ""}`}
              onClick={() => dispatch(setSelectedCategory(slug))}
            >
              <img
                className="img-category"
                src={image}
                alt={title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallBackImg;
                }}
              />
              <span>{title}</span>
            </div>
          ))}
        </div>
        <div
          className="category advance-filter"
          onClick={() => setFilterIsOpen(!filterIsOpen)}
        >
          <img className="img-category" src={filter} alt="advances filter" />
          <span>Advance Filter</span>
        </div>
        <div
          className="category advance-filter-mobile"
          onClick={() => setFilterIsOpen(!filterIsOpen)}
        >
          <img
            className="img-category img-category-mobile"
            src={filter}
            alt="advances filter"
          />
          <span>Filter</span>
        </div>
      </div>

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
