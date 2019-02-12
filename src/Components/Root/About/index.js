import React, { Component } from 'react';

import Header from '../../Header';

import './index.css';
import tiechui from './tiechui.png';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: '3.5 生小公狗'
    };
  }

  render() {
    return (
      <div className="About">
        <Header match={this.props.match}/>
        <div className="About-Container">
          <div className="About-intro">
            <h1>TIE CHUI</h1>
            {this.state.introduction}
          </div>
          <div className="About-tiechui" style={{backgroundImage: `url(${tiechui})`}}></div>
        </div>
      </div>
    );
  }
}

export default About;
