import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SingleFriend = ({ friend }) => {
  const { name, username, id } = friend;

  const navigate = useNavigate();

  const handlePath = () => {
    navigate(`/SingleFriend/${id}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Name: {name}</h1>
      <Link to={`/SingleFriend/${id}`}>Go </Link>
      <button onClick={handlePath}>{username}</button>
    </div>
  );
};

export default SingleFriend;
