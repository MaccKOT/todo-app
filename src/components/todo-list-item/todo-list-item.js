import React, { Component } from "react";
import "./todo-list-item.css";

//объект props (можно называть как угодно) передаётся во все компоненты
// const TodoListItem = props => {
//   return <span>{props.label}</span>;
// };

//делаем через классы, чтобы сохранять состояние

export default class TodoListItem extends Component {
  //чтобы избежать bind, создадим функцию конструктор. Это консервативный способ создавать обработчики событий
  // constructor() {
  //   super();
  //   this.onLabelClick = () => {
  //     console.log(`Click! ${this.props.label}`);
  //   };
  // }

  //самый новейший способ из предложений. Функция-стрелка сохраняет this
  onLabelClick = () => {
    console.log(`Click! ${this.props.label}`);
  };

  //Функция, которая вызывается при клике. Метку получаем через props
  // onLabelClick() {
  //   console.log(`Click! ${this.props.label}`);
  // }

  render() {
    const { label, important = false } = this.props;

    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal"
    };

    return (
      <span className="todo-list-item">
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClick}
          //onClick={this.onLabelClick} - потеряет контекст this, если не ()=>
          //onClick={this.onLabelClick.bind(this)} - плохой способ, создаёт функцию обёртку
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
