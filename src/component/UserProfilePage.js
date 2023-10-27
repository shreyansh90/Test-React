import React, { useEffect, useState } from "react";
import UserPosts from "./UserPost";
import CountryClockSelector from "./CountryClockSelector";
import { useMatch } from "react-router-dom";

const UserProfilePage = ({ user }) => {
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [showAddress, setShowAddress] = useState(false);

  const match = useMatch("/users/:id");
  const { id } = match?.params;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUserInfo(data));

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [id]);

  const goBack = () => {
    window.location.href = "/";
  };

  const toggleAddress = () => {
    setShowAddress(!showAddress);
  };

  return (
    <div>
      <div>
      <button onClick={goBack} style={{ float:"left",  fontSize:"18px", marginLeft:"16px", backgroundColor:"skyblue"}}>
        Back
      </button>
        <h2 style={{ marginLeft: "40%" }}>
          Country Dropdown <CountryClockSelector />
        </h2>
      </div>
      <div>
        <h3 style={{ marginLeft: "45%" }}>Profile Page</h3>
      </div>
      {posts.length > 0 ? (
        <div>
          {userInfo && (
            <div
              className="user-profile"
              style={{
                border: "1px solid #000000",
                borderRadius: "7px",
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                marginLeft: "1%",
                marginRight: "1%",
              }}
            >
              <div className="user-info" style={{ marginLeft: "1%" }}>
                <h1 style={{ fontSize: "18px" }}>User Profile</h1>
                <p>Username: {userInfo.username}</p>
                <p>Name: {userInfo.name}</p>
                <p>Catch Name : {userInfo.company.catchPhrase}</p>
              </div>
              <div className="address" style={{ marginLeft: "30%" }}>
                <button onClick={toggleAddress}>
                  {showAddress ? "Hide Address" : "Show Address"}
                </button>
                <h2 style={{ fontSize: "18px" }}>Address</h2>
                {showAddress && (
                  <div>
                    <p>Street: {userInfo.address.street}</p>
                    <p>Suite: {userInfo.address.suite}</p>
                    <p>City: {userInfo.address.city}</p>
                    <p>Zipcode: {userInfo.address.zipcode}</p>
                  </div>
                )}
                <div className="contact-info">
                  <p>Email: {userInfo.email}</p>
                  <p>Phone: {userInfo.phone}</p>
                </div>
              </div>
            </div>
          )}
          <UserPosts posts={posts} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default UserProfilePage;
