import { FC } from "react";

interface FilterItemProps {
  filter: string;
  isActive: boolean;
  onClick: () => void;
}

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
