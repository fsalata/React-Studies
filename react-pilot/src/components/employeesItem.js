import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return (
      <div className="card">
        <div ref={ref => (this._map = ref)} className="card-img-top map" />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.username}</p>
          <div className="btn-group d-flex" role="group">
            <a href="#" className="btn btn-primary w-100">
              To Dos
            </a>
            <a href="#" className="btn btn-primary w-100">
              Posts
            </a>
            <a href="#" className="btn btn-primary w-100">
              Albums
            </a>
          </div>
        </div>
      </div>
    );
  }
}

EmployeesItem.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  lat: PropTypes.string,
  lng: PropTypes.string,
};

export default EmployeesItem;
