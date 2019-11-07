import React from "react";
//если в файле есть хоть одна строка JSX-кода, то нам обязательно нужно импортировать библиотеку React.
import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
