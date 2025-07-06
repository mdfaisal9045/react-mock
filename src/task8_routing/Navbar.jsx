import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>

          <NavLink to={"/contact"}>
            <li>Contact</li>
          </NavLink>

          <NavLink to={"/events"}>
            <li>Events</li>
          </NavLink>

          <NavLink to={"/courses"}>
            <li>Courses</li>
          </NavLink>

          <NavLink to={"/placements"}>
            <li>Placements</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
