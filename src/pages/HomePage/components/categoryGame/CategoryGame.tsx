import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/*========== IMAGES ============*/
import fallBackImg from "../../../../assets/images/background/image-fallback.jpg";
import casino from "../../../../assets/images/new/casino.png";
import filter from "../../../../assets/images/new/filter.png";
import list from "../../../../assets/images/categoriesFilter/application.png";
import priceTag from "../../../../assets/images/categoriesFilter/price-tag.png";
import types from "../../../../assets/images/categoriesFilter/shapes.png";

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
} from "../../../../store/selector.ts";
import {
  setSelectedCategory,
  setSelectedExtraCategories,
  setSelectedSubCategory,
  setSelectedTagList,
  setSelectedTags,
  setSubCategoryList,
} from "../../../../store/games/gamesReducer.ts";

/*========== COMPONENTS ============*/
import FilterList from "../advancedFilter/FilterList.tsx";

const CategoryGame: FC<CategoryGameProps> = () => {
  const dispatch = useDispatch();

  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

  // Selectors
  const subsCategories = useSelector((state) => state.games.subCategoryList);
  const tags = useSelector((state) => state.games.tagsList);
  const selectedSubCategory = useSelector(selectSelectedSubCategory);
  const selectedTags = useSelector(selectSelectedTags);
  const selectedCategory = useSelector(selectSelectedCategory);
  const selectedExtraCategory = useSelector(selectSelectedExtraCategory);

  // Selected filters
  const categoryList = useSelector(selectFilteredCategories);
  const extraCategories = useSelector(selectFilteredExtraCategories);
  const filteredGames = useSelector(selectFilteredGames);

  // Filtered data
  const subCategories = useMemo(
    () => [...new Set(filteredGames.map((game) => game.subCategory))],
    [filteredGames],
  );
  const tagsList = useMemo(
    () => [...new Set(filteredGames.map((game) => game.tags))],
    [filteredGames],
  );

  // Effects
  useEffect(() => {
    dispatch(setSubCategoryList(subCategories));
    dispatch(setSelectedTagList(tagsList));
  }, [selectedCategory, selectedExtraCategory]);

  return (
    <>
      <ul style={{ color: "white" }}>
        {extraCategories?.map((category) => (
          <li key={category.title}>
            <span
              onClick={() =>
                dispatch(setSelectedExtraCategories(category.slug))
              }
            >
              {category.multilingual[0].title}
            </span>
          </li>
        ))}
      </ul>
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

      {filterIsOpen && (
        <div className="row mainFilter">
          <FilterList
            url={list}
            filters={subsCategories}
            selectedFilter={selectedSubCategory}
            title="Subcategories"
            onFilterSelect={(filter) => setSelectedSubCategory(filter)}
          />
          <FilterList
            url={priceTag}
            filters={tags}
            selectedFilter={selectedTags}
            title="Tags"
            onFilterSelect={(filter) => dispatch(setSelectedTags(filter))}
          />
          {/*<FilterList*/}
          {/*  url={types}*/}
          {/*  filters={subCategories}*/}
          {/*  selectedFilter={selectedSubCategory}*/}
          {/*  title="Types"*/}
          {/*  resetAction={resetSubCategory}*/}
          {/*  onFilterSelect={(filter) =>*/}
          {/*    dispatch(setSelectedSubCategory(filter))*/}
          {/*  }*/}
          {/*/>*/}
        </div>
      )}
    </>
  );
};

export default CategoryGame;
