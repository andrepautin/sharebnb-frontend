import { useEffect, useState } from "react";
import ShareBnbApi from "./api";
import ListingCard from "./ListingCard";

/** ListingsCardList component
 * 
 * State:
 * - listings
 * 
 * (Routes, PrivateRoutes) -> ListingCardsList -> ListingCard
 */
function ListingsCardList() {
  const [listings, setListings] = useState([]);

  useEffect(function getListingsOnMount() {
    async function getListingsFromApi() {
      let response = await ShareBnbApi.getListings();
      setListings(response);
    }
    getListingsFromApi();
  }, []);
  if (listings.length < 1) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div>
      {listings.length > 0 && listings.map(listing => <ListingCard key={listing.id} listing={listing}/>)}
    </div>
  )
}

export default ListingsCardList;