import fallbackImage from "../../../../assets/images/background/image-fallback.jpg";

import GameOverlay from "../gameOverlay/GameOverlay.tsx";

interface GameCardProps {
  title: string;
  imageUrl?: string;
  provider?: string;
}

/**
 * @name GameCard component
 * @description - Renders game card with game image and overlay
 * @param title - game title to be displayed
 * @param imageUrl - game image url to be displayed
 * @param provider - game provider to be displayed
 * @components - GameOverlay
 */
export const GameCard = ({ title, imageUrl, provider }: GameCardProps) => (
  <div
    className="game-card"
    tabIndex={0}
    role="button"
    aria-label={`Game details for ${title}`}
    onKeyDown={(e) => e.key === "Enter"}
  >
    <div className="image-container">
      <img
        src={imageUrl || fallbackImage}
        alt={title}
        loading="lazy"
        className="game-image"
        onError={(e) => {
          (e.target as HTMLImageElement).src = fallbackImage;
        }}
      />
      <GameOverlay
        title={title}
        provider={provider}
        className="game-hover-overlay"
      />
    </div>
  </div>
);
