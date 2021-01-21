import { Card, Accordion, Button, Form, Table } from "react-bootstrap";

const Contact = ({contact}) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <h5 style={{ float: "left" }} className="mb-0 lead">
            {contact.name}
          </h5>
          <Form className="text-right">
            <Form.Check
              className="switch"
              type="switch"
              id="custom-switch"
              label="Favourites"
              checked={contact.favourite}
            />
          </Form>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="contact-details">
              <Table responsive="xl">
                <tbody>
                  <tr>
                    <td>Email</td>
                    <td>{contact.email}</td>
                  </tr>
                  <tr>
                    <td>Mobile No.:</td>
                    <td>{contact.mobile}</td>
                  </tr>
                </tbody>
              </Table>
              <Button className="acco-buttons" size="sm">
                Edit
              </Button>
              <Button className="acco-buttons" size="sm">
                Delete
              </Button>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default Contact;
