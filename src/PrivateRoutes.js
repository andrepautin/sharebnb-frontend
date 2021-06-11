import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage";
import ListingsCardList from "./ListingsCardList";
import ListingDetail from "./ListingDetail";
import PostNewListingForm from "./PostNewListingForm";


/** Private Routes
 * 
 * Props: 
 *  - currentUser {username, firstName, lastName, email,...}
 * 
 * State:
 *  - none
 * 
 * App -> PrivateRoutes -> {
 *    Homepage, 
 *    ListingsCardList, 
 *    ListingDetail,
 *    PostNewListingForm,
 *    Logout 
 *    ProfileForm 
 *  }
 */

function PrivateRoutes({ currentUser }) {

  console.log("PrivateRoutes currentUser", currentUser);

  return (
    <Switch>

      <Route exact path="/">
        <Homepage currentUser={currentUser} />
      </Route>

      <Route exact path="/listings">
        <ListingsCardList/>
      </Route>

      <Route exact path="/listings/new">
        <PostNewListingForm currentUser={currentUser}/>
      </Route>

      <Route exact path="/listings/:id">
        <ListingDetail/>
      </Route>

      <Route exact path="/profile">
        <>PROFILE</>
      </Route>

      <Route exact path="/messaging">
        <>Messaging</>
      </Route>

      <Redirect to="/" />

    </Switch>
  );
}

export default PrivateRoutes;