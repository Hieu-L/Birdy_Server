import React from 'react';
import Sidebar from './Sidebar';
import Nest from './Nest';
import { useState } from 'react';
import './App.css';
import RightBar from './RightBar';

function App(props) {

  const [home, setHome] = useState('explore')

  const [friendChange, setFriendChange] = useState(0);

  const homeHandler = (pageName) => {
    console.log(pageName);
    setHome(pageName);
  }

  return (
    
    <div className="home">

      <Sidebar onFormSwitch={(elem) => props.onFormSwitch(elem)} homeHandler={homeHandler} admin={props.admin}/>
      
      <Nest friendHandler = { () => setFriendChange(previous => previous + 1) } admin={props.admin} home={home} /> 

      <RightBar onFormSwitch={(elem) => props.onFormSwitch(elem)} homeHandler={homeHandler} admin={props.admin}/>

    </div>
  );
}

export default App;
