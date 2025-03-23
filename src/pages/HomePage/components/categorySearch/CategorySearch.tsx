import React from "react";

import CategoryGame from "../categoryGame/CategoryGame.tsx";
import SearchField from "../../../../components/ui/serach/Search.tsx";
import { CategoryGames } from "../../../../api/services/games/interface.ts";

interface Props {
  categoryGames: CategoryGames[] | undefined;
  onSearch: (query: string) => void;
}

/**
 * @component CategorySearch
 * @description - CategorySearch renders search field and category games
 * @param categoryGames - list of category games to display
 * @param onSearch - function to search games by query string
 * @containedComponents - SearchField, CategoryGame
 */
const CategorySearch: React.FC<Props> = ({ onSearch }) => (
  <div className="categories-search-container">
    <SearchField onSearch={onSearch} />
    <CategoryGame />
  </div>
);

export default CategorySearch;
