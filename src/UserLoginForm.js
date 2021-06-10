import { useHistory } from "react-router";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import ShareBnbApi from "./api";

/** RegisterUserForm
 *
 * State:
 *  - formData
 *  - formError
 *
 * Routes -> SignupForm
 */
function UserLoginForm({login}) {
  let initialState = { username: "testuser", password: "password" }
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
    try {
      await login(formData)
      history.push("/");
    } catch (err) {
      setFormData(initialState);
      console.log("ERR--->", err);
      setFormError(err.message);
    };
  }

  return (
    <div className="loginUserForm col-md-6 offset-md-3 col-lg-4 offset-lg-4">
      <h3>Sign Up</h3>
      <Card>
        <Card.Body>
          {formError && <Alert variant="danger">{formError}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="loginUserFormUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="loginUserFormPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange} />
            </Form.Group>
            <Button className="loginUserForm-button"
              variant="primary"
              type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
export default UserLoginForm;

