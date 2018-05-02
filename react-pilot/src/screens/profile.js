import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { getLoginStatus, clearLoginStatus } from '../actions/loggedUser';
import { userProfileLogout } from '../actions/userProfile';

import Avatar from '../components/avatar';

class Profile extends Component {
  componentDidMount() {
    this.checkUserLogin();
  }

  checkUserLogin = async () => {
    await this.props.getLoginStatus();
  };

  logout = () => {
    this.props.clearLoginStatus();
    this.props.userProfileLogout();
  };

  render() {
    if (this.props.checkingLogin) {
      return <span> carregando... </span>;
    }

    if (!this.props.isloggedIn) {
      return <Redirect to="/" />;
    }

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
  checkingLogin: state.loggedUser.checking,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getLoginStatus,
      clearLoginStatus,
      userProfileLogout,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
