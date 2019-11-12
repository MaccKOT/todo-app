import React, { Component } from "react";
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: ""
  };

  onSearchChange = event => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    const searchStyle = {
      fontSize: "20px"
    }; //передаём объект в качестве описания стилей

    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type here to search"
        style={searchStyle}
        autoComplete=""
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
