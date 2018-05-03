import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  title, subtitle, body, cellColor,
}) => (
  <li className={`list-group-item ${cellColor}`}>
    {title ? <h1>{title}</h1> : null}
    {subtitle ? <h2>{subtitle}</h2> : null}
    {body ? <p>{body}</p> : null}
  </li>
);

ListItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  body: PropTypes.string,
  cellColor: PropTypes.string,
};

export default ListItem;
