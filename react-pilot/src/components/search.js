import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onChange, onClick }) => (
  <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Pesquisar..." onChange={onChange} />
    <div className="input-group-append">
      <button className="btn btn-secondary" type="button" onClick={onClick}>
        Buscar
      </button>
    </div>
  </div>
);

Search.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default Search;
