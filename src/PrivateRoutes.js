import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";


/** Private Routes
 * 
 * Props: 
 *  - currentUser {username, firstName, lastName, email,...}
 *  - logout()
 *  - editProfile()
 * 
 * State:
 *  - none
 * 
 * App -> PrivateRoutes -> {
 *    Homepage, 
 *    CompanyDetails, 
 *    CompanyList,
 *    JobList,
 *    Logout 
 *    ProfileForm 
 *  }
 */

function PrivateRoutes({ logout, currentUser }) {

  console.log("PrivateRoutes currentUser", currentUser);

  return (
    <Switch>

      <Route exact path="/">
        <Homepage currentUser={currentUser} />
      </Route>

      <Route exact path="/listings">
        <>ListingsList</>
      </Route>

      <Route exact path="/listings/id">
        <>LISTINGS DETAILS</>
      </Route>

      <Route exact path="/profile">
        <>PROFILE</>
      </Route>

      <Route exact path="/messaging">
        <>Messaging</>
      </Route>

      <Route exact path="/logout">
        <>logout</>
      </Route>

      <Redirect to="/" />

    </Switch>
  );
}

export default PrivateRoutes;