import React from "react";

import CategoryGame from "../categoryGame/CategoryGame.tsx";
import SearchField from "../../../../components/ui/serach/Search.tsx";
import { CategoryGames } from "../../../../api/services/games/interface.ts";

interface Props {
  categoryGames: CategoryGames[] | undefined;
  onSearch: (query: string) => void;
}

const CategorySearch: React.FC<Props> = ({ onSearch }) => (
  <div className="categories-search-container">
    <SearchField onSearch={onSearch} />
    <CategoryGame />
  </div>
);

export default CategorySearch;
