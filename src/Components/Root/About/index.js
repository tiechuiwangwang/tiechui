import React, { Component } from 'react';

import Header from '../../Header';

import './index.css';
import tiechui from './tiechui.png';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Header match={this.props.match}/>
        <div className="About-Container">
          <div className="About-tiechui" style={{backgroundImage: `url(${tiechui})`}}></div>
        </div>
      </div>
    );
  }
}

export default About;
