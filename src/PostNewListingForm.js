import { useHistory } from "react-router";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import ShareBnbApi from "./api";

/** PostNewListingForm component
 *
 * Props:
 * - currentUser
 *
 * State:
 *  - formData
 *  - formError
 *
 * Routes -> SignupForm
 */
function PostNewListingForm({ currentUser }) {
  let initialState = { title: "new list title", description: "new list desc", price: "$1"};
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState(null);
  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(`event target in handleSubmit`, evt.target)
    let files = evt.target[3].files;
    console.log("FILES FROM POST LISTING--->", files);
    try {
      // await signup(formData, file);
      setFormData(initialState);
      // history.push("/");
    } catch (err) {
      console.log("ERR--->", err);
      setFormError(err.message);
    };
  }

  return (
    <div className="postNewListingForm col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h3>Post a new Listing!</h3>
      <Card>
        <Card.Body>
          {formError && <Alert variant="danger">{formError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="postNewListingFormtitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text"
                placeholder="title"
                name="title"
                value={formData.title}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="postNewListingFormdescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text"
                placeholder="desciption"
                name="description"
                value={formData.description}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="postNewListingFormprice">
              <Form.Label>Price per night</Form.Label>
              <Form.Control type="text"
                placeholder="price per night"
                name="price"
                value={formData.price}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="postNewListingFormImage">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control type="file"
                placeholder="Upload"
                name="image"
                onChange={handleChange}
                multiple/>
            </Form.Group>
            <Button className="postNewListingForm-button"
              variant="primary"
              type="submit">
              Post Listing!
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default PostNewListingForm;

