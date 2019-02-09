import React, { Component } from 'react';

import Header from '../../Header';

import './index.css';

class Talk extends Component {
  render() {
    return (
      <div className="Talk">
        <Header match={this.props.match}/>
        <div className="Talk-Container"> Talk </div>
      </div>
    );
  }
}

export default Talk;
