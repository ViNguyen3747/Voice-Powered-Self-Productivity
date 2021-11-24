import React from "react";
import { useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "./navbar.css";
import Auth from "../../utils/auth";
import { Auth_User } from "../../utils/query";

const Link = ({ to, routeName }) => (
  <li>
    <NavLink to={to} className="link" activeClassName="active" exact>
      {routeName}
    </NavLink>
  </li>
);
const Navbar = () => {
  const { client, loading, error, data } = useQuery(Auth_User);
  console.log(data);
  const logout = (e) => {
    e.preventDefault();
    Auth.logout().then(() => client.resetStore());
  };
  return (
    <div className="navContainer">
      {data && <div className="userName">Hi {data.authUser.username}</div>}
      <ul className="linkContainer">
        <Link to="/" routeName="User Guide" />
        <Link to="/today" routeName="Today" />
        <Link to="/upcoming" routeName="Upcoming" />
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
