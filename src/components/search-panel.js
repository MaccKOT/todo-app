import React from "react";

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

export default SearchPanel;
