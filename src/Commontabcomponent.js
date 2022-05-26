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
function CommonTab({ tabType }) {
  const determineTabType = () => {
    console.log(tabType);
    if (tabType == 1) return "admin";
    if (tabType == 2) return "studet";
    if (tabType == 3) return "driver";
  };
  return (
    <>
      <div className="CommonTab-add">
        <h2 className="CommonTab-add-h2">Add {determineTabType()}</h2>

        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="name"
                  placeholder="with a placeholder"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="text"
                />
              </FormGroup>
            </Col>
          </Row>

          <Button>Addd</Button>
        </Form>
      </div>
      <div className="CommonTab-search">
<br/>
<br/>
      <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Search</Label>
                <Input
                  id="exampleEmail"
                  name="name"
                  placeholder="with a placeholder"
                  type="text"
                />
              </FormGroup>
            </Col>
            </Row>
      </div>
    </>
  );
}

export default CommonTab;
