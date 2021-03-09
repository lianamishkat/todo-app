import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo({ todos, completeTodo }) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="todo-list-container">
        <div
          className="todo-icon"
          key={todo.id}
          onClick={() => completeTodo(todo.id)}
        >
          <div className="circle"></div>
          <p className="todo-item">{todo.text}</p>
        </div>
      </div>
    </div>
  ));
}

export default Todo;