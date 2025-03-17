import React from "react";
import LoginHeader from "../loadingHeader/LoadingHeader.tsx";
import MultiStepForm from "../../../../../components/layouts/multiStep/MultiStepForm.tsx";

interface LoginContainerProps {
  setLoading: (loading: boolean) => void;
  background: string;
}

const LoginContainer: React.FC<LoginContainerProps> = ({
  setLoading,
  background,
}) => {
  return (
    <div
      className="loginContainer"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="login-content">
        <LoginHeader />
        <MultiStepForm setLoading={setLoading} />
      </div>
    </div>
  );
};

export default LoginContainer;
