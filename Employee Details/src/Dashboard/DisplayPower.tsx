import React, { useEffect } from "react";
interface Props {
  power: string;
}

const DisplayPower = ({ power }: Props) => {
  useEffect(() => {
    console.log("Admin power set to " + power);
  }, [power]);
  return (
    <div>
      <p>Admin Power is:{power} </p>
    </div>
  );
};

export default DisplayPower;
