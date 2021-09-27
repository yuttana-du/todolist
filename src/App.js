import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  // ``
  const [textArea, setTextArea] = useState();

  const forMap = () => {
    return todo.map((value) => {
      return (
        <div className="list">
          <div className="list_text">{value}</div>
          <div className="action">
            <button className="button__edit" name={value} onClick={onEdit}>
              EDIT
            </button>
            <button className="button__delete" name={value} onClick={onDelete}>
              DELETE
            </button>
          </div>
        </div>
      );
    });
  };
  let validd;

  const onInputHandler = (event) => {
    console.log("textArea", event.target.value);
    setTextArea(event.target.value);
  };

  const onSubmit = () => {
    // console.log("TODO:", todo);
    // console.log("TEXTAREA:", textArea);
    setTodo([textArea, ...todo]);
  };

  const onDelete = (event) => {
    // console.log(event.target.name);
    setTodo(
      todo.filter((value) => {
        return value !== event.target.name;
      })
    );
  };

  const onEdit = (event) => {};

  return (
    <div className="App">
      <div className="App-header">
        <div className="board">
          <div className="input">
            <input
              className="inputArea"
              name="list"
              onInput={onInputHandler}
              value={textArea}
            ></input>
            <button className="button" onClick={onSubmit}>
              ADD
            </button>
          </div>
          {forMap()}
        </div>
      </div>
    </div>
  );
}

export default App;
