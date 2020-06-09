import React, { Component } from "react";
import { Provider } from "react-redux";
import Helmet from 'react-helmet';
import HTTPSRedirect from 'react-https-redirect';

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
          <Helmet>
            <title>Arsenal FC Fixtures</title>
            <meta name='description' content="Your stop for Arsenal FC fixtures across leagues!" />
            <link rel='apple-touch-icon' href="./arsenal-icon.png" />
          </Helmet>
          <HTTPSRedirect>
            <Header />
            <FixtureList />
            <Footer />
          </HTTPSRedirect>
        </Provider>
      </div>
    );
  }
}

export default App;
