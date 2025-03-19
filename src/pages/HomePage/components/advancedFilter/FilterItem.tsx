import { FC } from "react";

interface FilterItemProps {
  filter: string;
  isActive: boolean;
  onClick: () => void;
}

const FilterItem: FC<FilterItemProps> = ({ filter, isActive, onClick }) => {
  return (
    <div
      className={`filter-item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <span className="text-white" style={{ fontSize: "1.3rem" }}>
        {filter}
      </span>
    </div>
  );
};
export default FilterItem;
