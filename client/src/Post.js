import React from 'react';
import { useState } from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';




function Post(props) {
    
    const [following, setFollowing] = useState(false);

    const handleFollow = () => {
        following 
            ? setFollowing(false)
            : setFollowing(true)
    }

    return (
        <div className='post'> 
            <div className='post_pic'>
                <Avatar src={props.pic} />
            </div>
            <div className='post_body'>
                <div className='post_info'>
                    <div className='info_text'>
                        <h3>
                            {props.name}{" "}
                            <span className='username'>@{props.pseudo}</span>
                            {/* <button className='follow-btn' onClick={handleFollow}>{following ? "Unfollow" : "Follow"} </button> */}
                        </h3>
                    </div>
                    <div className='info_details'>
                        <p>{props.text}</p>
                    </div>
                </div>
        
                <img src={props.image}/>
                <div className='icons'>
                    <FavoriteIcon fontSize='small' />
                    <ChatIcon fontSize='small' />
                </div>      
            </div>
        </div>
    )
}

export default Post