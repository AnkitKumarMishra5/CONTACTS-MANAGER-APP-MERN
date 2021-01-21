import {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import Contacts from "./components/Contacts/Contacts";

import "./App.css";

import axios from "axios";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contacts")
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateContacts = (newContact) => {
    axios
      .post("http://localhost:5000/api/contacts", newContact)
      .then((res) => {
        console.log(res.data);
        setContacts([...contacts, newContact])
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Container fluid>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Contacts contacts={contacts} updateContacts={updateContacts} />}
            />
          </Switch>
        </Router>
      </Container>
    </>
  );
};

export default App;
