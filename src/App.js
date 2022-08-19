import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header className="Header" />
        <SolarSystem />
        <Missions className="Missions" />
      </div>
    );
  }
}

export default App;
