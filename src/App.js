import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Componenets/About/About";
import DetailFriend from "./Componenets/DetailOfSingleFriend/DetailFriend";
import Friends from "./Componenets/Friends/Friends";
import Home from "./Componenets/Home/Home";
import Navbar from "./Componenets/Navbar/Navbar";
import NotFound from "./Componenets/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/friends" element={<Friends></Friends>}></Route>

        <Route path="/SingleFriend/:username" element={<DetailFriend></DetailFriend>}></Route>

        <Route path="/about" element={<About></About>}></Route>

        <Route path="*" element={<NotFound> </NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
