import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(<App />, document.getElementById("root"));

//создаём дерево элементов. Сложный элемент оборачиваем в ()
const element = (
  <div>
    <h1>My Todo List</h1>
    <input type="text" placeholder="search" />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);

//Создание элемента без JSX. Именно в такой код переделывает jsx Babel
// const element = React.createElement("h1", null, "Hello World");

ReactDOM.render(element, document.getElementById("root"));

console.log("Hello React");
