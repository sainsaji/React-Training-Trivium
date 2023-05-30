import React, { useState } from "react";
import DisplayPower from "./DisplayPower";

const AdminPowerSelect = () => {
  const [power, setPower] = useState("");
  return (
    <div>
      <div className="mb-2">
        <label className="form-label">Select Power</label>
        <select
          className="form-select form-select-lg"
          onChange={(e) => setPower(e.target.value)}
        >
          <option selected>Select one</option>
          <option value="Low">Low</option>
          <option value="Ultra">Ultra</option>
          <option value="OP">OP</option>
        </select>
      </div>
      <DisplayPower power={power}></DisplayPower>
    </div>
  );
};

export default AdminPowerSelect;
