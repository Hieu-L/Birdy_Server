import React from 'react'
import "./ProfileCard.css"
import { useState } from "react";
import { Link } from 'react-router-dom';


function ProfileCard(props) {

    const defaultpic = "https://th.bing.com/th/id/R.72ad85d65b52a367ebb66f5466a8556b?rik=dwT4CZMz5GX7gA&pid=ImgRaw&r=0"


    return (
        <div className= "profileCard">
            <div className= "profilePics">
                <img src={props.cover ? props.cover : defaultpic} alt="Cover Image"/>
                <img src={props.pic} alt="Profile Picture"/>
            </div>

            <div className='profileName'>
              <p>{props.name}</p>  
              <p>@{props.pseudo}</p>
            </div>

            <button className='btn_profile' onClick={() => props.homeHandler(props.name)} >My profile</button>
 
        </div>
    )
}

export default ProfileCard