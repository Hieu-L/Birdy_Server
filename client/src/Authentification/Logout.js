import React from 'react';
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';
import "./Logout.css"


axios.defaults.baseURL = 'http://localhost:3001';

function Logout(props) {

  const handleLogout = async(ev) => {
    ev.preventDefault();

    try{ await axios.delete('/api/user/logout').then(res => { console.log(res.data); props.onFormSwitch('login'); }) }
    catch(e) { console.log(e) }
}



  return (
    <div>
        <button className='logout_btn'onClick={(ev) => handleLogout(ev)}>
          <LogoutIcon />Logout
        </button>
    </div>
  )
}

export default Logout