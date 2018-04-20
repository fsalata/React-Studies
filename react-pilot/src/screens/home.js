import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getApiUsers } from '../actions/api';

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getApiUsers());
  }

  render() {
    console.log(this.props.isLoading);

    return (
      <div>
        <div>React simple starter</div>
        <span>{this.props.isLoading}</span>
        <span>{this.props.apiResponse.map(item => <span> {item.name}</span>)}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  apiResponse: state.api.apiUsersResultData,
  isLoading: state.api.isLoading,
});

export default connect(mapStateToProps)(Home);
