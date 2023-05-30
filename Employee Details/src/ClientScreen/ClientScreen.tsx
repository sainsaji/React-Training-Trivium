import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";

interface Props {
  clientName: string;
  clientGender: string;
  clientID: string;
  clientDOB: string;
}

const ClientScreen = () => {
  const clientList: Props[] = [
    {
      clientName: "Rocky",
      clientGender: "Male",
      clientID: "1220",
      clientDOB: "22-04-1999",
    },
    {
      clientName: "Vishnu",
      clientGender: "Male",
      clientID: "1221",
      clientDOB: "22-04-1998",
    },
    {
      clientName: "Vasu",
      clientGender: "Male",
      clientID: "1222",
      clientDOB: "22-04-1993",
    },
  ];
  const navigate = useNavigate();
  const listDetails = (item: Props) => {
    navigate(
      `/clientdetails/${item.clientID}/${item.clientName}/${item.clientDOB}/${item.clientGender}`
    );
  };
  const addUser = () => {
    navigate("/addclient/");
  };
  return (
    <div>
      <Navbar></Navbar>
      <a id="" className="btn btn-primary" onClick={addUser} role="button">
        Add Client
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
          {clientList.map((item, index) => (
            <tr>
              <th scope="row">1</th>
              <td>{item.clientName}</td>
              <td>{item.clientGender}</td>
              <td>{item.clientID}</td>
              <td>{item.clientDOB}</td>
              <td>
                <a
                  id=""
                  className="btn btn-primary"
                  onClick={() => listDetails(item)}
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

export default ClientScreen;
