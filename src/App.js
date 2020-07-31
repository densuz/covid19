import React, { Component } from 'react';
import Sidebar from './components/Sidebar'
import Indonesia from './components/Indonesia'
import Dunia from './components/Dunia'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './style/styles.css'
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper d-flex align-items-stretch">
          <Sidebar />
          <Route path="/" exact component={Indonesia} />
          <Route exact path="/indonesia" component={Indonesia} />
          <Route exact path="/dunia" component={Dunia} />

        </div>
      </Router>
    )
  }
}

export default App;