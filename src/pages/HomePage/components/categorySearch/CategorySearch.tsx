import React from "react";

import CategoryGame from "../categoryGame/CategoryGame.tsx";
import SearchField from "../../../../components/UI/serach/Search.tsx";
import { CategoryGames } from "../../../../api/services/games/interface.ts";

interface Props {
  categoryGames: CategoryGames[] | undefined;
  onSearch: (query: string) => void;
}

const CategorySearch: React.FC<Props> = ({ categoryGames, onSearch }) => (
  <div className="categories-search-container">
    <CategoryGame categoryGames={categoryGames} />
    <SearchField onSearch={onSearch} />
  </div>
);

export default CategorySearch;
