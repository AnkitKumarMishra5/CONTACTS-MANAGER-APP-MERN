import { useState } from "react";

import { Row, Col, Button, Accordion, Spinner } from "react-bootstrap";

import "./Contacts.css";

import NewContact from "../NewContact/NewContact";
import Contact from "./Contact/Contact";

const Contacts = (props) => {
  const contacts = props.contacts;

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <h2>My Contacts</h2>
      <Row className="justify-content-center">
        <Col md={6} xs={12} style={{ display: "flex" }}>
          <div className="mr-auto">
            <Button className="nav-btn-1" size="sm">
              All Contacts
            </Button>
            <Button className="nav-btn-1" size="sm">
              Favourites
            </Button>
          </div>
          <div>
            <Button
              className="nav-btn-2"
              size="sm"
              onClick={() => setModalShow(true)}
            >
              New Contact
            </Button>
          </div>
          <NewContact
          show={modalShow}
          onHide={() => setModalShow(false)}
          props={props}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} xs={12} className="contacts-section">
          <Accordion>
            {contacts.length ? (
              contacts.map((contact) => (
                  <div key={contact._id}>
                      <Contact contact={contact}/>
                  </div>
              ))
            ) : (
              <Spinner animation="grow" variant="primary" />
            )}
          </Accordion>
        </Col>
      </Row>
    </>
  );
};
export default Contacts;
