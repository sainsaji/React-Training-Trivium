import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../Dashboard/Navbar";

const UserDetails = () => {
  let { clientID } = useParams();
  return (
    <div>
      <Navbar></Navbar>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">User Details</h5>
          <p className="card-text">User Info</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">User Name: </li>
          <li className="list-group-item">User Gender: </li>
          <li className="list-group-item">User EID:{clientID} </li>
          <li className="list-group-item">User DOB: </li>
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

export default UserDetails;
