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
        <Title className="title" headline="Planetas" />
        <div className="solarSystemCards">
          {funct}
        </div>
        <Title className="title" headline="Comparação (Escala aproximada da real)" />
        <div className="solarSystemPlanetsDisplay">
          <div className="Mercúrio">{}</div>
          <div className="Vênus">{}</div>
          <div className="Terra">{}</div>
          <div className="Marte">{}</div>
          <div className="Júpiter">{}</div>
          <div className="Saturno">{}</div>
          <div className="Urano">{}</div>
          <div className="Netuno">{}</div>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
