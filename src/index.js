import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(<App />, document.getElementById("root"));

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  const searchText = "Type here to search";
  //передаём атрибут (свойство, properties) в реакт-элемент
  //атрибуты html-элемента пишутся особым образом в camel-case. Например className для задания своего класса или htmlFor для for
  const searchStyle = {
    fontSize: "20px"
  }; //передаём объект в качестве описания стилей
  //если не передать значение атрибуту, то по умолчанию оно становится {true}
  return (
    <input
      type="text"
      placeholder={searchText}
      style={searchStyle}
      autoComplete=""
      tabIndex={"1"}
      className="foo"
      disabled={false}
    />
  );
};

const TodoList = () => {
  const items = ["Learn React", "Build Awesome App", "Drink coffee"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
    //JSX должен обязательно иметь один родительский элемент
    // <span>1</span><span>2</span> - невалидно, надо оборачивать в div
  );
};

//Собираем наше приложение из компонентов
//JSX компоненты должны начинаться с Большой буквы, иначе они будут рассматриваться как обычный тег
//в фигурные скобки { } можно вставлять js выражения (которые можно перевести в строки) и названия реакт-элементов, которые являются строками, числами и булевыми зн.
// значения null, undefined, true, false не являются ошибкой, а просто не отображаются на странице
const App = () => {
  //loginBox - объявление реакт-элемента внутри компонента
  const loginBox = <button>Log in, please</button>;
  const isLoggedIn = false;
  const welcomeBox = <button>Logout</button>;

  const value = "<script>alert('')</script>"; // пример злобного кода, который передал пользователь - при выводе он будет "эскейпиться", то есть выведется текстом, а не выполнится как код

  return (
    <span>
      {value}
      <span>{new Date().toString()}</span>
      {isLoggedIn ? welcomeBox : loginBox}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </span>
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
