import React, { Component } from 'react';

import Header from '../../Header';

import './index.css';

class Album extends Component {
  render() {
    return (
      <div className="Album">
        <Header match={this.props.match}/>
        <div className="Album-Container"> Album </div>
      </div>
    );
  }
}

export default Album;
