import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/*========== IMAGES ============*/
import fallBackImg from "../../../../assets/images/background/image-fallback.jpg";
import casino from "../../../../assets/images/new/casino.png";
import filter from "../../../../assets/images/new/filter.png";
import list from "../../../../assets/images/categoriesFilter/application.png";
import priceTag from "../../../../assets/images/categoriesFilter/price-tag.png";
import typesImg from "../../../../assets/images/categoriesFilter/shapes.png";

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
  setSelectedExtraCategories,
  setSelectedSubCategory,
  setSelectedTagList,
  setSelectedTags,
  setSubCategoryList,
  setTypesList,
  setSelectedTypes,
} from "../../../../store/games/gamesReducer.ts";

/*========== COMPONENTS ============*/
import FilterList from "../advancedFilter/FilterList.tsx";

const CategoryGame: FC<CategoryGameProps> = () => {
  const dispatch = useDispatch();

  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

  // Selectors
  const subsCategories = useSelector((state) => state.games.subCategoryList);
  const tags = useSelector((state) => state.games.tagsList);
  const types = useSelector((state) => state.games.typesList);
  const selectedSubCategory = useSelector(selectSelectedSubCategory);
  const selectedTags = useSelector(selectSelectedTags);
  const selectedCategory = useSelector(selectSelectedCategory);
  const selectedExtraCategory = useSelector(selectSelectedExtraCategory);
  const selectedTypes = useSelector(selectSelectedTypes);

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

  const typesList = useMemo(
    () => [...new Set(filteredGames.map((game) => game.type))],
    [filteredGames],
  );

  // Effects
  useEffect(() => {
    dispatch(setSubCategoryList(subCategories));
    dispatch(setSelectedTagList(tagsList));
    dispatch(setTypesList(typesList));
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
            onFilterSelect={(filter) =>
              dispatch(setSelectedSubCategory(filter))
            }
          />
          <FilterList
            url={priceTag}
            filters={tags}
            selectedFilter={selectedTags}
            title="Tags"
            onFilterSelect={(filter) => dispatch(setSelectedTags(filter))}
          />
          <FilterList
            url={typesImg}
            filters={types}
            selectedFilter={selectedTypes}
            title="Types"
            onFilterSelect={(filter) => dispatch(setSelectedTypes(filter))}
          />
        </div>
      )}
    </>
  );
};

export default CategoryGame;
