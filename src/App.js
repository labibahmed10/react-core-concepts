import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

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
}

export default App;
