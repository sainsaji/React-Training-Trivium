import React, { useState } from "react";
import Alert from "./Alert";

const FavColor = () => {
  const [color, setFavColor] = useState("Red");
  const [exploded, setExploded] = useState(false);

  const handleClick = () => {
    setFavColor(color === "Red" ? "Green" : "Red");
    setExploded(true);
    setTimeout(() => {
      setExploded(false);
    }, 3000); // Reset the explosion effect after 0.5s
  };

  return (
    <>
      <p>Fav color is {color}</p>
      <a
        href="#"
        className={`btn ${exploded ? "explosion" : ""} ${
          color === "Red" ? "btn-danger" : "btn-success"
        }`}
        onClick={handleClick}
      >
        Change Favorite Color
      </a>
      {exploded && <Alert alertText={"Chaning Color:"} color={color}></Alert>}
    </>
  );
};

export default FavColor;
