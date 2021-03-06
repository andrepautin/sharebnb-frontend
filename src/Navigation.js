import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
//import "./Navigation.css";

/** Navigation: Renders navbar with different navlinks
 * if user logged in/not logged in
 * 
 * Props: 
 *  - currentUser {username, firstName, lastName, email,... }
 * 
 * State: 
 *  - none
 * 
 * App -> Navigation
 */

function Navigation({ currentUser, handleLogout }) {

  console.log("Navigation currentUser", currentUser)

  function logout(evt) {
    evt.preventDefault();
    handleLogout();
  }

  //returns navigation links depending on whether the currentUser state is populated
  function getNavLinks(currentUser) {

    if (currentUser === null || currentUser === undefined) {

      return (<>
        <Nav.Item as="li">
          <NavLink className="nav-link" exact to="/login">
            Login
            </NavLink>
        </Nav.Item>

        <Nav.Item as="li">
          <NavLink className="nav-link" exact to="/signup">
            Sign Up
            </NavLink>
        </Nav.Item></>
      );

    } else {

      return (
        <>
          <Nav.Item as="li">
            <NavLink className="nav-link" exact to="/listings/new">
              Post a Listing
              </NavLink>
          </Nav.Item>

          <Nav.Item as="li">
            <NavLink className="nav-link" exact to="/profile">
              Profile
              </NavLink>
          </Nav.Item>

          <Nav.Item as="li">
            <NavLink className="nav-link" exact to="/messaging">
              Messaging
              </NavLink>
          </Nav.Item>

          <Nav.Item as="li">
            <NavLink className="nav-link" onClick={logout} to="/">
              Log Out ({currentUser.username})
              </NavLink>
          </Nav.Item></>
      );

    }
  }

  return (
    <Nav as="ul" variant="tabs" className="Navigation Nav justify-content-center">
      <Nav.Item as="li">
        <NavLink className="nav-link" exact to="/">
          ShareBnB
          </NavLink>
        <NavLink className="nav-link" exact to="/listings">
          Listings
          </NavLink>
      </Nav.Item>
      {getNavLinks(currentUser)}
    </Nav>
  );
}

export default Navigation;