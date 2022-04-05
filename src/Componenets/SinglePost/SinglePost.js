import React from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { postID } = useParams();
  return (
    <div>
      <h1>THis is single post id : {postID} </h1>
    </div>
  );
};

export default SinglePost;
