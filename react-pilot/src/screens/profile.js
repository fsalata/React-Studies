import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearLoginStatus } from '../actions/loggedUser';
import { userProfileLogout } from '../actions/userProfile';

import Avatar from '../components/avatar';

class Profile extends Component {
  logout = () => {
    this.props.clearLoginStatus();
    this.props.userProfileLogout();
  };

  render() {
    return (
      <div className="profile">
        <Avatar image={this.props.user.profileImage} />
        <h2>{this.props.user.name}</h2>
        <h6>{this.props.user.email}</h6>
        <p>{this.props.user.cpf}</p>
        <button type="button" onClick={this.logout} className="btn btn-primary btn-lg btn-block">
          Logout
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userProfile,
  isloggedIn: state.loggedUser.status,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      clearLoginStatus,
      userProfileLogout,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
