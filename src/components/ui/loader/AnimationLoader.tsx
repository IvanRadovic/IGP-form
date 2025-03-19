import React from "react";
import Lottie from "react-lottie-player";
import { Spinner } from "react-bootstrap";

interface AnimationLoaderProps {
  title: string;
  lottieUrl: string;
}

const AnimationLoader: React.FC<AnimationLoaderProps> = ({
  title,
  lottieUrl,
}) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Lottie
        loop
        autoplay
        src={lottieUrl}
        style={{ width: 120, height: 120 }}
      />
      <h3 className="text-white">{title}</h3>
    </div>
  );
};

export default AnimationLoader;
