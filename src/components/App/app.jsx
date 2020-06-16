import React from "react";
import Main from "../Main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesCount, town, typePlaces} = props;
  return (
    <Main
      placesCount ={placesCount}
      town ={town}
      typePlaces={typePlaces}
    />
  );
};


export default App;
