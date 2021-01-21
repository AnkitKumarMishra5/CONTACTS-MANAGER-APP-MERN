import { useState, useEffect } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";

const NewContact = (props) => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    mobile: "",
    favourite: false,
  });
  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [mobileError, setMobileError] = useState(true);

  useEffect(() => {
    setNewContact(props.editContact);
    console.log(props.editContact);
  }, [props.editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onHide();
    props.props.updateContacts(newContact, props.editContact._id);
    setNewContact({
      name: "",
      email: "",
      mobile: "",
      favourite: false,
    })
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {!props.editContact ? 'Add New Contact' : `Edit Contact - ${newContact.name}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              placeholder="Name"
              value={newContact.name}
              onChange={(e) =>
                e.target.value !== '' ?
                (setNewContact({ ...newContact, name: e.target.value }), setNameError(false)):
                setNameError(true)
              }
            />
            {nameError &&
            <Form.Text className="text-muted">
              Invalid Name! Contact won't be saved!
            </Form.Text>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                style={{width: "100%"}}
                required
                name="email"
                type="email"
                placeholder="Email"
                value={newContact.email}
                onChange={(e) =>
                  /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(e.target.value) ? 
                  (setNewContact({ ...newContact, email: e.target.value }), setEmailError(false)): setEmailError(true)
                }
              />
              {emailError &&
              <Form.Text className="text-muted" >
                Invalid Email! Contact won't be saved!
              </Form.Text>}
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              required
              name="mobile"
              type="text"
              placeholder="Mobile"
              value={newContact.mobile}
              onChange={(e) =>
                /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(e.target.value) ?
                (setNewContact({ ...newContact, mobile: e.target.value }), setMobileError(false)) : setMobileError(true)
              }
            />
            {mobileError &&
            <Form.Text className="text-muted">
              Invalid Mobile No.! Contact won't be saved!
            </Form.Text>}
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Set as Favourite"
              checked={newContact.favourite}
              onInput={(e) =>
                setNewContact({
                  ...newContact,
                  favourite: !newContact.favourite,
                })
              }
            />
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
export default NewContact;
