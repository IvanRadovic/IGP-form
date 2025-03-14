import React, { useState } from "react";

export const GameCard = React.memo(
  ({
    title,
    imageUrl,
    provider,
  }: {
    title: string;
    imageUrl?: string;
    provider?: string;
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    console.log("GameCard rendered", isHovered);
    return (
      <div
        className="game-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="image-container">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="game-image"
            width={320}
            height={240}
          />

          {/* Hover Overlay */}
          {isHovered && (
            <div className="game-hover-overlay">
              <h3 className="game-title">{title}</h3>
              {provider && <p className="game-provider">{provider}</p>}
            </div>
          )}
        </div>
        <h3 className="game-title-static">{title}</h3>
      </div>
    );
  },
);
