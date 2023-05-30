import React from "react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Feature page</h1>
      <button type="button" onClick={handleClick}>
        BackToHome
      </button>
    </div>
  );
};

export default Features;
