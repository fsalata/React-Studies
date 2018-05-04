import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onChange }) => (
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Pesquisar..." onChange={onChange} />
  </div>
);

Search.propTypes = {
  onChange: PropTypes.func,
};

export default Search;
