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
import { useEffect, useState } from "react";
import axios from "axios";
function CommonTab({ tabType }) {
  useEffect(() => {
    console.log("changeTab");
    setSearches({});
    setValues({});
  }, [tabType]);
  const determineTabType = () => {
    console.log(tabType);
    if (tabType == 1) return "Admin";
    if (tabType == 2) return "Student";
    // if (tabType == 3) return "driver";
    // if (tabType == 4) return "buses";
  };
  const determineuserType = () => {
    if (tabType == 1) return "admin";
    if (tabType == 2) return "user";
    if (tabType == 3) return "driver";
  };

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
  const handleClick = async () => {
    if (tabType == 1) {
      let responseData = await axios.post("http://localhost:8081/adduser", {
        user: values.user,
        password: values.password,
        userType: determineuserType(),
      });
      // console.log(responseData.data?.data?.userType);
    }
    if (tabType == 2) {
      let responseData = await axios.post("http://localhost:8081/adduser", {
        user: values.user,
        password: values.password,
        userType: determineuserType(),
      });
      // console.log(responseData.data?.data?.userType);
    }
  };
  console.log(searches);
  return (
    <>
      <div className="CommonTab-add">
        <h2 className="CommonTab-add-h2">Add {determineTabType()}</h2>

        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input
                  id="exampleEmail"
                  placeholder="Username placeholder"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="user"
                  value={values?.user || ""}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  placeholder="password placeholder"
                  type="text"
                  onChange={(e) => handleChange(e)}
                  name="password"
                  value={values?.password || ""}
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
                value={values?.search || ""}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default CommonTab;
