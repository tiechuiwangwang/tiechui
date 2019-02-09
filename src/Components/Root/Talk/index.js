import React, { Component } from 'react';

import Header from '../../Header';

class Talk extends Component {
  render() {
    return (
      <div>
        <Header match={this.props.match}/>
        <div> Talk </div>
      </div>
    );
  }
}

export default Talk;
