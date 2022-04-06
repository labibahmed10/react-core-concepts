import "./App.css";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const [userInfo, setUserInfo] = useState({});

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUserInfo(res.user);
        console.log(res.user);
      })
      .catch((error) => console.log(error));
  };

  const signOuthandle = () => {
    signOut(auth)
      .then(() => {
        setUserInfo({});
      })
      .catch((error) => setUserInfo(error));
  };
  return (
    <div>
      {userInfo.displayName ? (
        <button onClick={signOuthandle}>Google Sign Out</button>
      ) : (
        <button onClick={signIn}>Google Sign In</button>
      )}

      <h1>{userInfo.displayName}</h1>
    </div>
  );
}

export default App;
