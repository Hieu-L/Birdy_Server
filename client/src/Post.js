import React from 'react';
import { useState } from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete'


import angry from "./mood/angry.png";
import bored from "./mood/bored.png";
import bye from "./mood/bye.png";
import crying from "./mood/crying.png";
import depressed from "./mood/depressed.png";
import eating from "./mood/eating.png";
import encouraging from "./mood/encouraging.png";
import full from "./mood/full.png";
import funny from "./mood/funny.png";
import hungry from "./mood/hungry.png";
import love from "./mood/love.png";
import money from "./mood/money.png";
import no from "./mood/no.png";
import not_talking from "./mood/not_talking.png";
import ok from "./mood/ok.png";
import pose from "./mood/pose.png";
import scared from "./mood/scared.png";
import sexy from "./mood/sexy.png";
import shocked from "./mood/shocked.png";
import sick from "./mood/sick.png";
import sleeping from "./mood/sleeping.png";
import stop_it from "./mood/stop_it.png";
import what from "./mood/what.png";
import yay from "./mood/yay.png";
import yes_sir from "./mood/yes_sir.png";

axios.defaults.baseURL = 'http://localhost:3001';


function Post({name, pseudo, text, image, pic, id, modifiable, changeHandler}) {
    
    const [following, setFollowing] = useState(false);
    let imageList = [ [angry,"angry"] , [bored, "bored"], [bye,"bye"], [crying,"crying"], [depressed,"depressed"], [eating,"eating"], [encouraging,"encouraging"], [full,"full"], [funny,"funny"], [hungry,"hungry"], [love,"love"], [money,"money"], [no,"no"], [not_talking,"not_talking"], [ok,"ok"], [pose,"pose"], [scared,"scared"], [sexy,"sexy"], [shocked,"shocked"], [sick,"sick"], [sleeping,"sleeping"], [stop_it,"stop_it"], [what,"what"], [yay,"yay"], [yes_sir,"yes_sir"]]
    
    let img;
    for(let i=0; i< imageList.length; i++) {
        if (imageList[i][1] === image) { img = imageList[i][0]; break; }
    }

    const handleFollow = () => {
        following 
            ? setFollowing(false)
            : setFollowing(true)
    }

    const removeHandler = async() => {
        try {
            await axios.delete("/apimessages/user/id_"+id).then(
                res => { console.log(res.data) ; changeHandler(); }
            )
        }
        catch(e) { console.log("error deleting post "+id) }
    }

    return (
        <div className='post'> 
            <div className='post_pic'>
                <Avatar src={pic} />
            </div>
            <div className='post_body'>
                <div className='post_info'>
                    <div className='info_text'>
                        <h3>
                            {name}{" "}
                            <span className='username'>@{pseudo}</span>
                            {/* <button className='follow-btn' onClick={handleFollow}>{following ? "Unfollow" : "Follow"} </button> */}
                        </h3>
                    </div>
                    <div className='info_details'>
                        <p>{text}</p>
                    </div>
                </div>
        
                <img src={img} />
                <div className='icons'>
                    <button className="icon-btn" type="button"><FavoriteIcon fontSize='small' /> </button>
                    <button className="icon-btn" type="button"><ChatIcon fontSize='small' /> </button>

                    
                    { modifiable 
                        ?  <button className="icon-btn" type="button" onClick={removeHandler}> <DeleteIcon fontSize='small' /></button>
                        : ""
                    }
                </div>      
            </div>
        </div>
    )
}

export default Post