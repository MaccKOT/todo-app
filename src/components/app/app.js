import React, { Component } from "react";

// при импорте можно не писать расширение файла .js
import AppHeader from "../app-header/";
import SearchPanel from "../search-panel/";
import TodoList from "../todo-list/";
import ItemStatusFilter from "../item-status-filter/";
import ItemAddForm from "../item-add-form";

import "./app.css";

//Собираем наше приложение из компонентов
//JSX компоненты должны начинаться с Большой буквы, иначе они будут рассматриваться как обычный тег
//в фигурные скобки { } можно вставлять js выражения (которые можно перевести в строки) и названия реакт-элементов, которые являются строками, числами и булевыми зн.
// значения null, undefined, true, false не являются ошибкой, а просто не отображаются на странице

//Чтобы удалять данные из todoData, необходимо чтобы App был не функцией const App = () =>, а был классом (компонентом реакт) и имел состояние, которое мы сможем менять

export default class App extends Component {
  maxId = 100;

  // STATE
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch")
    ],
    term: "",
    filter: "all" //active , all, done
  };
  // STATE

  //функция, которая создаёт новые элементы
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

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

  //добавление элемента из формы в введённого текста. Пока прототип
  addItem = text => {
    console.log("Added text :", text);
    //generate id. В реальном приложении генерятся сервером
    const newItem = this.createTodoItem(text);

    //add new item to todos
    this.setState(({ todoData }) => {
      //вернём новое состояние
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr
      };
    });
  };

  //Функции, которые проверяют смену состояния в todo-list
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  //сделаем отдельную функцию, которая будет менять нужное нам свойство по запросу
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    //1.update object
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    //2. construct new array
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = id => {
    // console.log("toogle important id :", id);
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  //Функция поиска, которая отфильтрует из массива видимые элементы
  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  //функция фильтрации списка в зависимости от переключателя
  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  onSearchChange = term => {
    this.setState({ term });
  };

  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { todoData, term, filter } = this.state;
    //сначала ищем и фильтруем по поиску, потом это фильтруем по состоянию переключателя
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

// <TodoList items={["Item 1", "Item 2"]} /> - передача переменных в наш компонент

//создаём дерево элементов. Сложный элемент оборачиваем в ()
// const element = <App />;

//Создание элемента без JSX. Именно в такой код переделывает jsx Babel
// const element = React.createElement("h1", null, "Hello World");
