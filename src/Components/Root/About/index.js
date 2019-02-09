import React, { Component } from 'react';

import Header from '../../Header';

class About extends Component {
  render() {
    return (
      <div>
        <Header match={this.props.match}/>
        <div> About </div>
      </div>
    );
  }
}

export default About;
