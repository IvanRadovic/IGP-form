import React, { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import debounce from "lodash.debounce";

type SearchFieldProps = {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceTime?: number;
  className?: string;
};

const SearchField: React.FC<SearchFieldProps> = ({
  onSearch,
  placeholder = "Search...",
  debounceTime = 300,
  className = "",
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useCallback(
    debounce((query) => onSearch(query), debounceTime),
    [onSearch, debounceTime],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className={`search-container ${className}`}>
        <FaSearch className="search-icon" size={22} />
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default SearchField;
