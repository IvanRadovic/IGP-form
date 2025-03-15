import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import SearchField from "react-search-field";

type SearchProps = {
  onSearch: (query: string) => void;
  placeholder?: string;
  debounceTime?: number;
  className?: string;
};

const Search: React.FC<SearchProps> = ({
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
    <div className={`search-container ${className}`}>
      <SearchField
        placeholder="Search..."
        onChange={onChange}
        searchText="This is initial search text"
        classNames="test-class"
      />
    </div>
  );
};

export default Search;
