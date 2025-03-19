import { FC, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxReset } from "react-icons/rx";

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
  resetSubCategory,
  setSelectedCategory,
  setSelectedSubCategory,
} from "../../../../store/games/gamesReducer.ts";
import { DefaultButton } from "../../../../components/ui/button/DefaultButton/DefaultButton.tsx";

const CategoryGame: FC<CategoryGameProps> = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector(selectFilteredCategories);

  const selectedCategory = useSelector(selectSelectedCategory);
  const selectedSubCategory = useSelector(selectSelectedSubCategory);
  const filteredGames = useSelector(selectFilteredGames);

  // const memoizedsubCategoryList = useMemo(() => selectedSubCategory, [selectedCategory]);
  const memoizedFilteredGames = useMemo(() => filteredGames, [filteredGames]);

  console.log("categoryList", memoizedFilteredGames);

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
      </div>

      {selectedCategory && (
        <div className="d-flex gap-3">
          {[...new Set(filteredGames.map((game) => game.subCategory))].map(
            (subCategory, index) => (
              <div
                key={index}
                className={`subCategory ${
                  selectedSubCategory === subCategory ? "active" : ""
                }`}
                onClick={() => dispatch(setSelectedSubCategory(subCategory))}
              >
                <span className="text-white">{subCategory}</span>
              </div>
            ),
          )}
          <DefaultButton onClick={() => dispatch(resetSubCategory())}>
            <RxReset size={22} color={"blue"} />
          </DefaultButton>
        </div>
      )}
    </>
  );
};

export default CategoryGame;
