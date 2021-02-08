import React from "react"
import "./Style/AppMain.css"
import "./Style/AppGrid.css"
import Header from "./Components/Header"
import Home from "./Components/Home"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Header  /> 
            <h1>OOOOOH MY GOOOOOOOOD!!!!!!!!!!!!</h1>
          </Route>

          <Route path="/">
            <Header  /> 
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;