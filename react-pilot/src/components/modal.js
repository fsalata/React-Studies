import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  title,
  message,
  showConfirmButton = false,
  closeTitle,
  confirmTitle,
  closeAction,
  confirmAction,
}) => (
  <div className="backdrop">
    <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeAction}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{message}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeAction}>
              {closeTitle}
            </button>
            {showConfirmButton ? (
              <button type="button" className="btn btn-primary" onClick={confirmAction}>
                {confirmTitle}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  showConfirmButton: PropTypes.bool,
  closeTitle: PropTypes.string,
  confirmTitle: PropTypes.string,
  closeAction: PropTypes.func,
  confirmAction: PropTypes.func,
};

export default Modal;
