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
import { selectFilteredCategories } from "../../../../store/selector.ts";
import {
  setSelectedCategory,
  setSelectedSubCategory,
} from "../../../../store/games/gamesReducer.ts";

const CategoryGame: FC<CategoryGameProps> = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector(selectFilteredCategories);
  const selectedCategory = useSelector(
    (state: RootState) => state.games.selectedCategory,
  );
  const selectedSubCategory = useSelector(
    (state: RootState) => state.games.selectedSubCategory,
  );

  const filteredGames = useSelector((state: RootState) =>
    state.games.games.filter((game) =>
      selectedCategory
        ? game.category === selectedCategory &&
          (!selectedSubCategory || game.subCategory === selectedSubCategory)
        : true,
    ),
  );

  console.log("Filtered Games FROM CATEGORY:", filteredGames);

  return (
    <div className="categories-container">
      <div
        className="category"
        onClick={() => dispatch(setSelectedCategory(null))}
      >
        <img className="img-category" src={casino} alt="All games" />
        <span>All games</span>
      </div>
      <div className="categoryScroll">
        {categoryList?.map(({ slug, image }) => (
          <div
            key={slug}
            className="category"
            onClick={() => dispatch(setSelectedCategory(slug))}
          >
            <img
              className="img-category"
              src={image}
              alt={slug}
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallBackImg;
              }}
            />
            <span>{slug}</span>
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
  );
};

export default CategoryGame;
