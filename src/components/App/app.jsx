import React from "react";
import PropTypes from "prop-types";
import Main from "../Main/main.jsx";


const handlerClickOnTitle = () => {
  // console.count();
  // console.log(`я нажал на заголовок`);
};

const App = (props) => {
  const {placesCount, town, mockSettings} = props;
  return (
    <Main
      placesCount={placesCount}
      town={town}
      mockSettings={mockSettings}
      onMainTitleClick={handlerClickOnTitle}
    />
  );
};
App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  town: PropTypes.string.isRequired,
  // в массиве дополнительно надо указывть PropTypes элемента(чему равен каждый элемент массива- строка или число и т.п.)
  // typePlaces: PropTypes.arrayOf(PropTypes.string).isRequired,
  mockSettings: PropTypes.array.isRequired,
};

export default App;
