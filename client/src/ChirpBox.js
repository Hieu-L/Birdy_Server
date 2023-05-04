import React from 'react';
import "./ChirpBox.css";
import Avatar from '@mui/material/Avatar';
import AddPhoto from '@mui/icons-material/AddPhotoAlternateOutlined';


function ChirpBox(props) {
  return (
    <div className="chirpBox">
        <form>
            <div className='chirp_input'>
                <Avatar alt="Profile Pic" src={props.name}></Avatar>
                <input id="input" type="text" placeholder="What's up?"></input>
            </div>

            <div className='add'>
              <button className='add-btn'><AddPhoto/> Image </button>
              <button className='btn_chirp'>Chirp</button>
            </div>
        </form>
    </div>
  )
}

export default ChirpBox