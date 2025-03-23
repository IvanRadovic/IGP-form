import React from "react";
import Lottie from "react-lottie-player";

interface AnimationLoaderProps {
  title: string;
  lottieUrl: string;
}

/**
 * @name AnimationLoader component
 * @description - Renders animation loader with title
 * @interface AnimationLoaderProps - interface for AnimationLoader component
 * @param title - title to be displayed
 * @param lottieUrl - lottie animation url
 * @componentsContained - Lottie from react-lottie-player
 */
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
