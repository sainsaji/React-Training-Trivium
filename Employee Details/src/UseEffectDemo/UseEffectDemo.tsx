import React, { useEffect, useRef, useState } from "react";

const UseEffectDemo = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = "Hello Test";
    if (ref.current) ref.current.focus();
    console.log("setName activated");
    setName("Mohan");
  }, []);

  return (
    <div>
      <label>{name}</label>
      <input ref={ref} type="text" id="text1" className="form controls"></input>
    </div>
  );
};

export default UseEffectDemo;
