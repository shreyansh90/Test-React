import React, { useState } from "react";
import PostDetailsModal from "./PostDetailsModel";

const UserPosts = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const renderEmptyPostCards = () => {
    const emptyPostCards = [];
    for (let i = 0; i < 3; i++) {
      emptyPostCards.push(
        <div
          key={i}
          className={`post-card inline empty ${
            i === 2 ? "last-post" : ""
          }`}
        />
      );
    }
    return emptyPostCards;
  };
  return (
    <div className="user-posts">
      <div className="border" style={{ marginLeft: "0px", height: "270px" }}>
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`post-card inline ${index % 3 === 2 ? "last-post" : ""}`}
            style={{
              display: "inline-block",
              width: "28%",
              margin: "10px",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "10px",
              height: "300px",
              cursor: "pointer", // Add this to make the card clickable
            }}
            onClick={() => handlePostClick(post)} // Handle card click
          >
            <h4>Post Title :</h4>
            <p style={{ fontSize: "16px", marginBottom: "5px" }}>{post.title}</p>
            <h4>Content :</h4>
            <p style={{ fontSize: "14px", marginBottom: "5px" }}>{post.body}</p>
          </div>
        ))}
        {posts.length < 3 && renderEmptyPostCards()}
      </div>

      <PostDetailsModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default UserPosts;
