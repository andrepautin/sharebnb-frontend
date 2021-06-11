import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import ListingsCardList from "./ListingsCardList";
import ListingDetail from "./ListingDetail";
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
 *    UserLoginForm,
 *    UserRegisterForm,
 *    ListingCardList,
 *    ListingDetail
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
        <ListingsCardList/>
      </Route>

      <Route path="/listings/:id">
        <ListingDetail/>
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
