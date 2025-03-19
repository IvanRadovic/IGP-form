import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store.ts";

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
} from "../../../../store/selector.ts";
import {
  setSelectedCategory,
  setSelectedSubCategory,
} from "../../../../store/games/gamesReducer.ts";

const CategoryGame: FC<CategoryGameProps> = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector(selectFilteredCategories);

  const selectedCategory = useSelector(selectSelectedCategory);
  const selectedSubCategory = useSelector(selectSelectedSubCategory);
  const filteredGames = useSelector(selectFilteredGames);

  return (
    <>
      <div className="categories-container">
        <div
          className="category"
          onClick={() => dispatch(setSelectedCategory(null))}
        >
          <img className="img-category" src={casino} alt="All games" />
          <span>All games</span>
        </div>
        <div className="categoryScroll">
          {categoryList?.map(({ title, image, slug }) => (
            <div
              key={title}
              className="category"
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
          className="category"
          onClick={() => dispatch(setSelectedSubCategory("some-subcategory"))}
        >
          <img className="img-category" src={filter} alt="advances filter" />
          <span>Filter</span>
        </div>
      </div>

      {selectedCategory && (
        <div className="subCategories">
          {filteredGames.map((game, index) => (
            <div
              key={index}
              className={`subCategory ${
                selectedSubCategory === game.subCategory ? "active" : ""
              }`}
              onClick={() => dispatch(setSelectedSubCategory(game.subCategory))}
            >
              <span>{game.subCategory}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryGame;
