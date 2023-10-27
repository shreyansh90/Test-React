import React from "react";

const PostDetailsModal = ({ post, isOpen, onClose }) => {
  if (!isOpen || !post) {
    return null;
  }

  const backdropStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer", // Add a pointer cursor to indicate clickability
  };

  const modalContentStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    width: "60%",
    maxWidth: "600px",
    textAlign: "center",
    position: "relative",
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the backdrop was clicked (not the modal content)
    }
  };

  return (
    <div
      style={backdropStyle}
      className={`post-details-modal ${isOpen ? "open" : ""}`}
      onClick={handleBackdropClick}
    >
      <div style={modalContentStyle}>
        <h4>User Id : {post.userId}</h4>
             <h3>Post Title:</h3>
        <p>{post.title}</p>
        <h3>Content:</h3>
        <p>{post.body}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PostDetailsModal;
