import React, { Component } from 'react';

import Header from '../../Header';

import './index.css';
import banner from './banner.png';
import title from './title.png';
import tiechui from './tiechui.png';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      word: '嗷',
    }
  }

  render() {
    return (
      <div className="Home">
        <Header match={this.props.match}/>
        <div className="Container">
          <div className="Logo" style={{backgroundImage: `url(${banner})`}}>
            TieChui
          </div>
          <div className="Title" style={{backgroundImage: `url(${title})`}}></div>
          <div className="Tiechui">
            <img src={tiechui} />
            <div className="word">
              <div className="arrow"></div>
              {this.state.word}
             </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
