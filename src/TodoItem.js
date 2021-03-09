import React from "react";

function TodoItem() {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked=""
        // onClick={ }
        // onChange={}
      />
      <br />
      <p className="place-p">Placeholder text here</p>
    </div>
  );
}

export default TodoItem;