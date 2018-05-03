import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getUserProfile } from '../actions/userProfile';
import { getLoginStatus } from '../actions/loggedUser';

import Avatar from './avatar';

class Header extends Component {
  componentDidMount() {
    if (this.props.email === null) {
      this.checkUserLogin();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.email &&
      nextProps.userProfile.email === null &&
      nextProps.userProfile.isLoading === null
    ) {
      this.props.getUserProfile(nextProps.email);
    }
  }

  checkUserLogin = async () => {
    await this.props.getLoginStatus();
  };

  render() {
    if (!this.props.checkingLogin && !this.props.isloggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            React Pilot
          </Link>

          {this.props.isloggedIn ? (
            <Link to="/perfil">
              <Avatar size="35" image={this.props.userProfile.profileImage} iconSize="2x" />
            </Link>
          ) : null}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  userProfile: PropTypes.object,
  isloggedIn: PropTypes.bool,
  checkingLogin: PropTypes.bool,
  getUserProfile: PropTypes.func,
  getLoginStatus: PropTypes.func,
};

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  checkingLogin: state.loggedUser.checking,
  isloggedIn: state.loggedUser.status,
  email: state.loggedUser.email,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUserProfile,
      getLoginStatus,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
