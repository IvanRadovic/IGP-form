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
        className={`category advance-filter ${filterIsOpen ? "active" : ""}`}
        onClick={() => setFilterIsOpen(!filterIsOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setFilterIsOpen(!filterIsOpen)}
      >
        <img
          className={`img-category ${filterIsOpen ? "active-icon" : ""}`}
          src={filter}
          alt="advanced filter"
        />
        <span className="filter-text">Advanced Filter</span>
      </div>

      {/* Mobile verzija sa optimizovanim animacijama */}
      <div
        className={`category advance-filter-mobile ${filterIsOpen ? "active" : ""}`}
        onClick={() => setFilterIsOpen(!filterIsOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setFilterIsOpen(!filterIsOpen)}
      >
        <img
          className={`img-category img-category-mobile ${filterIsOpen ? "active-icon" : ""}`}
          src={filter}
          alt="advanced filter"
        />
        <span className="filter-text">Filter</span>
      </div>
    </>
  );
};

export default FilterButton;
