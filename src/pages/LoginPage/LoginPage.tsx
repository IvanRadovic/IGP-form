import React, { useState } from "react";

/*========== COMPONENTS ===============*/
import LoadingScreen from "./components/loadingScreen/LoadingScreen.tsx";
import LoginScreen from "./components/loginScree/LoginScreen.tsx";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        // <LoginScreen setLoading={setLoading} />
        <LoadingScreen setLoading={setLoading} />
      )}
    </div>
  );
};

export default LoginPage;
