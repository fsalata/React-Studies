import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const ListItem = ({
  title, subtitle, body, cellColor, link = null,
}) => {
  if (link) {
    return (
      <Link to={link} className={`list-group-item ${cellColor}`}>
        {title ? <h4>{title}</h4> : null}
        {subtitle ? <h5>{subtitle}</h5> : null}
        {body ? <p>{body}</p> : null}
      </Link>
    );
  }

  return (
    <li className={`list-group-item ${cellColor}`}>
      {title ? <h4>{title}</h4> : null}
      {subtitle ? <h5>{subtitle}</h5> : null}
      {body ? <p>{body}</p> : null}
    </li>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  body: PropTypes.string,
  cellColor: PropTypes.string,
  link: PropTypes.string,
};

export default ListItem;
