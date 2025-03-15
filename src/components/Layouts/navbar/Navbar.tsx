import { FC } from "react";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { FaDice, FaGift, FaCrown, FaGamepad, FaUserAlt } from "react-icons/fa";

/*========== IMAGES ============*/
import logo from "../../../assets/images/logo/logo.png";
import home from "../../../assets/images/gamesLogo/casino (1).png";
import bonus from "../../../assets/images/gamesLogo/bonus.png";
import trophy from "../../../assets/images/gamesLogo/trophy.png";
import liveCasino from "../../../assets/images/gamesLogo/liveCasino.png";

/*======= INTERFACES ===========*/
import { CategoryGames } from "../../../api/services/games/interface.ts";

/*======= API SERVICES ===========*/
import { getCategoryGames } from "../../../api/services/games/gamesApiService.ts";

/*========== SERVICES ============*/
import { cookieManager } from "../../../utils/cookie.ts";

/*======= HOOKS ===========*/
import { useFetchData } from "../../../hooks/useFetchData.ts";

const Navbar: FC = () => {
  const {
    data: categoryGames,
    loading: loadingGames,
    error: errorGames,
  } = useFetchData<CategoryGames[]>(getCategoryGames);
  const username = cookieManager.get("username");

  const categoryIcons: Record<string, JSX.Element> = {
    jackpot: <FaCrown />,
    megaways: <FaDice />,
    "bonus-buys": <FaGift />,
    popular: <FaCrown />,
    new: <FaGift />,
    xmas: <FaDice />,
    live: <FaDice />,
    "table-games": <FaDice />,
  };

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

        <BootstrapNavbar.Collapse id="navbar-nav">
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

            {/*{availableCategories && availableCategories.length > 0 && (*/}
            {/*  <NavDropdown title="Categories" id="category-dropdown">*/}
            {/*    <div style={{ maxHeight: "300px", overflowY: "auto" }}>*/}
            {/*      {" "}*/}
            {/*      /!* Scroll *!/*/}
            {/*      {availableCategories.map((category) => (*/}
            {/*        <NavDropdown.Item*/}
            {/*          key={category.slug}*/}
            {/*          href={`/${category.slug}`}*/}
            {/*          className="d-flex align-items-center jusify-content-center gap-2"*/}
            {/*        >*/}
            {/*          {category.icon} {category.title}*/}
            {/*        </NavDropdown.Item>*/}
            {/*      ))}*/}
            {/*    </div>*/}
            {/*  </NavDropdown>*/}
            {/*)}*/}
          </Nav>

          <div className="d-flex align-items-center">
            <div className=" d-flex justify-center align-items-center gap-2 text-white me-3 userContainer">
              <FaUserAlt size={19} />
              {username}
            </div>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
