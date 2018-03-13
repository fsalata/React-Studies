import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video-detail';

const API_KEY = "AIzaSyCSsONxIv-c73gUSVIX33lSHdKxXRk4byQ";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [], 
      selectedVideo: null
    }

    this.videoSearch("skateboard");
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({  
        videos: videos, 
        selectedVideo: videos[0] 
      });
    });
  };

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChanged={ videoSearch } />
        <div className="row">
          <VideoDetail video={ this.state.selectedVideo } />
          <VideoList videos={ this.state.videos } onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } />
        </div>
      </div>
    );
  }
}

export default App;
