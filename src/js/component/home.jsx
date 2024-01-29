import React, { useState } from "react";

//create your first component
const Home = () => {
  const [value, setValue] = useState("");
  const [toDo, setTodo] = useState([]);

  return (
    <div className="container mx-auto p-2 mt-3">
      <h1 className="text-center">My To-Do list</h1>
      <div className="d-flex align-items-center justify-content-center">
        <input
          type="text"
          className="myInputs flex-grow-1"
          placeholder="Add your to-do task here.."
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setTodo([...toDo, value]);
              setValue("");
            }
          }}
        ></input>
        <button
          className="btn d-flex align-items-center justify-content-center"
          type="button"
          onClick={() => {
            if (value) {
              setTodo([...toDo, value]);
              setValue("");
            }
          }}
        >
          Add new
        </button>
      </div>
      <ul className="myList">
        {toDo.map((todo, index) => (
          <li key={index}>
            <div className="d-flex justify-content-between align-items-center mx-2">
              {todo}
              <i
                className="fa-solid fa-delete-left"
                style={{ color: "#B197FC" }}
                onClick={() => {
                  const newToDo = toDo.filter((todo, i) => i !== index);
                  setTodo(newToDo);
                }}
              ></i>
            </div>
          </li>
        ))}
      </ul>
      <div>
        {toDo.length} {toDo.length > 1 ? "to-dos" : "to-do"} left
      </div>
      <button
        className="btn d-flex align-items-center justify-content-center"
        type="button"
        onClick={() => {
          setTodo([]);
        }}
      >
        Delete All
      </button>
    </div>
  );
};

export default Home;
