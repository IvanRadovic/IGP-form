import { FC, useState } from "react";
import { Navbar as BootstrapNavbar } from "react-bootstrap";

/*========== IMAGES ============*/
import logo from "../../../assets/images/logo/logo.png";
/*========== SERVICES ============*/
import { cookieManager } from "../../../utils/cookie.ts";

/*========== COMPONENTS ============*/
import UserSection from "./components/UserSection.tsx";
import NavLinks from "./components/NavLinks.tsx";
import NavbarBrand from "./components/NavBrand.tsx";

/**
 * @name Navbar component
 * @description - Navbar component is used to render the navbar in the application layout
 *
 */
const Navbar: FC = () => {
  const [expanded, setExpanded] = useState(false);
  const username = cookieManager.get("username");

  const handleLogout = () => {
    cookieManager.delete("authToken");
  };

  return (
    <BootstrapNavbar
      expand="lg"
      sticky="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{ height: "80px", background: "#361243" }}
    >
      <div className="container-fluid navbarContainer">
        <NavbarBrand logo={logo} />

        <BootstrapNavbar.Toggle
          aria-controls="navbar-nav"
          className="custom-toggler"
        />

        <BootstrapNavbar.Collapse
          id="navbar-nav"
          className={`navbar-collapse ${expanded ? "show" : ""}`}
        >
          <NavLinks />
          <UserSection handleLogout={handleLogout} username={username} />
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
