import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";
function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (
    <div>
      {listOfUsers.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
