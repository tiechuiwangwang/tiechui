import React, { Component } from 'react';

import API from '../../../API';
import Header from '../../Header';

import './index.css';

class Album extends Component {

  constructor(props) {
    super(props);
    this.fetchAlbum = this.fetchAlbum.bind(this);
    this.state = {
      photos: [],
    };
  }

  fetchAlbum() {
    return fetch(API.album_list_photo)
      .then(response => response.json())
      .then(response => {
        if (response.code != 0) {
          // Handle error
          return ;
        }
        this.setState({
          'photos': response.result,
        })
      })
  }

  componentDidMount() {
    this.fetchAlbum();
  }

  render() {
    return (
      <div className="Album">
        <Header match={this.props.match}/>
        <div className="Album-Container">
          {
            this.state.photos.map((each) => {
              return (<div className="Album-Photo">
                        <img src={each.image_url} />
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
