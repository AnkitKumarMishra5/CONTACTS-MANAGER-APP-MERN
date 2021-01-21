import { useState, useEffect } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";

const NewContact = (props) => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    mobile: "",
    favourite: false,
  });

  useEffect(() => {
    setNewContact(props.editContact);
    console.log(props.editContact);
  }, [props.editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.props.updateContacts(newContact, props.editContact._id);
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
          Add New Contact
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
              onInput={(e) =>
                setNewContact({ ...newContact, name: e.target.value })
              }
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
                value={newContact.email}
                onInput={(e) =>
                  setNewContact({ ...newContact, email: e.target.value })
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
              value={newContact.mobile}
              onInput={(e) =>
                setNewContact({ ...newContact, mobile: e.target.value })
              }
            />
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
          <Button variant="primary" type="submit" onClick={props.onHide}>
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
