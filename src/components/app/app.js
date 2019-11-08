import React, { Component } from "react";

// при импорте можно не писать расширение файла .js
import AppHeader from "../app-header/";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list/";
import ItemStatusFilter from "../item-status-filter/";

import "./app.css";

//Собираем наше приложение из компонентов
//JSX компоненты должны начинаться с Большой буквы, иначе они будут рассматриваться как обычный тег
//в фигурные скобки { } можно вставлять js выражения (которые можно перевести в строки) и названия реакт-элементов, которые являются строками, числами и булевыми зн.
// значения null, undefined, true, false не являются ошибкой, а просто не отображаются на странице

//Чтобы удалять данные из todoData, необходимо чтобы App был не функцией const App = () =>, а был классом (компонентом реакт) и имел состояние, которое мы сможем менять

export default class App extends Component {
  state = {
    todoData: [
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
    ]
  };

  //наша функция для удаления элемента из todoData по id
  deleteItem = id => {
    console.log("ID to delete:" + id);
    //передаём в state функцию, которая выдаст новый массив без одного элемента
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      console.log("index to delete: " + idx);
      //todoData.splice(idx, 1); //неправильно изменять state напрямую!
      // const before = todoData.slice(0, idx);
      // const after = todoData.slice(idx + 1);
      // const newArray = [...before, ...after];
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}

// <TodoList items={["Item 1", "Item 2"]} /> - передача переменных в наш компонент

//создаём дерево элементов. Сложный элемент оборачиваем в ()
// const element = <App />;

//Создание элемента без JSX. Именно в такой код переделывает jsx Babel
// const element = React.createElement("h1", null, "Hello World");
