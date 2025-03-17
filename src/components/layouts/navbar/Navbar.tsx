import { FC } from "react";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
/*========== IMAGES ============*/
import logo from "../../../assets/images/logo/logo.png";
/*========== SERVICES ============*/
import { cookieManager } from "../../../utils/cookie.ts";

/*========== COMPONENTS ============*/
import UserSection from "./components/UserSection.tsx";
import NavLinks from "./components/NavLinks.tsx";
import NavbarBrand from "./components/NavBrand.tsx";

const Navbar: FC = () => {
  const username = cookieManager.get("username");

  const handleLogout = () => {
    cookieManager.delete("authToken");
  };

  return (
    <BootstrapNavbar
      expand="lg"
      sticky="top"
      style={{ height: "80px", background: "#361243" }}
    >
      <div className="container-fluid navbarContainer">
        <NavbarBrand logo={logo} />
        <BootstrapNavbar.Collapse id="navbar-nav" style={{ height: "4.0rem" }}>
          <NavLinks />
          <UserSection handleLogout={handleLogout} username={username} />
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
