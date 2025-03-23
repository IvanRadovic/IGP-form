import { FC } from "react";

import casino from "../../../../../assets/images/new/casino.png";
import fallbackImage from "../../../../../assets/images/background/image-fallback.jpg";

interface AllGamesButtonProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

/**
 * @component AllGamesButton
 * @description - Renders all games button with casino icon and text "All games" to show all games on click
 * @interface AllGamesButtonProps - interface for props
 * @param selectedCategory - selected category to highlight
 * @param setSelectedCategory - function to set selected category
 * @returns - All games button component with casino icon and text
 */
const AllGamesButton: FC<AllGamesButtonProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div
      className={`category ${!selectedCategory ? "active" : ""}`}
      onClick={() => setSelectedCategory(null)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setSelectedCategory(null)}
    >
      <img
        className="img-category"
        src={casino}
        alt="All games"
        onError={(e) => {
          (e.target as HTMLImageElement).src = fallbackImage;
        }}
      />
      <span>All games</span>
    </div>
  );
};

export default AllGamesButton;
