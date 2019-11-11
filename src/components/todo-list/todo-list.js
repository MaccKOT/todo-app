import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  //JSX должен обязательно иметь один родительский элемент !!!
  // <span>1</span><span>2</span> - невалидно, надо оборачивать в div

  const elements = todos.map(item => {
    const { id, ...itemProps } = item; //достаём id из props, всё остальное закидываем в объект itemProps
    return (
      <li className="list-group-item" key={id}>
        {/* <TodoListItem label={item.label} important={item.important} /> */}
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">{elements}</ul>

    // передаваемый important - без значение равнозначен important={true}
  );
};

export default TodoList;
