import React from "react";
import { useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./navbar.css";
import Auth from "../../utils/auth";
import useAuth from "../../utils/Hooks/useAuth";

const Link = ({ to, routeName }) => (
  <li>
    <NavLink to={to} className="link" activeClassName="active" exact>
      {routeName}
    </NavLink>
  </li>
);
const Navbar = ({ toggle }) => {
  const [client, logout, data] = useAuth();
  return (
    <div className="navContainer">
      {data && <div className="userName">Hi {data.authUser.username}</div>}
      <div id="mobileicon">
        <Button icon="content" onClick={toggle} />
      </div>
      <ul className="linkContainer">
        <Link to="/" routeName="User Guide" />
        <Link to="/today" routeName="Today Tasks" />
        <Link to="/upcoming" routeName="Future Tasks" />
        <Link to="/report" routeName="Report" />
        {Auth.loggedIn() ? (
          <Button
            color="olive"
            onClick={logout}
            style={{ margin: "-5px 20px" }}
          >
            Logout
          </Button>
        ) : (
          <Link to="/auth" routeName="Sign In" />
        )}
      </ul>
    </div>
  );
};

export default Navbar;
