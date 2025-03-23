import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import loginAnimation from "../../../../assets/animations/casnio.json";

interface LoginAnimationProps {
  onFinish: () => void;
}

/**
 * @component LoginAnimation component
 * @description - Renders login animation with progress bar and calls onFinish function on animation finish
 * @interface LoginAnimationProps - interface for props
 * @param onFinish - function to be called on animation finish
 */
const LoginAnimation: React.FC<LoginAnimationProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onFinish();
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="d-flex flex-column align-items-center">
      <Lottie
        animationData={loginAnimation}
        play
        style={{ width: 300, height: 300 }}
      />
      <h3 className={"text-white"}>{progress} %</h3>
      <div className="animation-container">
        <div
          className="progress-container"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

export default LoginAnimation;
