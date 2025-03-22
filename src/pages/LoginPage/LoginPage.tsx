import React, { useState } from "react";

/*========== COMPONENTS ===============*/
import LoadingScreen from "./components/loadingScreen/LoadingScreen.tsx";
import LoginScreen from "./components/loginScree/LoginScreen.tsx";

/**
 *@name LoginPage - main page for login
 *@description - Renders login screen with background image and multi-step form, also handles loading screen on form submission
 *@components - LoadingScreen(loader), LoginScreen(login form)
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
