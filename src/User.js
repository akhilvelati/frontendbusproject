import React, { useState } from "react";
import { useNavigate, useRoutes } from "react-router";

import axios from "axios";
import DestinationList from "./Tablecomponent";

const User = () => {
  const navigate = useNavigate();
  //const [values, setValues] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [tableData, setTableData] = useState([]);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleClick = async () => {
    console.log(searchValue);

    // alert(searchValue);
    let responseData = await axios.get(
      `http://localhost:8081/getDesBus?destination=${searchValue}`
    );
    //console.log(responseData?.data?.result);
    setTableData([...responseData?.data?.result]);
    console.log(tableData);
  };
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <header className="userheader">
        <div className="header-first">
          <h2>User Portal</h2>
        </div>
        <div className="header-last">
          <p className="header-last-p">
            {" "}
            welcome {JSON.parse(sessionStorage.getItem("userDetails"))?.name}
          </p>
          <button
            className="login-button logout"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      </header>
      <div className="userContents">
        <div className="ContensCard">
          <h3>Enter the destination</h3>
          <input
            type={"text"}
            name="destination_point"
            onChange={(e) => handleChange(e)}
          ></input>
          <button onClick={() => handleClick()} className="btn">
            Submit
          </button>
          <div>
            {/* {searchValue}
            {[1,2,3,4]?.map((a) => (
              <div>{a}</div>
            ))} */}
          </div>
        </div>
      </div>
      {tableData?.length > 0 ? <DestinationList tableData={tableData} /> : null}
    </>
  );
};

export default User;
