import React from 'react';
import { useState } from "react";
import './User.css'
import Avatar from '@mui/material/Avatar';


function User(props) {

    return (
        <div className="user">
            <div className="avatar">
                <Avatar src={props.pic} alt="profile"/>
            </div>

            <div className='username'>
                <span title={props.name}>{props.name}</span>
            </div>
            
            <button className= "button" onClick={() => props.homeHandler(props.name)}>
                Check
            </button>

        </div>
    )
}

export default User