import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionsCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const funct = missions.map(({ name, year, country, destination }, index) => (
      <MissionsCard
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
        key={ index }
      />
    ));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {funct}
      </div>
    );
  }
}

export default Missions;
