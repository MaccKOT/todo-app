import React, { Component } from "react";
import "./todo-list-item.css";

//объект props (можно называть как угодно) передаётся во все компоненты
// const TodoListItem = props => {
//   return <span>{props.label}</span>;
// };

//делаем через классы, чтобы сохранять состояние

export default class TodoListItem extends Component {
  //Инициализируем State (обычный способ)
  // constructor() {
  //   super();
  //   this.state = {
  //     done: false
  //   };
  // }

  //Инициализируем State (самый современный способ). Избавились от конструктора
  //после инициализации нельзя его изменять напрямую - только читать
  state = {
    done: false,
    important: false
  };

  //самый новейший способ из предложений. Функция-стрелка сохраняет this
  onLabelClick = () => {
    console.log(`Click! ${this.props.label}`);
    //используем специальную функцию для установки состояния state
    this.setState({
      done: true
    });
  };

  onMarkImportant = () => {
    //setState принимает объект, но нет необходимости передавать весь объект state. Достаточно передать только изменённые ключи.
    this.setState({
      important: true
    });
  };

  render() {
    const { label } = this.props;

    //теперь это не нужно, потому что important мы получаем через state
    // const style = {
    //   color: important ? "steelblue" : "black",
    //   fontWeight: important ? "bold" : "normal"
    // };

    const { done, important } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onLabelClick}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onMarkImportant}
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
