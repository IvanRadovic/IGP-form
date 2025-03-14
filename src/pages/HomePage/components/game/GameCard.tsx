import React from "react";

export const GameCard = React.memo(
  ({ title, imageUrl }: { title: string; imageUrl?: string }) => (
    <div className="game-card">
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        className="game-image"
        width={320}
        height={240}
      />
      <h6 className="game-title">{title}</h6>
    </div>
  ),
);
