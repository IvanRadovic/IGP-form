import { FC } from "react";
import { Nav } from "react-bootstrap";

/*========== NAVIGATION ITEMS ============*/
import { NavItems } from "./NavItems";

import home from "../../../../assets/images/gamesLogo/casino (1).png";
import bonus from "../../../../assets/images/gamesLogo/bonus.png";
import trophy from "../../../../assets/images/gamesLogo/trophy.png";
import liveCasino from "../../../../assets/images/gamesLogo/liveCasino.png";
import loyal from "../../../../assets/images/gamesLogo/loyalty-card.png";

const images = { home, bonus, trophy, liveCasino, loyal };

/**
 * @component NavLinks component
 * @description - Navigation links for the navbar - renders the navigation links in the navbar
 */
const NavLinks: FC = () => {
  return (
    <Nav className="me-auto">
      {NavItems.map(({ href, src, label }) => (
        <Nav.Link key={href} className="nav-link" href={href}>
          <img src={images[src]} alt={label} /> {label}
        </Nav.Link>
      ))}
    </Nav>
  );
};

export default NavLinks;
