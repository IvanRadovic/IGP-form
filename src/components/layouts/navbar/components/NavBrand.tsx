import { FC } from "react";

interface NavbarBrandProps {
  logo: string;
}

/**
 * @component  NavbarBrand component
 * @description  NavbarBrand component is used to render logo in navbar
 * @param logo - logo image path
 * @interface NavbarBrandProps - interface for NavbarBrand component
 *
 */
const NavbarBrand: FC<NavbarBrandProps> = ({ logo }) => {
  return (
    <a href="#" className="navbar-brand">
      <img
        src={logo}
        className="w-100 h-100"
        style={{ borderRadius: "50px" }}
      />
    </a>
  );
};

export default NavbarBrand;
