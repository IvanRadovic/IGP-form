import { FC } from "react";

import fallBackImg from "../../../../assets/images/background/image-fallback.jpg";

/*========== FUNCTIONS ============*/
import { getAvailableCategories } from "./utils.ts";

/*========== INTERFACES ============*/
import { CategoryGameProps } from "./interface.ts";

const CategoryGame: FC<CategoryGameProps> = ({ categoryGames = [] }) => {
  const availableCategories = getAvailableCategories(categoryGames);

  return (
    <div className="categories-container">
      {availableCategories?.map(({ slug, title, icon }) => (
        <div key={slug} className="category">
          <img
            className="img-category"
            src={icon}
            alt={title}
            onError={(e) => {
              (e.target as HTMLImageElement).src = fallBackImg;
            }}
          />
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryGame;
