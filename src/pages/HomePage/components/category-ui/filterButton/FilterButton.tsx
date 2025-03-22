import React from "react";
import filter from "../../../../../assets/images/new/filter.png";

interface FilterButtonProps {
  isFilterOpen: boolean;
  toggleFilter: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  isFilterOpen,
  toggleFilter,
}) => {
  return (
    <>
      <div className="category advance-filter" onClick={toggleFilter}>
        <img className="img-category" src={filter} alt="advances filter" />
        <span>Advance Filter</span>
      </div>
      <div className="category advance-filter-mobile" onClick={toggleFilter}>
        <img
          className="img-category img-category-mobile"
          src={filter}
          alt="advances filter"
        />
        <span>Filter</span>
      </div>
    </>
  );
};

export default FilterButton;
