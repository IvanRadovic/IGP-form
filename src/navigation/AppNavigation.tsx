import { BrowserRouter, Route, Routes } from "react-router-dom";

/*=========== PAGES =============*/
import HomePage from "../pages/HomePage/HomePage.tsx";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigation;
