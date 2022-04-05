import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Hello here it is home exploring react router</h1>
      <p>IT is home page</p>
    </div>
  );
};

export default Home;

/*  copy them all to app.js that will work
  <Navbar></Navbar>
     <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="/friends" element={<Friends></Friends>}></Route>

          <Route path="/SingleFriend/:username" element={<DetailFriend></DetailFriend>}></Route>

          <Route path="/posts" element={<FakePost></FakePost>}>
            <Route path=":postID" element={<SinglePost></SinglePost>}></Route>
          </Route>

          <Route path="/about" element={<About></About>}></Route>

          <Route path="*" element={<NotFound> </NotFound>}></Route>
     </Routes> */
