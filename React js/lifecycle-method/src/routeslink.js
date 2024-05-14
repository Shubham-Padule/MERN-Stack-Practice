//RoutLink.js
import React from "react";
import { NavLink } from "react-router-dom";
function RoutLink() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Login</NavLink>
        </li>
        <li>
          <NavLink to="/">SignUp</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default RoutLink;
