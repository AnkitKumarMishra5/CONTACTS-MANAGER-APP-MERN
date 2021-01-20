import {useState} from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
// import './Contacts.css';

const Contact = (props) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    mobile: "",
    favourite: false
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              placeholder="Name"
              value={newUser.user}
              onInput={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                aria-describedby="inputGroupPrepend"
                required
                name="email"
                type="email"
                placeholder="Email"
                value={newUser.email}
                onInput={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              required
              name="mobile"
              type="text"
              placeholder="Mobile"
              value={newUser.mobile}
              onInput={(e) =>
                setNewUser({ ...newUser, mobile: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Set as Favourite" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default Contact;
