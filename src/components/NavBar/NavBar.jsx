import React, { useState } from "react";
import "./NavBar.scss";
import NavLink from "../NavLink/NavLink";
import categories from "../../assets/isons/categories.png"
import centers from "../../assets/isons/centers.png"
import filials from "../../assets/isons/filials.png"
import courses from "../../assets/isons/courses.png"
import logout from "../../assets/isons/logout.png"
import { useLocation } from "react-router-dom";
function NavBar() {
  
  return (
    <div className="nav-bar">
      <div className="logo">
        EDU-INFO
        <hr />
      </div>
      <nav className="nav">
        <NavLink url={categories} path={""} text={"Categories"} />
        <NavLink url={centers} path={"centers"} text={"Centers"} />
        <NavLink url={filials} path={"filials"} text={"Filials"} />
        <NavLink url={courses} path={"courses"} text={"Courses"} />
      </nav>

      <div
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
        className="logout"
      >
        <img width={20} src={logout} alt="logout" />
        <a href="#">CHIQISH</a>
      </div>
    </div>
  );
}

export default NavBar;
