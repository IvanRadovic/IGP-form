import React from "react";
import LoginAnimation from "../../animationLogin/AnimationLogin.tsx";

interface LoadingScreenProps {
  onFinish: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  return (
    <div className="loading-screen">
      <LoginAnimation onFinish={onFinish} />
      <h2 className="loading-title">Your adventure is about to begin...</h2>
      <p className="loading-text">
        Get ready to enter a world of high-stakes excitement, thrilling spins,
        and untamed jackpots. The jungle of fortune awaits you.
      </p>
    </div>
  );
};

export default LoadingScreen;
