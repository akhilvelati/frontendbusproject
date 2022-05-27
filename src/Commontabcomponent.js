import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./LoginForm";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import User from "./User";
import Admin from "./Admin";
import { FormFeedback, InputGroup } from "reactstrap";
function CommonTab({ headingName }) {
  return (
    <>
      <div className="CommonTab-add">
        <h2 className="CommonTab-add-h2">Add {headingName}</h2>
      </div>
      <div className="CommonTab-search"></div>
      <div className="btn">
        <button></button>
      </div>
    </>
  );
}

export default CommonTab;
