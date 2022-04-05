import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./Fakepost.css";

const FakePost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h2>Getting post from Fake json total : {posts.length}</h2>

      <div className="post-container">
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            {post.id}
          </Link>
        ))}
        <Outlet />
      </div>
    </div>
  );
};

export default FakePost;
