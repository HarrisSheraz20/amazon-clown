import React from "react"
import "./Style/AppMain.css"
import "./Style/AppGrid.css"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Checkout from "./Components/Checkout"
import Login from "./Components/Login"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
              <Login />
          </Route>
          <Route path="/checkout">
          <Header/> 
            <Checkout />
            </Route>
            <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;