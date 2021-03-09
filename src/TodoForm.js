import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="type todo and press enter"
        name="text"
        value={input}
        onChange={handleChange}
      />
      {/* <button className="todo-button">Add</button> */}
    </form>
  );
}

export default TodoForm;