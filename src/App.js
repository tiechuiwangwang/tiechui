import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Root/Home';
import About from './Components/Root/About';
import Album from './Components/Root/Album';
import Talk from './Components/Root/Talk';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/album" component={Album} />
          <Route path="/talk" component={Talk} />
        </div>
      </Router>
    );
  }
}

export default App;
