import { FC } from "react";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { FaUserAlt } from "react-icons/fa";

/*========== IMAGES ============*/
import logo from "../../../assets/images/logo/logo.png";
import home from "../../../assets/images/gamesLogo/casino (1).png";
import bonus from "../../../assets/images/gamesLogo/bonus.png";
import trophy from "../../../assets/images/gamesLogo/trophy.png";
import liveCasino from "../../../assets/images/gamesLogo/liveCasino.png";

/*========== SERVICES ============*/
import { cookieManager } from "../../../utils/cookie.ts";

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
        <BootstrapNavbar.Brand href="#" className="navbar-brand">
          <img
            src={logo}
            className="w-100 h-100"
            style={{ borderRadius: "50px" }}
          />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="navbar-nav" />

        <BootstrapNavbar.Collapse id="navbar-nav" style={{ height: "4.0rem" }}>
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/">
              <img src={home} /> Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="/live-casino">
              <img src={liveCasino} />
              Live Casino
            </Nav.Link>
            <Nav.Link className="nav-link" href="/promotions">
              <img src={bonus} />
              Promotions
            </Nav.Link>
            <Nav.Link className="nav-link" href="/tournaments">
              <img src={trophy} />
              Tournaments
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <div className=" d-flex justify-center align-items-center gap-2 text-white me-3 userContainer">
              <FaUserAlt size={19} />
              {username}
            </div>
            <button
              className="btn btn-danger btn-logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
