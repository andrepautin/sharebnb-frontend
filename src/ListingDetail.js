import { useParams } from "react-router";
import {useState, useEffect} from "react";
import ShareBnbApi from "./api";

/** ListingDetail component
 * 
 * Routes -> ListingDetail
 */

function ListingDetail() {
  const { id } = useParams();
  const [listing, setListing] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(
    function getListingOnMount() {
      async function getListingFromApi() {
        try {
          let listingRes = await ShareBnbApi.getListing(id);
          setListing(listingRes);
          setIsLoading(false);
        } catch (err) {
          setIsError(true);
          setIsLoading(false);
        }
      }
      getListingFromApi();
    },
    [id]
  );
  return (
    <div>
      <div>
        <h1>{listing.title}</h1>
        <p>{listing.description}</p>
      </div>
    </div>
  )
}

export default ListingDetail;