import { FC } from "react";
import { GiGamepadCross } from "react-icons/gi";

interface GameHoverOverlayProps {
  title: string;
  provider?: string;
  className?: string;
}

const GameHoverOverlay: FC<GameHoverOverlayProps> = ({
  title,
  provider,
  className,
}) => {
  return (
    <div className={className}>
      <h3 className="game-title">{title}</h3>
      {provider && (
        <p className="game-provider">
          <GiGamepadCross size={16} color="white" />
          {provider}
        </p>
      )}
    </div>
  );
};

export default GameHoverOverlay;
