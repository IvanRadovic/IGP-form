import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

/*=========== PAGES =============*/
import HomePage from "../pages/HomePage/HomePage.tsx";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";

/*========== COMPONENTS ============*/
import Navbar from "../components/layouts/navbar/Navbar.tsx";

const AppRoutes = () => {
  const [token] = useCookies(["authToken"]);
  const [isTokenInCookie, setIsTokenInCookie] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Dodaj loading state

  useEffect(() => {
    setIsTokenInCookie(!!token.authToken);
    setIsLoading(false); // Kada završi proveru, postavi loading na false
  }, [token.authToken]);

  if (isLoading) {
    return <div>Loading...</div>; // Prikazuje loader dok se ne proveri token
  }

  return (
    <BrowserRouter>
      {isTokenInCookie ? (
        <>
          <Navbar />
          <Routes>
            <Route path="*" element={<HomePage />} />
            {/*<Route path="/home" element={<HomePage />} />*/}
          </Routes>
        </>
      ) : (
        <Routes>
          {/*<Route path="*" element={<LoginPage />} />*/}
          <Route path="/" element={<LoginPage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default AppRoutes;
