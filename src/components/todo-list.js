import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = () => {
  //JSX должен обязательно иметь один родительский элемент !!!
  // <span>1</span><span>2</span> - невалидно, надо оборачивать в div
  return (
    <ul>
      <li>
        <TodoListItem label="Drink Coffee" />
      </li>
      <li>
        <TodoListItem label="Make React App" important />
      </li>
    </ul>

    // передаваемый important - без значение равнозначен important={true}
  );
};

export default TodoList;
