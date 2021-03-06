import React from 'react';
import { Link } from 'react-router-dom';
class HostIndexDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    this.props.changeCenter({
      lat: this.props.host.latitude,
      lng: this.props.host.longitude,
    }, this.props.host.id);
  }

  acceptingGuests() {
    if (this.props.host.accepting_guests) {
      return (
        <p className='guest-indicator accepting'>
          ACCEPTING GUESTS
        </p>
      );
    } else {
      return (
        <p className='guest-indicator not-accepting'>
          NOT ACCEPTING GUESTS
        </p>
      );
    }
  }

  render() {
    const { selected } = this.props;
    return (
      <div
        className='host-index-module'
        onClick={this.handleClick}
        style={selected ? { backgroundColor: "#dacbb7" } : {}}
      >
        <img
          src={this.props.host.avatar_url}
          className='host-index-photo'
        />
        <div className='host-index-details' >
          <div className='host-index-info'>
            <div className="host-index-name">
              {this.props.host.fname} {this.props.host.lname}
            </div>
            <div className='host-index-location'>
              {this.props.host.city}, {this.props.host.country}
            </div>
          </div>
          {this.acceptingGuests()}
        </div>
      </div>
    );
  }
}

export default HostIndexDetail;
