import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';

export default class App extends Component {
  render() {
    return (
      <div className="container" style={{paddingTop: '20px'}} >
        <SearchBar />
      </div>
    );
  }
}
