import { FC } from "react";

/*========== COMPONENTS ============*/
import logo from "../../../assets/images/logo/logo.png";

/*======= INTERFACES ===========*/
import { CategoryGames, Game } from "../../../api/services/games/interface.ts";

/*======= API SERVICES ===========*/
import { getCategoryGames } from "../../../api/services/games/gamesApiService.ts";

/*========== SERVICES ============*/
import { cookieManager } from "../../../services/cookie.ts";

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

  const filteredCategoryGames = categoryGames?.filter(
    (category) => category.publishing !== undefined,
  );

  return (
    <nav
      className="navbar p-0"
      style={{ height: "100px", background: "#361243" }}
    >
      <div className="navbar-brand navbar-subcontainer">
        <img
          src={logo}
          className="w-100 h-100"
          style={{ borderRadius: "50px" }}
        />
      </div>
      <div className="navbar-menu">
        <span className="text-white">{username}</span>
        <button
          className="btn btn-logout logout-button text-white"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
