import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
interface Users {
  id: number;
  name: string;
}

const GetUsers = () => {
  const [data, setData] = useState<Users[]>([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetUsers;
