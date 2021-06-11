import { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Routes from "./Routes";
import PrivateRoutes from "./PrivateRoutes"
import ShareBnbApi from "./api";
import jwt_decode from "jwt-decode";
import "bootstrap/dist/css/bootstrap.css";
//import './App.css';


/** App
 * 
 * Props:
 *  - none
 * 
 * State:
 *  - currentUser {username, firstName, lastName, email,...}
 *  - hasLocalToken (boolean)
 *  - isLoadingUser (boolean)
 * 
 * App -> { Navigation, Routes, PrivateRoutes }
 */

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [hasLocalToken, setHasLocalToken] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  console.log("App-Start hasLocalToken + currentUser + isLoadingUser ", hasLocalToken, currentUser, isLoadingUser);

  /** set current user and update isLoadingUser if there is a local token */
  useEffect(function changeUserFromToken() {
    let localToken = localStorage.getItem("item");
    console.log("App changeUserFromToken localToken", localToken);

    if (localToken) {
      setHasLocalToken(true);
      ShareBnbApi.token = localToken;
    }

    async function userAPICall() {
      try {

        console.log("App userAPICall ShareBnbApi.token", ShareBnbApi.token);

        let { username } = jwt_decode(ShareBnbApi.token);
        setIsLoadingUser(true);
        let response = await ShareBnbApi.getUser(username);
        setCurrentUser(response);
        //re-render here
        setIsLoadingUser(false);

      } catch (err) {

        console.log("App userAPICall err", err);

        setCurrentUser(null)
        setIsLoadingUser(false);

      }
    };

    if (hasLocalToken) {
      userAPICall();
    }

  }, [hasLocalToken]);

  /** Gets auth token from backend on login, sets it on
   * localStorage and updates hasLocalToken */
  async function login(formData) {
    let tokenRes = await ShareBnbApi.login(formData);
    setHasLocalToken(true);
    localStorage.setItem("item", tokenRes);
  }

  /** Gets auth token from backend on login, sets it on 
   * localStorage & updates hasLocalToken */
  async function signup(formData, file) {

    let tokenRes = await ShareBnbApi.register(formData, file);
    console.log(`APP signup tokenRes -->`, tokenRes)
    localStorage.setItem("item", tokenRes);
    ShareBnbApi.token = (tokenRes);
    console.log(`shareBnBApi token after signup`, ShareBnbApi.token)
    setHasLocalToken(true);

  }

  //TODO - function for editing user profile

  /** Clears local storage and logs user out */
  async function handleLogout() {

    localStorage.clear();
    setCurrentUser(null);
    setHasLocalToken(false);

  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation currentUser={currentUser} handleLogout={handleLogout}/>
        {currentUser !== null
          ? <PrivateRoutes currentUser={currentUser} />
          : <Routes login={login} signup={signup} currentUser={currentUser} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
