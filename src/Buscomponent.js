import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./LoginForm";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import User from "./User";
import Admin from "./Admin";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import axios from "axios";
import { useState } from "react";
function BusTab({ tabType }) {
  const [values, setValues] = useState({});
  const [searches, setSearches] = useState({});
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  console.log(values);
  const handleSearch = (evn) => {
    console.log(evn.target.name, evn.target.value);

    setSearches({
      [evn.target.name]: evn.target.value,
    });
  };
    console.log(searches); 
    
    const handleClick = async () => {
        let responseData = await axios.post("http://localhost:8081/addBuses", {
      //name: values.name,
            Route: values.Route,
            startingDes: values.startingDes,
            endindDes: values.endindDes,
    });
    }

  return (
    <>
      <div className="CommonTab-add">
        <h2 className="CommonTab-add-h2">Add Buses</h2>

        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="BusRoute">Route.No</Label>
                <Input
                  id="exampleBus"
                  placeholder="Route placeholder"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="Route"
                  value={values?.Route || ""}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Starting Destination</Label>
                <Input
                  id="examplePassword"
                  placeholder="Destination placeholder"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="startingDes"
                  value={values?.startingDes || ""}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Ending Destination</Label>
                <Input
                  id="examplePassword"
                  placeholder="Destination placeholder"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="endindDes"
                  value={values?.endindDes || ""}
                />
              </FormGroup>
            </Col>
          </Row>

          <Button onClick={() => handleClick()}>Add</Button>
        </Form>
      </div>
      <div className="CommonTab-search">
        <br />
        <br />
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Search</Label>
              <Input
                id="exampleEmail"
                name="search"
                placeholder="with a placeholder"
                type="text"
                onChange={(evn) => handleSearch(evn)}
                value={searches?.search || ""}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default BusTab;
