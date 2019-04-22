import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FixtureList from "./components/FixtureList";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <Header />
          <FixtureList />
          <Footer />
        </Provider>
      </div>
    );
  }
}

export default App;
