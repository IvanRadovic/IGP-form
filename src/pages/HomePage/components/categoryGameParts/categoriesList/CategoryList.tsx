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
          className={`category ${selectedCategory === slug ? "active" : ""}`}
          onClick={() => onSelectCategory(slug)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onSelectCategory(slug)}
        >
          <img
            className="img-category"
            src={image}
            alt={title}
            onError={(e) => {
              (e.target as HTMLImageElement).src = callBackImg;
            }}
          />
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
