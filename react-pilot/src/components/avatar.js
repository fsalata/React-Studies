import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import userCircle from '@fortawesome/fontawesome-free-solid/faUserCircle';

const Avatar = ({ size = 112, image = null, iconSize = '7x' }) => (
  <div className="avatar">
    {image ? (
      <img src={image} alt="..." className="rounded-circle" width={size} height={size} />
    ) : (
      <FontAwesomeIcon icon={userCircle} size={iconSize} color="#ccc" />
    )}
  </div>
);

Avatar.propTypes = {
  size: PropTypes.number,
  image: PropTypes.string,
  iconSize: PropTypes.string,
};

export default Avatar;
