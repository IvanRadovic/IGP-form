import { FC } from "react";

/*========== SERVICES ============*/
import { cookieManager } from "../../../services/cookie.ts";

const Navbar: FC = () => {
  const handleLogout = () => {
    cookieManager.delete("authToken");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">MyApp</div>
      <div className="navbar-menu">
        <button className="btn btn-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
