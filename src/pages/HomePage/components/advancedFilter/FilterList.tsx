import { FC, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxReset } from "react-icons/rx";

/*========== COMPONENTS ============*/
import FilterItem from "./FilterItem.tsx";

interface FilterListProps {
  filters: string[];
  selectedFilter: string | null;
  title: string;
  url: string;
  resetAction: () => void;
  onFilterSelect: (filter: string) => void;
}

const FilterList: FC<FilterListProps> = ({
  filters,
  selectedFilter,
  title,
  resetAction,
  onFilterSelect,
  url,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="filterSubcontainer col-12 col-md-6 col-lg-4">
      <div className="d-flex justify-content-between align-items-center gap-4 mb-4">
        <div className="d-flex align-items-center gap-3">
          <img src={url} alt={title} className="coverFilterImage" />
          <h4 className="text-white mb-0">{title}:</h4>
        </div>
        <span className="resetSpan" onClick={() => dispatch(resetAction())}>
          <RxReset size={18} color={"white"} className="resetSpanIcon" />
        </span>
      </div>
      <div className="d-flex gap-3 align-items-center filter-container">
        {filters?.map((filter, index) => (
          <FilterItem
            key={index}
            filter={filter}
            isActive={selectedFilter?.includes(filter)}
            onClick={() => onFilterSelect(filter)}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterList;
