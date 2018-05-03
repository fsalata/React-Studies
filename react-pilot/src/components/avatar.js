import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import userCircle from '@fortawesome/fontawesome-free-solid/faUserCircle';
import close from '@fortawesome/fontawesome-free-solid/faTimes';

const Avatar = ({
  size = '112',
  image = null,
  iconSize = '7x',
  imageChange = null,
  removeImage = null,
}) => {
  let fileInput = null;

  function handleRemove() {
    removeImage();
    fileInput.value = '';
  }

  return (
    <div className="avatar">
      {imageChange ? (
        <input
          type="file"
          accept="image/*"
          style={{ width: size, height: size }}
          onChange={imageChange}
          ref={(ref) => {
            fileInput = ref;
          }}
        />
      ) : null}
      {imageChange && image ? (
        <button onClick={handleRemove}>
          <FontAwesomeIcon icon={close} color="#000" className="close" />
        </button>
      ) : null}
      {image ? (
        <img src={image} alt="..." className="rounded-circle" width={size} height={size} />
      ) : (
        <FontAwesomeIcon icon={userCircle} size={iconSize} color="#ccc" />
      )}
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.string,
  image: PropTypes.string,
  iconSize: PropTypes.string,
  imageChange: PropTypes.func,
  removeImage: PropTypes.func,
};

export default Avatar;
