import React from "react"
import "./Style/AppMain.css"
import "./Style/AppGrid.css"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Checkout from "./Components/Checkout"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="app">
        <Header  /> 
        <Switch>

        <Route path="/login">
              <h1>Login page</h1>
          </Route>

          <Route path="/checkout">
              <Checkout />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;