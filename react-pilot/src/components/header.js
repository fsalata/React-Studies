import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getUserProfile } from '../actions/userProfile';

import Avatar from './avatar';

class Header extends Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.email &&
      nextProps.userProfile.email === null &&
      nextProps.userProfile.isLoading === null
    ) {
      this.props.getUserProfile(nextProps.email);
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            React Pilot
          </Link>

          {this.props.isloggedIn ? (
            <Avatar size="35" image={this.props.userProfile.profileImage} iconSize="2x" />
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
  getUserProfile: PropTypes.func,
};

const mapStateToProps = state => ({
  userProfile: state.userProfile,
  isloggedIn: state.loggedUser.status,
  email: state.loggedUser.email,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUserProfile,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
