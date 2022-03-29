import React, { useEffect, useState } from "react";
import SingleFriend from "../SingleFriend/SingleFriend";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      <h1>Me as a friend advicing you not to spend more time in social media</h1>

      <h2>Bondhura amk kichu taka dhar dao tomra koyjon aso? ...{friends.length}</h2>

      {friends.map((friend) => (
        <SingleFriend key={friend.id} friend={friend}></SingleFriend>
      ))}
    </div>
  );
};

export default Friends;
