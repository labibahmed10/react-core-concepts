import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

// const khayes = {
//   color: "rgb(97,218,251)",
// };

const ektaArray = [
  { name: "monjur", kaaj: "obiniy" },
  { name: "pakhi", kaaj: "basat" },
  { name: "messi", kaaj: "king" },
];

function App() {
  return (
    <div className="App">
      {ektaArray.map((indi) => (
        <NewReact name={indi.name} work={indi.kaaj}></NewReact>
      ))}
      <Counter></Counter>
      {/* <NewReact hola="Allahr name e shuru korilam"></NewReact>
      <NewReact hola="ja hobar hobe shikhte thaki INsha'Allah"></NewReact>
      <NewReact hola="Allah amk dhoirjo dharon er toufiq dik"></NewReact>
      <NewReact hola="ameen"></NewReact> */}

      <UserOfAPI></UserOfAPI>
    </div>
  );

  function NewReact({ name, work }) {
    return (
      <div style={{ color: " maroon", backgroundColor: "lavender", padding: "20px", margin: "20px" }}>
        <h1>{name}</h1>
        <p>{work}</p>
      </div>
    );
  }

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <h2>You have counted {count} time</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Increase</button>
      </div>
    );
  }

  function UserOfAPI() {
    const [users, callingUser] = useState([]);

    useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => callingUser(data.slice(0, 20)));
    }, []);

    return (
      <div>
        <h1>Learing loading dynamic data</h1>
        {users.map((user) => showUser(user))}
      </div>
    );
  }

  function showUser(props) {
    console.log(props);
    return (
      <div>
        <section id="container">
          <div>
            <h3>Name: {props.name.common}</h3>
            <img src={props.flags.png} alt="" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
