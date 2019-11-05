import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(<App />, document.getElementById("root"));

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return <input type="text" placeholder="search" />;
};

const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

//Собираем наше приложение из компонентов
//JSX компоненты должны начинаться с Большой буквы, иначе они будут рассматриваться как обычный тег
const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

//создаём дерево элементов. Сложный элемент оборачиваем в ()
// const element = <App />;

//Создание элемента без JSX. Именно в такой код переделывает jsx Babel
// const element = React.createElement("h1", null, "Hello World");

//render на вход принимает именно компонент, а не имя элемента
ReactDOM.render(<App />, document.getElementById("root"));

console.log("Hello React");
