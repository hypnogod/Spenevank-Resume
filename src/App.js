// import './App.css';
import React from "react";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Resume from "./Component/Resume/Resume";
import Login from "./Component/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Security from "./Component/Security/Security";
import Nav from "./Component/Nav/Nav";
import Footer from "./Component/Footer/Footer";
function App() {
  var login = false;


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav login={login} />
            <Home />
            <About />
            <Resume />
            {!login ? <Login  /> : <section>{"flag{}"}</section>}

            <Footer />
          </Route>
          <Route path="/security">
            <Security />
          </Route>
          <Route path="*">
            <h1>Not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
