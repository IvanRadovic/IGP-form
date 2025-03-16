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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Lottie
        animationData={loginAnimation}
        play
        style={{ width: 500, height: 500 }}
      />
      <h3 className={"text-white"}>{progress} %</h3>
      <div
        style={{
          width: "100%",
          height: 10,
          background: "#ddd",
          marginTop: 10,
          borderRadius: 5,
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#f40606",
            borderRadius: 5,
          }}
        />
      </div>
    </div>
  );
};

export default LoginAnimation;
