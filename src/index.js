import React from "react";
import ReactDOM from "react-dom";

// при импорте можно не писать расширение файла .js
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import ItemStatusFilter from "./components/item-status-filter";

import "./index.css";

//Собираем наше приложение из компонентов
//JSX компоненты должны начинаться с Большой буквы, иначе они будут рассматриваться как обычный тег
//в фигурные скобки { } можно вставлять js выражения (которые можно перевести в строки) и названия реакт-элементов, которые являются строками, числами и булевыми зн.
// значения null, undefined, true, false не являются ошибкой, а просто не отображаются на странице

const App = () => {
  //массив данных "Список дел". Обычно такая информация приходит с сервера
  const todoData = [
    {
      label: "Drink Coffee",
      important: false,
      id: 1
    },
    {
      label: "Make React App",
      important: true,
      id: 2
    },
    {
      label: "Have a lunch",
      important: false,
      id: 3
    }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

// <TodoList items={["Item 1", "Item 2"]} /> - передача переменных в наш компонент

//создаём дерево элементов. Сложный элемент оборачиваем в ()
// const element = <App />;

//Создание элемента без JSX. Именно в такой код переделывает jsx Babel
// const element = React.createElement("h1", null, "Hello World");

//render на вход принимает именно компонент, а не имя элемента
ReactDOM.render(<App />, document.getElementById("root"));

console.log("Hello React");
