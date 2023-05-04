import React from 'react';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3001';

function Logout(props) {

  const handleLogout = async(e) => {
    //e.preventDefault();

    try{ await axios.delete('/api/user/logout').then(res => { console.log(res.data); props.onFormSwitch('login'); }) }
    catch(e) { console.log(e) }
}



  return (
    <div>
        <button className='btn' onClick={() => handleLogout()}>logout</button>
    </div>
  )
}

export default Logout