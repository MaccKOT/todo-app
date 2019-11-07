import React from "react";
import "./search-panel.css";

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
      className="form-control search-input"
      placeholder={searchText}
      style={searchStyle}
      autoComplete=""
      tabIndex={"1"}
      disabled={false}
    />
  );
};

export default SearchPanel;
