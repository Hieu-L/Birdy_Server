import React from 'react';
import { useState } from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';
import axios from 'axios';
import { filterProps } from '@mantine/core';

axios.defaults.baseURL = 'http://localhost:3001';


function Post({name, pseudo, text, image, pic, id, modifiable, changeHandler}) {
    
    const [following, setFollowing] = useState(false);

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
        
                <img src={image}/>
                <div className='icons'>
                    <FavoriteIcon fontSize='small' />
                    <ChatIcon fontSize='small' />
                    { modifiable 
                        ?  <button type="button" onClick={removeHandler}> Delete </button>
                        : ""
                    }
                </div>      
            </div>
        </div>
    )
}

export default Post