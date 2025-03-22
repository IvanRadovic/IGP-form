import React from "react";
import { Game } from "../../../../api/services/games/interface.ts";
import { GameCard } from "../gameCard/GameCard.tsx";

interface Props {
  games: Game[];
  lastGameRef: (node: HTMLDivElement) => void;
  isLoadingMore: boolean;
}

/**
 * @name GamesList component
 * @description - Renders list of games with game card
 * @param games - list of games to be rendered
 * @param lastGameRef - ref function to check if last game is rendered
 * @param isLoadingMore - boolean to check if more games are loading
 * @components - GameCard
 */
const GamesList: React.FC<Props> = ({ games, lastGameRef, isLoadingMore }) => (
  <>
    <div className="games-grid">
      {games.map((game, index) => (
        <div
          key={game.id}
          ref={index === games.length - 1 ? lastGameRef : null}
        >
          <GameCard
            title={game.name}
            imageUrl={game.desktopThumbnail?.url}
            provider={game.provider}
          />
        </div>
      ))}
    </div>

    {isLoadingMore && (
      <div className="loading-indicator">Loading more games...</div>
    )}
  </>
);

export default GamesList;
