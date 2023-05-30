import React from "react";
import Navbar from "../Dashboard/Navbar";
import { useParams } from "react-router-dom";

const ClientDetails = () => {
  const { clientID, clientName, clientDOB, clientGender } = useParams<{
    clientID: string;
    clientName: string;
    clientDOB: string;
    clientGender: string;
  }>();
  return (
    <div>
      <Navbar></Navbar>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Client Details</h5>
          <p className="card-text">Client Info</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Client Name:{clientName} </li>
          <li className="list-group-item">Client Gender:{clientGender} </li>
          <li className="list-group-item">Client EID: {clientID} </li>
          <li className="list-group-item">Client DOB:{clientDOB} </li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
