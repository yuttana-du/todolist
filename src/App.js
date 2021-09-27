import logo from "./logo.svg";
import "./App.css";

function App() {
  const testa = ["ทดสอบ1", "ทดสอบ2", "ทดสอบ3"];

  const forMap = () => {
    return testa.map((value) => {
      return (
        <div className="list">
          <div className="list_text">{value}</div>
          <div className="action">
            <button className="button__edit">EDIT</button>
            <button className="button__delete">DELETE</button>
          </div>
        </div>
      );
    });
  };
  // ``
  return (
    <div className="App">
      <div className="App-header">
        <div className="baord">
          <div className="input">
            <input className="inputArea"></input>
            <button className="button">ADD</button>
          </div>
          {forMap()}
        </div>
      </div>
    </div>
  );
}

export default App;
