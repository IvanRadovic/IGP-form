import { FC } from "react";

interface FilterItemProps {
  filter: string;
  isActive: boolean;
  onClick: () => void;
}

/**
 * @name FilterItem component
 * @description - Renders a single filter item with filter name and active state
 * @param filter - filter name
 * @param isActive - boolean to check if filter is active
 * @param onClick - function to be called on filter click
 */
const FilterItem: FC<FilterItemProps> = ({ filter, isActive, onClick }) => {
  return (
    <div
      className={`filter-item ${isActive ? "activeFilterItem" : ""}`}
      onClick={onClick}
    >
      <span
        className={`filter-item-span ${isActive ? "activeFilterItem" : ""}`}
      >
        {filter}
      </span>
    </div>
  );
};
export default FilterItem;
