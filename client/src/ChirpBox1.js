import React from 'react';
import "./ChirpBox.css";
import Avatar from '@mui/material/Avatar';
import AddPhoto from '@mui/icons-material/AddPhotoAlternateOutlined';
import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

function ChirpBox(props) {

  const [message, setMessage] = useState("");

  const uploadPost = async() => {
    try{
      console.log(props.admin)
      await axios.post("/apimessages/user/id_"+props.admin+"/messages", { author: props.admin, date: "05/05/2023", text: message } ).then(
        res => { let tmp = res.data.newMessage; props.postHandler(tmp) }
      )
    } catch(err) { console.log("error uploading Post") }
  }


  return (
    <div className="chirpBox">
        <form>
            <div className='chirp_input'>
                <Avatar alt="Profile Pic" src={props.name}></Avatar>
                <input id="input" type="text" placeholder="What's up?" onChange={(e) => setMessage(e.target.value)}></input>
            </div>

            <div className='add'>
              <button type="submit" className='add-btn' onClick={() => 1+1}><AddPhoto/> Image </button>
              <button type="button" onClick={() => uploadPost()}>Chirp</button>
            </div>
        </form>
    </div>
  )
}

export default ChirpBox