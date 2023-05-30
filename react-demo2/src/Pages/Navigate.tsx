import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navigate = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/pricing/1">Pricing</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigate;
