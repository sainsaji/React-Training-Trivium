import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";

const UserScreen = () => {
  const userList = [
    { Name: "Rocky", Gender: "Male", "EMP-ID": "1220", DOB: "22-04-1999" },
    { Name: "Rocky", Gender: "Male", "EMP-ID": "1220", DOB: "22-04-1999" },
    { Name: "Rocky", Gender: "Male", "EMP-ID": "1220", DOB: "22-04-1999" },
  ];
  const navigate = useNavigate();
  const listDetails = () => {
    navigate("/userdetails/1");
  };
  const addUser = () => {
    navigate("/adduser/");
  };
  return (
    <div>
      <Navbar></Navbar>
      <a id="" className="btn btn-primary" onClick={addUser} role="button">
        Add user
      </a>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">EMP-ID</th>
            <th scope="col">DOB</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {userList.map((item, index) => (
            <tr>
              <th scope="row">1</th>
              <td>{item.Name}</td>
              <td>{item.Gender}</td>
              <td>{item["EMP-ID"]}</td>
              <td>{item.DOB}</td>
              <td>
                <a
                  id=""
                  className="btn btn-primary"
                  onClick={listDetails}
                  role="button"
                >
                  Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserScreen;
