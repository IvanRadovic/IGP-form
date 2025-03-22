import { FC } from "react";

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

/**
 * @name FilterList component
 * @description - Renders a list of filters with title and filter items
 * @param filters - list of filters
 * @param selectedFilter - selected filter
 * @param title - title of the filter list
 * @param url - url of the filter image
 * @param resetAction - function to reset the filter
 * @param onFilterSelect - function to select a filter
 */
const FilterList: FC<FilterListProps> = ({
  filters,
  selectedFilter,
  title,
  onFilterSelect,
  url,
}) => {
  return (
    <div className="filterSubcontainer col-12 col-md-6 col-lg-4">
      <div className="d-flex justify-content-between align-items-center gap-4 mb-4">
        <div className="d-flex align-items-center gap-3">
          <img src={url} alt={title} className="coverFilterImage" />
          <h4 className="text-white mb-0">{title}:</h4>
        </div>
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
