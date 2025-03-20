import { FC, useMemo, useState } from "react";
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
} from "../../../../store/selector.ts";
import {
  resetSubCategory,
  setSelectedCategory,
  setSelectedSubCategory,
} from "../../../../store/games/gamesReducer.ts";

/*========== COMPONENTS ============*/
import FilterList from "../advancedFilter/FilterList.tsx";

const CategoryGame: FC<CategoryGameProps> = () => {
  const dispatch = useDispatch();
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const categoryList = useSelector(selectFilteredCategories);
  const selectedSubCategory = useSelector(selectSelectedSubCategory);
  const selectedCategory = useSelector(selectSelectedCategory);
  const filteredGames = useSelector(selectFilteredGames);
  const subCategories = useMemo(
    () => [...new Set(filteredGames.map((game) => game.subCategory))],
    [filteredGames],
  );

  return (
    <>
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
            filters={subCategories}
            selectedFilter={selectedSubCategory}
            title="Subcategories"
            resetAction={resetSubCategory}
            onFilterSelect={(filter) =>
              dispatch(setSelectedSubCategory(filter))
            }
          />
          <FilterList
            url={priceTag}
            filters={subCategories}
            selectedFilter={selectedSubCategory}
            title="Tags"
            resetAction={resetSubCategory}
            onFilterSelect={(filter) =>
              dispatch(setSelectedSubCategory(filter))
            }
          />
          <FilterList
            url={types}
            filters={subCategories}
            selectedFilter={selectedSubCategory}
            title="Types"
            resetAction={resetSubCategory}
            onFilterSelect={(filter) =>
              dispatch(setSelectedSubCategory(filter))
            }
          />
        </div>
      )}
    </>
  );
};

export default CategoryGame;
