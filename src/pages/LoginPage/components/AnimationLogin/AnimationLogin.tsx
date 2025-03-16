import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import loginAnimation from "../../../../assets/animations/casnio.json";

interface LoginAnimationProps {
  onFinish: () => void;
}

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
        style={{ width: 500, height: 500 }}
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
