import React from "react"
import "./Style/AppMain.css"
import "./Style/AppGrid.css"
import Header from "./Components/Header"
import Home from "./Components/Home"


function App() {
  return (
    <div className="app">
      <Header  /> 
      <Home />
    </div>
  );
}

export default App;
