import React, { FC } from "react";
import background from "../../../../assets/images/background/monkey2.webp";

/*========== COMPONENTS ===============*/
import MultiStepForm from "../../../../components/layouts/multiStep/MultiStepForm.tsx";

interface LoginScreenProps {
  setLoading: (loading: boolean) => void;
}

const LoginScreen: FC<LoginScreenProps> = ({ setLoading }) => {
  return (
    <div
      className="loginContainer"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="p-4 loginForm">
        <h1 className="text-white display-1 fw-bold text-shadow mb-3">
          Monkey Business Just Got Wilder
        </h1>
        <p className="text-white-50 fs-2 text-shadow fw-light">
          Join the primate party where slots are wilder than a rainforest
          storm—bet, spin, and snag vine-swinging jackpots!
        </p>
        <div>
          <MultiStepForm setLoading={setLoading} />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
