import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [user.id]);

  return (
    <Link to={`/users/${user.id}`} className="user-card-link" style={{ textDecoration: "none" }}>
      <div
        className="user-card"
        style={{
          width: "100%",
          margin: "10px",
          marginRight: "5px",
          paddingLeft: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
          backgroundColor: "skyblue",
        }}
      >
        <div
          className="user-name"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1%",
            paddingBottom: "1%",
          }}
        >
          <div>
            <h2 style={{ fontSize: "16px", margin: "0", color: "black" }}>
              Name: {user.name}
            </h2>
          </div>
          <div className="post" style={{ marginRight: "2%", color: "black" }}>
            <h2 style={{ fontSize: "16px", margin: "0" }}>
              Post: {posts.length}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
