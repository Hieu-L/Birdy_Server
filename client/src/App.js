import React from 'react';
import Sidebar from './Sidebar';
import Nest from './Nest';
import './App.css';
import MainPage from './MainPage';

function App() {
  return (
    <div className="home">
      {/* Sidebar */}
      <Sidebar page="ProfilePage"/>
      {/* <Sidebar /> */}

    
      {/* Middle */}
      <Nest page="ProfilePage" />
      {/* <Nest /> */}

      {/* Things on the right */}

      {/* <MainPage /> */}
    </div>
  );
}

export default App;
