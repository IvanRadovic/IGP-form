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
  resetSubCategory,
  resetTags,
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
  const subsss = useSelector((state) => state.games.subCategoryList);
  const tagsss = useSelector((state) => state.games.tagsList);
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const categoryList = useSelector(selectFilteredCategories);
  const extraCategories = useSelector(selectFilteredExtraCategories);
  // const subCategories = useSelector(subCategoryList);
  const selectedSubCategory = useSelector(selectSelectedSubCategory);
  const selectedTags = useSelector(selectSelectedTags);
  const selectedCategory = useSelector(selectSelectedCategory);
  const selectedExtraCategory = useSelector(selectSelectedExtraCategory);
  const filteredGames = useSelector(selectFilteredGames);
  const subCategories = useMemo(
    () => [...new Set(filteredGames.map((game) => game.subCategory))],
    [filteredGames],
  );

  const tagsListaa = useMemo(
    () => [...new Set(filteredGames.map((game) => game.tags))],
    [filteredGames],
  );

  useEffect(() => {
    // extraCategories je niz objekata kategorija sa tipom === "extraCategories"
    // u vrhu ide map nad tim nizom i pri
    console.log("EXTRA CATEGORIES", extraCategories);
    dispatch(setSubCategoryList(subCategories));
    dispatch(setSelectedTagList(tagsListaa));
  }, [selectedCategory, selectedExtraCategory]);

  const handleSubCategorySelect = (filter: string) => {
    dispatch(setSelectedSubCategory(filter));
  };

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
            filters={subsss}
            selectedFilter={selectedSubCategory}
            title="Subcategories"
            resetAction={resetSubCategory}
            onFilterSelect={handleSubCategorySelect}
          />
          <FilterList
            url={priceTag}
            filters={tagsss}
            selectedFilter={selectedTags}
            title="Tags"
            resetAction={resetTags}
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
