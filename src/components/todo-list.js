import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
  const items = ["Learn React", "Build Awesome App"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>
        <TodoListItem />
      </li>
    </ul>

    //JSX должен обязательно иметь один родительский элемент !!!
    // <span>1</span><span>2</span> - невалидно, надо оборачивать в div
  );
};

export default TodoList;
