import { useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  const [menu, setMenu] = useState("home");

  // function to hundle click in home page

  //   const handleClickHome = () => {
  //     setMenu("Home");
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   };
  return (
    <div className="navbar" id="header-page">
      <div className="divlogo">
        <img src={assets.logoloomina} alt="loomina" />
      </div>
      <div className="menu-section">
        <ul className="navbar-menu">
          Home
          <a
            href=""
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            SHOP
          </a>
          <a
            href=""
            onClick={() => setMenu("Mobile-App")}
            className={menu === "Mobile-App" ? "active" : ""}
          >
            OUR STORY
          </a>
          <a
            href=""
            onClick={() => setMenu("Contact-us")}
            className={menu === "Contact-us" ? "active" : ""}
          >
            SERVICES
          </a>
          <a
            href=""
            onClick={() => setMenu("Contact-us")}
            className={menu === "Contact-us" ? "active" : ""}
          >
            BLOG
          </a>
          <a
            href=" "
            onClick={() => setMenu("Contact-us")}
            className={menu === "Contact-us" ? "active" : ""}
          >
            GUIDES
          </a>
          <a
            href=" "
            onClick={() => setMenu("Contact-us")}
            className={menu === "Contact-us" ? "active" : ""}
          >
            CONTACTS
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
