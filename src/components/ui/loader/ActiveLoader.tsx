import React from "react";
import Lottie from "react-lottie-player";
import animationData from "../../../assets/animations/cards.json";
import { Spinner } from "react-bootstrap";

interface LottieOptions {
  loop: boolean;
  autoplay: boolean;
  animationData: any;
  rendererSettings: {
    preserveAspectRatio: string;
  };
}

interface ActiveLoaderProps {
  title: string;
}

const ActiveLoader: React.FC<ActiveLoaderProps> = ({ title }) => {
  const defaultOptions: LottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Spinner size={40} style={{ color: "white" }} />
      <h3 className="text-white">{title}</h3>
    </div>
  );
};
export default ActiveLoader;
