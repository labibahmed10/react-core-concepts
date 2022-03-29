import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailFriend = () => {
  const { username } = useParams();

  const [person, setPerson] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, []);

  return (
    <div>
      <h2>This is detail about single friend</h2>
      <h1>{person.name}</h1>
      <h2>{person.email}</h2>
      <p>address: {person.address?.city}</p>
    </div>
  );
};

export default DetailFriend;
