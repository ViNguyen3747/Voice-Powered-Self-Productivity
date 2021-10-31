import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Link = ({ to, routeName }) => (
  <li>
    <NavLink to={to} className="link" activeClassName="active" exact>
      {routeName}
    </NavLink>
  </li>
);
const index = () => {
  return (
    <div className="navContainer">
      <ul className="linkContainer">
        <Link to="/" routeName="User Guide" />
        <Link to="/today" routeName="Today" />
        <Link to="/upcoming" routeName="Upcoming" />
        <Link to="/report" routeName="Report" />
        <Link to="/auth" routeName="Sign In" />
      </ul>
    </div>
  );
};

export default index;
