import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tinder from "./pages/Tinder";
import Likes from "./pages/Likes";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/tinder">
            <Tinder />
          </Route>
          <Route path="/likes">
            <Likes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
