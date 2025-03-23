import React, { useState } from "react";

/*========== COMPONENTS ===============*/
import LoadingScreen from "./components/loadingScreen/LoadingScreen.tsx";
import LoginScreen from "./components/loginScree/LoginScreen.tsx";

/**
 * @page LoginPage - Login Page component to render the login page of the application
 * @containedComponents - LoadingScreen, LoginScreen
 * @hooks - useState
 * @returns - JSX Element
 *
 */
const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <LoginScreen setLoading={setLoading} />
      )}
    </div>
  );
};

export default LoginPage;
