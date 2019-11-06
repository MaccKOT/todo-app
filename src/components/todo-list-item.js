import React from "react";

//объект props (можно называть как угодно) передаётся во все компоненты
// const TodoListItem = props => {
//   return <span>{props.label}</span>;
// };

//достаём параметры с помощью деструктуризации
//если important вообще не передан, то он по умолчания становится false
const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black"
  };

  return <span style={style}>{label}</span>;
};

export default TodoListItem;
