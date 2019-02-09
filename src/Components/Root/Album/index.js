import React, { Component } from 'react';

import Header from '../../Header';

class Album extends Component {
  render() {
    return (
      <div>
        <Header match={this.props.match}/>
        <div> Album </div>
      </div>
    );
  }
}

export default Album;
