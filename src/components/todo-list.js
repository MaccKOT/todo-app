import React from "react";
import TodoListItem from "./todo-list-item";
import "./todo-list.css";

const TodoList = ({ todos }) => {
  //JSX должен обязательно иметь один родительский элемент !!!
  // <span>1</span><span>2</span> - невалидно, надо оборачивать в div

  const elements = todos.map(item => {
    const { id, ...itemProps } = item; //достаём id из props, всё остальное закидываем в объект itemProps
    return (
      <li className="list-group-item" key={id}>
        {/* <TodoListItem label={item.label} important={item.important} /> */}
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">{elements}</ul>

    // передаваемый important - без значение равнозначен important={true}
  );
};

//выводим элементы в лоб, просто перебирая элементы массива вручную
// return (
//   <ul>
//     <li>
//       <TodoListItem label={todos[0].label} important={todos[0].important} />
//     </li>
//     <li>
//       <TodoListItem label={todos[1].label} important={todos[1].important} />
//     </li>
//     <li>
//       <TodoListItem label={todos[2].label} important={todos[2].important} />
//     </li>
//   </ul>

//   передаваемый important - без значение равнозначен important={true}
// );

export default TodoList;
