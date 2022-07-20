import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const funct = planets.map(({ name, image }, index) => (
      <PlanetCard planetName={ name } planetImage={ image } key={ index } />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {funct}
      </div>
    );
  }
}

export default SolarSystem;
