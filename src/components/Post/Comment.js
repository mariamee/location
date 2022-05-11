import React from "react";

const Comment = ({ user, id, body }) => {
  console.log("user", user);
  return (
    <div className="d-flex align-items-start border p-2">
      <img
        src={user?.avatar}
        className="rounded-circle mr-2"
        alt="user"
        width={40}
        height={40}
      />
      <div className="media-body ms-2">
        <h6 className="text-primary">{user?.name}</h6>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Comment;
