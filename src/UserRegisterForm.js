import { useHistory } from "react-router";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

/** RegisterUserForm
 *
 * Props:
 *  - signup()
 *
 * State:
 *  - formData
 *  - formError
 *
 * Routes -> SignupForm
 */
function UserRegisterForm({ signup }) {
  let initialState = { username: "", password: "", firstName: "", lastName: "", email:"", phone: ""};
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
    let file = evt.target[6].files[0];
    try {
      await signup(formData, file);
      setFormData(initialState);
      history.push("/");
    } catch (err) {
      console.log("ERR--->", err);
      setFormError(err.message);
    };
  }

  return (
    <div className="registerUserForm col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h3>Sign Up</h3>
      <Card>
        <Card.Body>
          {formError && <Alert variant="danger">{formError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="registerUserFormUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="registerUserFormPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="registerUserFormFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="registerUserFormLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="registerUserFormEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="registerUserFormPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="registerUserFormImage">
              <Form.Label>Profile Image</Form.Label>
              <Form.Control type="file"
                placeholder="Upload"
                name="image"
                onChange={handleChange} />
            </Form.Group>
            <Button className="registerUserForm-button"
              variant="primary"
              type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default UserRegisterForm;

