import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import UserLoginForm from "./UserLoginForm";
import UserRegisterForm from "./UserRegisterForm";

/** Routes
 * 
 * Props: 
 *  - login ()
 *  - signup ()
 *  - currentUser {username, firstName, lastName, email,...}
 * 
 * State
 *  - none
 * 
 * App -> Routes -> {
 *    Homepage, 
 *    LoginForm,
 *    SignupForm,
 *  }
 */

function Routes({ login, signup, currentUser }) {

  console.log("Routes currentUser", currentUser);

  return (
    <Switch>

      <Route exact path="/">
        <Homepage currentUser={currentUser} />
      </Route>

      <Route exact path="/listings">
        <>LISTINGS</>
      </Route>

      <Route path="/listings/:id">
        <>LISTINGS DETAILS</>
      </Route>

      <Route exact path="/login">
        <UserLoginForm login={login} />
      </Route>

      <Route exact path="/signup">
        <UserRegisterForm signup={signup} />
      </Route>

      <Redirect to="/login" />

    </Switch>
  );
}

export default Routes;
