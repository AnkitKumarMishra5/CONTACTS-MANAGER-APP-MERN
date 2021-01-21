import { useState, useEffect } from "react";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";

const EditContact = (props) => {
  const editContact = props.editContact;

  const [updatedContact, setUpdatedContact] = useState({
    name: editContact.name,
    email: editContact.email,
    mobile: editContact.mobile,
    favourite: editContact.favourite,
  });

  useEffect(() => {
    console.log(updatedContact);
  }, [updatedContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
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
          Update Contact - {updatedContact.name}
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
              value={updatedContact.name}
              onInput={(e) =>
                setUpdatedContact({ ...updatedContact, name: e.target.value })
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
                value={updatedContact.email}
                onInput={(e) =>
                  setUpdatedContact({
                    ...updatedContact,
                    email: e.target.value,
                  })
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
              value={updatedContact.mobile}
              onInput={(e) =>
                setUpdatedContact({ ...updatedContact, mobile: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Set as Favourite"
              checked={updatedContact.favourite}
              onInput={(e) =>
                setUpdatedContact({
                  ...updatedContact,
                  favourite: !updatedContact.favourite,
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
export default EditContact;
