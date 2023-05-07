import React from 'react';
import "./ChirpBox.css";
import Avatar from '@mui/material/Avatar';
import AddPhoto from '@mui/icons-material/AddPhotoAlternateOutlined';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageModal from "./ImageModal"

axios.defaults.baseURL = 'http://localhost:3001';

function ChirpBox(props) {

  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [modalOpened, setModalOpened] = useState(false);

  const uploadPost = async() => {
    try{
      console.log(props.admin)
      await axios.post("/apimessages/user/id_"+props.admin+"/messages", { author: props.admin, image: image, text: message } ).then(
        res => { let tmp = res.data.newMessage; props.postHandler(tmp) }
      )
    } catch(err) { console.log("error uploading Post") }
  }

  const addImage = () => {
    setModalOpened(true);

  }


  return (
    <div className="chirpBox">
        <form>
            <div className='chirp_input'>
                <Avatar alt="Profile Pic" src={props.name}></Avatar>
                <input id="input" type="text" placeholder="What's up?" onChange={(e) => setMessage(e.target.value)}></input>
            </div>

            <div className='add'>
              { image !== "" ? <div>{ image + ".jpg" }</div> : "" } 
              <button type="button" className='add-btn' onClick={() => addImage()}><AddPhoto/> Image </button>
              <button className='btn_chirp' type="button" onClick={() => uploadPost()}>Chirp</button>
            </div>
        </form>

        <ImageModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          setImage={setImage}
        /> 

    </div>
  )
}

export default ChirpBox