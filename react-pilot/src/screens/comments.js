import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

import { getApiComments } from '../actions/api';

import Search from '../components/search';
import ListItem from '../components/listItem';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      filteredData: [],
    };
  }

  componentWillMount() {
    this.props.getApiComments(this.props.match.params.post);
  }

  searchInputHandler = (event) => {
    const text = event.target.value;

    const results = this.props.comments.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.email.toLowerCase().includes(text.toLowerCase()) ||
        item.body.toLowerCase().includes(text.toLowerCase()));

    this.setState({
      term: text,
      filteredData: results,
    });
  };

  render() {
    if (this.props.checkingLogin || this.props.isLoading) {
      return <span> carregando... </span>;
    }

    const data =
      this.state.filteredData.length > 0 && this.term !== ''
        ? this.state.filteredData
        : this.props.comments;

    return (
      <div className="posts">
        <Search onChange={this.searchInputHandler} value={this.state.term} />
        <ul className="list-group">
          {data.map(comment => (
            <ListItem
              key={comment.id}
              title={comment.name}
              subtitle={comment.email}
              body={comment.body}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Comments.propTypes = {
  isLoading: PropTypes.bool,
  checkingLogin: PropTypes.bool,
  getApiComments: PropTypes.func,
  comments: PropTypes.array,
  match: ReactRouterPropTypes.match,
};

const mapStateToProps = state => ({
  comments: state.api.apiCommentsResultData,
  isLoading: state.api.apiCommentsResultData.isLoading,
  checkingLogin: state.loggedUser.checking,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getApiComments,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
