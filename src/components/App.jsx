import React from "react";
import Header from "./Header";
import Locations from "./locations/Locations";
import SeasonList from "./seasons/SeasonList";

function App() {
  return(
    <div>
      <Header/>
      <Locations/>
      <SeasonList/>
    </div>
  );
}

export default App;
