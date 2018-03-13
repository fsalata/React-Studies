import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import YTSearch from 'youtube-api-search';

const API_KEY = "";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: []
    }

    YTSearch({key: API_KEY, term: 'skate'}, videos => {
      this.setState({ videos });

      console.log(this.state.videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
