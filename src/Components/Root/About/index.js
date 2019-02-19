import React, { Component } from 'react';

import Header from '../../Header';

import './index.css';
import tiechui from './tiechui.png';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: '<p>我是小短腿铁锤，因自小比兄弟姐妹都大只被叫“大壮”，所以爹娘把我带走后给我起了这么个名字。不知道是名字成就了我的体型，还是体型验证了我的本名。</p> <p>在我住的那个片区，大家都叫我锤哥，于是我的英文名叫“Thor”，希望漫威迷不要揍我（揍我我就卖萌 </p> <p>本锤出生于 2018 年 3 月 5 日，刚好是狗年，但是俺娘说了，狗年这一年对狗狗们都不太平。还好已经过了，俺也要成年了。</p>'
    };
  }

  render() {
    return (
      <div className="About">
        <Header match={this.props.match}/>
        <div className="About-Container">
          <div className="About-intro">
            <h1>Thor</h1>
            <div dangerouslySetInnerHTML={{__html: this.state.introduction}} />
          </div>
          <div className="About-tiechui" style={{backgroundImage: `url(${tiechui})`}}></div>
        </div>
      </div>
    );
  }
}

export default About;
