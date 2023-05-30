import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import AdminPowerSelect from "./AdminPowerSelect";

const Dashboard = () => {
  const navigate = useNavigate();
  const navuseffect = () => {
    navigate(`/useffect`);
  };
  return (
    <>
      <Navbar></Navbar>
      <AdminPowerSelect></AdminPowerSelect>
      <h1>welcome {localStorage.getItem("uname")} </h1>

      <a
        id=""
        className="btn btn-primary"
        onClick={() => {
          navuseffect();
        }}
        role="button"
      >
        Button
      </a>
    </>
  );
};

export default Dashboard;
