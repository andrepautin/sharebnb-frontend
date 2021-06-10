import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

/** ListingCard component
 * 
 * Props:
 * - listing {id, host_username, title, description, price}
 */

function ListingCard({listing}) {
  const {id, host_username, title, description, price} = listing;
  return (
    <Link to={`/listings/${id}`}>
      <Card>
      <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>"{description}"</Card.Text>
          <p>Hosted by: {host_username}</p>
          <p>Price per night: ${price}</p>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default ListingCard;