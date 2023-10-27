import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const UserDirectoryPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div
      className="main"
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
        margin: "10px",
      }}
    >
      <div className="user-directory">
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          Directory
        </h1>

        <div className="user-cards" style={{ marginRight: "40px" }}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default UserDirectoryPage;
