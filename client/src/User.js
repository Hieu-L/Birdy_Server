import React from 'react';
import { useState } from "react";
import './User.css'
import Avatar from '@mui/material/Avatar';


function User({name, pic, followStat}) {

    const [following, setFollowing] = useState(false);

    const handleFollow = () => {
        following 
            ? setFollowing(false)
            : setFollowing(true)
    }


    return (
        <div className="user">
            <div className="avatar">
                <Avatar src={pic} alt="profile"/>
            </div>

            <div className='username'>
                <span>{name}</span>
            </div>

            
            <button 
                className= "button"
                onClick = {handleFollow} >
                <span className='text'>{following ? "Unfollow" : "Follow"}</span>
            </button>

        </div>
    )
}

export default User