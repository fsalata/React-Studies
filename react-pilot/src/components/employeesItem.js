import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class EmployeesItem extends Component {
  componentDidMount() {
    const lat = parseFloat(this.props.lat);
    const lng = parseFloat(this.props.lng);

    const map = new google.maps.Map(this._map, {
      zoom: 16,
      center: {
        lat,
        lng,
      },
      disableDefaultUI: true,
    });

    new google.maps.Marker({
      position: { lat, lng },
      map,
    });
  }

  render() {
    const { userID, name, username } = this.props;

    return (
      <div className="card">
        <div ref={ref => (this._map = ref)} className="card-img-top map" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{username}</p>
          <div className="btn-group d-flex" role="group">
            <Link to={`/todos/${userID}`} className="btn btn-primary w-100">
              To Dos
            </Link>
            <Link to={`/posts/${userID}`} className="btn btn-primary w-100">
              Posts
            </Link>
            <Link to={`/albuns/${userID}`} className="btn btn-primary w-100">
              Albums
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

EmployeesItem.propTypes = {
  userID: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  lat: PropTypes.string,
  lng: PropTypes.string,
};

export default EmployeesItem;
