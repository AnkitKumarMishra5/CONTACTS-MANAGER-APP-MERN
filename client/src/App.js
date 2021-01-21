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
  const [data, setData] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contacts")
      .then((res) => {
        setContacts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }, [data]);

  const updateContacts = (newContact, id) => {
    !id ?
    axios
      .post("http://localhost:5000/api/contacts", newContact)
      .then((res) => {
        console.log(res.data);
        setData(!data)
      })
      .catch((err) => {
        console.log(err);
      })
    :
    axios
      .patch(`http://localhost:5000/api/contacts/${id}`, newContact)
      .then((res) => {
        console.log(res.data);
        setData(!data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const deleteContact = (id) =>{
    axios
      .delete(`http://localhost:5000/api/contacts/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(!data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleFav = () =>{
    axios
      .get("http://localhost:5000/api/contacts/fav")
      .then((res) => {
        setContacts(res.data);
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
              render={() => <Contacts contacts={contacts} updateContacts={updateContacts} deleteContact={deleteContact} handleFav={handleFav} />}
            />
          </Switch>
        </Router>
      </Container>
    </>
  );
};

export default App;
