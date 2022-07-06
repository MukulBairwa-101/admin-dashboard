import React, { useEffect, useState } from "react";
import { useAppContext } from "../../Context/AppContext";

import { BiNotification, CgSearch } from "../../data/data";

const Header = () => {
  const { collapsed, isLoggedIn } = useAppContext();
  const [loggedUser, setLoggedUser] = useState({});
  useEffect(() => {
    if (isLoggedIn.status) {
      setLoggedUser(JSON.parse(localStorage.getItem("ADMIN_USER")));
    }
  }, []);

  console.log(loggedUser);

  return (
    <div
      className={`flex align-items justify-content  header-container ${
        collapsed ? "header-container-collapsed " : "header-container-open "
      }} `}
    >
      <div className="">
        <span>Admin panel</span>
      </div>

      <div className="header-action-container flex align-items ">
        <div>
          <input type="search" className="input-search" />
          <CgSearch />
        </div>

        <BiNotification className="pointer" />
        <span className="pointer">{loggedUser.name}</span>

        <img
          src={loggedUser ? loggedUser.profileSrc : "/images/sample.jpg"}
          alt="profile"
          className="profile pointer"
        />
      </div>
    </div>
  );
};

export default Header;
