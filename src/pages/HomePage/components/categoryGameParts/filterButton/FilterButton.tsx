import filter from "../../../../../assets/images/new/filter.png";

interface FilterButtonProps {
  filterIsOpen: boolean;
  setFilterIsOpen: (isOpen: boolean) => void;
}

/**
 * @name FilterButton
 * @description - Renders advance filter button for games. It has two versions, one for desktop and one for mobile
 * @param filterIsOpen - state to check if filter is open
 * @param setFilterIsOpen - function to set filter open state
 * @returns - Filter button component
 */
const FilterButton: React.FC<FilterButtonProps> = ({
  filterIsOpen,
  setFilterIsOpen,
}) => {
  return (
    <>
      <div
        className="category advance-filter"
        onClick={() => setFilterIsOpen(!filterIsOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setFilterIsOpen(!filterIsOpen)}
      >
        <img className="img-category" src={filter} alt="advances filter" />
        <span>Advance Filter</span>
      </div>

      {/* ========== MOBILE VERSION =========== */}
      <div
        className="category advance-filter-mobile"
        onClick={() => setFilterIsOpen(!filterIsOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setFilterIsOpen(!filterIsOpen)}
      >
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
