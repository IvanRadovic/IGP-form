import { FC } from "react";

import callBackImg from "../../../../../assets/images/background/image-fallback.jpg";

interface Category {
  title: string;
  image: string;
  slug: string;
}

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (slug: string) => void;
}

/**
 * @name CategoryList
 * @description - Renders list of categories for games with image and title
 * @interface CategoryListProps - interface for props
 * @param categories - list of categories to be displayed
 * @param selectedCategory - selected category slug to highlight in the list of categories
 * @param onSelectCategory - function to select category on click
 * @returns - Category list component with list of categories
 */
const CategoryList: FC<CategoryListProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="categoryScroll">
      {categories?.map(({ title, image, slug }) => (
        <div
          key={title}
          className={`category-item ${selectedCategory === slug ? "category-item--active" : ""}`}
          onClick={() => onSelectCategory(slug)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onSelectCategory(slug)}
        >
          <div className="category-item__inner">
            <img
              className="category-item__icon"
              src={image}
              alt={title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = callBackImg;
              }}
            />
            <span className="category-item__label">{title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
