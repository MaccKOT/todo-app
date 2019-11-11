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
  //теперь приходят через props сверху
  // state = {
  //   done: false,
  //   important: false
  // };

  //самый новейший способ из предложений. Функция-стрелка сохраняет this
  // onLabelClick = () => {
  //   // console.log(`Click! ${this.props.label}`);
  //   //используем специальную функцию для установки состояния state
  //   // done сразу деструктуризируем из state
  //   this.setState(({ done }) => {
  //     return { done: !done };
  //   });
  // };

  //setState асинхронная функция, поэтому мы не может просто так менять значения внутри state на основе текущего state (он может ещё не изменится), а мы должны передать текущий state в качестве параметра
  // onMarkImportant = () => {
  //   //setState принимает объект, но нет необходимости передавать весь объект state. Достаточно передать только изменённые ключи.
  //   this.setState(state => {
  //     return { important: !state.important };
  //   });
  // };

  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done
    } = this.props;

    //теперь это не нужно, потому что important мы получаем через state
    // const style = {
    //   color: important ? "steelblue" : "black",
    //   fontWeight: important ? "bold" : "normal"
    // };

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          {/* onClick={this.props.onDeleted} - функция передана нам из вышестоящего компонента через props */}
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
