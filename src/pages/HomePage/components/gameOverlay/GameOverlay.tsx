import { FC } from "react";
import { GiGamepadCross } from "react-icons/gi";

interface GameHoverOverlayProps {
  title: string;
  provider?: string;
  className?: string;
}

/**
 * @component GameHoverOverlay
 * @description - GameHoverOverlay renders game title and provider on game hover overlay with custom class name support
 * @interface GameHoverOverlayProps - interface for props
 * @param title - game title to be displayed
 * @param provider - game provider to be displayed
 * @param className - custom class name for the overlay
 */
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
