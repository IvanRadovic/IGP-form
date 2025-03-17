import { FC } from "react";

interface NavbarBrandProps {
  logo: string;
}

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
