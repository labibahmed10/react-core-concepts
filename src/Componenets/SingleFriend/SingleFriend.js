import React from "react";
import { useNavigate } from "react-router-dom";

const SingleFriend = ({ friend }) => {
  const { name, username, id } = friend;

  const navigate = useNavigate();

  const handlePath = () => {
    const path = `/SingleFriend/${id}`;
    navigate(path);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Name: {name}</h1>
      <button onClick={handlePath}>{username}</button>
    </div>
  );
};

export default SingleFriend;
