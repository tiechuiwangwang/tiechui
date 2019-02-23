import React, { Component } from 'react';

import Header from '../../Header';

import './index.css';

class Album extends Component {

  constructor(props) {
    super(props);
    const base_url = "https://static.tiechuiwang.wang/tiechuiwang.wang/album";
    this.state = {
      photos: [
        {
          title: '初次见面',
          url: `${base_url}/PcCQDpr8wiQi1CSS.jpg`,
        },
        {
          title: '进化成迪路兽',
          url: `${base_url}/tuLvv0g5csM1emuR.jpg`,
        },
        {
          title: '第一次去海上世界玩~',
          url: `${base_url}/0rUkGHxX49CbuOvV.jpg`,
        },
        {
          title: '做梦ing',
          url: `${base_url}/V7SeiJl0YTrscexc.jpg`,
        },
        {
          title: '我的爱心好看吗',
          url: `${base_url}/PofSz4kOXDW24YHt.jpg`,
        },
        {
          title: '比弟弟大了一圈',
          url: `${base_url}/ZlK1kt56Z6ueb4cJ.jpg`,
        },
        {
          title: '瞅什么瞅',
          url: `${base_url}/bpyHclUZt8MASZox.jpg`,
        },
        {
          title: '感觉自己萌萌哒',
          url: `${base_url}/aTXnWUY5RJwyY9tB.jpg`,
        },
        {
          title: '被粑粑封印住了',
          url: `${base_url}/ksgyHBab0cVBsZF7.jpg`,
        },
      ],
    };
  }

  render() {
    return (
      <div className="Album">
        <Header match={this.props.match}/>
        <div className="Album-Container">
          {
            this.state.photos.map((each) => {
              return (<div className="Album-Photo">
                        <img src={each.url} />
                        <div className="Album-Photo-intro">{each.title}</div>
                      </div>)
            })
          }
        </div>
      </div>
    );
  }
}

export default Album;
