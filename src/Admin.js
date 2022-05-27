import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import {
  NavbarText,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import CommonTab from "./Commontabcomponent";

const Admin = () => {
  const handleClick = (type) => {
    console.log(type(1));
  }
  
  return (
    <>
      <header className="userheader">
        <div className="header-first">
          <h2>Admin Portal</h2>
        </div>
        <div className="header-last">
          <p className="header-last-p">
            {" "}
            welcome {JSON.parse(sessionStorage.getItem("userDetails"))?.name}
          </p>
          <button className="login-button logout">Logout </button>
        </div>
      </header>
      <div className="userContents">
        <div>
          <Navbar color="light" expand="md" light>
            {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem >
                  <NavLink onClick={() => handleClick(1)}>Admin</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={()=>handleClick(2)}>
                    Student
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={()=>handleClick(3)}>
                    Driver
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={()=>handleClick(4)}>
                    Buses
                  </NavLink>
                </NavItem>
              </Nav>

            </Collapse>
          </Navbar>
          <CommonTab headingName={'Admin'}/>
        </div>
      </div>
    </>
  );
};

export default Admin;
