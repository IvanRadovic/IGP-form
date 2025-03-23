import { FC } from "react";
import { FaUserAlt } from "react-icons/fa";
import { DefaultButton } from "../../../ui/button/DefaultButton/DefaultButton.tsx";

interface UserSectionProps {
  username: string;
  handleLogout: () => void;
}

/**
 * @name UserSection component
 * @description  UserSection component is used to render user section in navbar
 * @interface UserSectionProps - interface for UserSection component
 * @param username - username of logged in user
 * @param handleLogout - function to be called on logout button click
 * @containedComponents - DefaultButton
 *
 */
const UserSection: FC<UserSectionProps> = ({ username, handleLogout }) => {
  return (
    <div className="d-flex align-items-center">
      <div className="d-flex justify-center align-items-center gap-2 text-white me-3 userContainer">
        <FaUserAlt size={19} />
        {username}
      </div>
      <DefaultButton
        className="btn btn-danger btn-logout"
        onClick={handleLogout}
      >
        Logout
      </DefaultButton>
    </div>
  );
};

export default UserSection;
