import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };

  onLabelChange = event => {
    console.log(event.target.value);
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ""
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
          aria-label={this.state.label}
          value={this.state.label}
        />
        {/* value={this.state.label} - делаем элемент контроллируемым нами */}
        <button className="btn btn-outline-secondary">Add</button>
      </form>
    );
  }
}
