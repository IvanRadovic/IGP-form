import { FC } from "react";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from "react-bootstrap";
import {
  FaDice,
  FaGift,
  FaCrown,
  FaHeadset,
  FaCreditCard,
  FaGamepad,
  FaHome,
  FaRegUserCircle,
  FaUserAlt,
} from "react-icons/fa";
import { TbPlayCardStar } from "react-icons/tb";

/*========== COMPONENTS ============*/
import logo from "../../../assets/images/logo/logo.png";

/*======= INTERFACES ===========*/
import { CategoryGames } from "../../../api/services/games/interface.ts";

/*======= API SERVICES ===========*/
import { getCategoryGames } from "../../../api/services/games/gamesApiService.ts";

/*========== SERVICES ============*/
import { cookieManager } from "../../../utils/cookie.ts";

/*======= HOOKS ===========*/
import { useFetchData } from "../../../hooks/useFetchData.ts";

const Navbar: FC = () => {
  const handleLogout = () => {
    cookieManager.delete("authToken");
  };
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

  const availableCategories = categoryGames
    ?.filter(
      (category) =>
        category.publishing?.status === "published" &&
        ["category", "subCategory", "tags", "type", "extraCategories"].includes(
          category.type,
        ),
    )
    .map((category) => ({
      slug: category.slug,
      title:
        category.type === "extraCategories"
          ? category.multilingual.find((m) => m.language === "en")?.title ||
            category.slug
          : category.title,
      icon: categoryIcons[category.slug] || <FaGamepad />,
    }));

  return (
    <BootstrapNavbar
      expand="lg"
      sticky="top"
      style={{ height: "100px", background: "#361243" }}
    >
      <div className="container-fluid">
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
              <FaHome size={22} color={"#e4dfe0"} /> Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="/live-casino">
              <TbPlayCardStar size={22} color={"#db193e"} />
              Live Casino
            </Nav.Link>
            <Nav.Link className="nav-link" href="/promotions">
              🎁 Promotions
            </Nav.Link>
            <Nav.Link className="nav-link" href="/tournaments">
              🏆 Tournaments
            </Nav.Link>

            {availableCategories && availableCategories.length > 0 && (
              <NavDropdown title="Categories" id="category-dropdown">
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                  {" "}
                  {/* Scroll */}
                  {availableCategories.map((category) => (
                    <NavDropdown.Item
                      key={category.slug}
                      href={`/${category.slug}`}
                      className="d-flex align-items-center jusify-content-center gap-2"
                    >
                      {category.icon} {category.title}
                    </NavDropdown.Item>
                  ))}
                </div>
              </NavDropdown>
            )}
            <NavDropdown title="More" id="more-dropdown">
              <NavDropdown.Item href="/vip">
                <FaCrown className="me-2" /> VIP
              </NavDropdown.Item>
              <NavDropdown.Item href="/payments">
                <FaCreditCard className="me-2" /> Payment Methods
              </NavDropdown.Item>
              <NavDropdown.Item href="/help">
                <FaHeadset className="me-2" /> Help Center
              </NavDropdown.Item>
            </NavDropdown>
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
