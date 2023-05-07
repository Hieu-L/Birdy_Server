import React from 'react';
import Sidebar from './Sidebar';
import Nest from './Nest';
import { useState } from 'react';
import './App.css';
import PeopleCard from './PeopleCard'


function App(props) {

  const [home, setHome] = useState('explore')

  const [friendChange, setFriendChange] = useState(0);

  const homeHandler = (pageName) => {
    console.log(pageName);
    setHome(pageName);
  }

  return (
    <div className="home">

      {/* {props.page === "ProfilePage" ? <Sidebar page="ProfilePage"/> : <Sidebar />} */}
      <Sidebar onFormSwitch={(elem) => props.onFormSwitch(elem)} homeHandler={homeHandler} admin={props.admin}/>
      
      {/* Middle */}
      {/* {props.page === "ProfilePage" ? <Nest page="ProfilePage"/> : <Nest />} */}
      <Nest friendHandler = { () => setFriendChange(previous => previous + 1) } admin={props.admin} home={home} /> 

      <PeopleCard homeHandler={homeHandler} admin={props.admin}/>

      {/* <MainPage /> */}
    </div>
  );
}

export default App;
