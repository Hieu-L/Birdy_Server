import React from 'react';
import { useState } from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';




function Post({name, pseudo, text, image, pic}) {
    
    const [following, setFollowing] = useState(false);

    const handleFollow = () => {
        following 
            ? setFollowing(false)
            : setFollowing(true)
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
                </div>      
            </div>
        </div>
    )
}

export default Post