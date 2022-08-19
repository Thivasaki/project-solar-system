import React from 'react';
import PropTypes from 'prop-types';

class MissionsCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="MissionCard" data-testid="mission-card">
        <h3 className="missCardTitle" data-testid="mission-name">{name}</h3>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionsCard.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MissionsCard;
