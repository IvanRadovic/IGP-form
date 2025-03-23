import React, { FC } from "react";
import LoginAnimation from "../animationLogin/AnimationLogin.tsx";

interface LoadingScreenProps {
  setLoading: (loading: boolean) => void;
}

/**
 * @component LoadingScreen component
 * @description - Renders loading screen with login animation and text
 * @containedComponents - LoginAnimation (lottie animation)
 * @param setLoading - function to be called on animation finish
 */
const LoadingScreen: FC<LoadingScreenProps> = ({ setLoading }) => {
  return (
    <div
      className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center text-white"
      style={{
        background:
          "linear-gradient(180deg, rgb(54, 18, 67) 30%, rgb(19, 6, 25) 100%)",
      }}
    >
      <LoginAnimation onFinish={() => setLoading(false)} />
      <h2 className="mt-3 fs-1 fw-bold text-white text-shadow">
        Your adventure is about to begin...
      </h2>
      <p className="fs-3 mt-2 opacity-75 mx-auto" style={{ maxWidth: "600px" }}>
        Get ready to enter a world of high-stakes excitement, thrilling spins,
        and untamed jackpots. The jungle of fortune awaits you.
      </p>
    </div>
  );
};

export default LoadingScreen;
