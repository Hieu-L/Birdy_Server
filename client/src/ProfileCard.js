import React from 'react'
import "./ProfileCard.css"
import land from "./images/land.png"


function ProfileCard(props) {

    return (
        <div className= "profileCard">
            <div className= "profilePics">
                <img src={land} alt="Cover"/>
                <img src={props.pic} alt="Profile Pic"/>
            </div>

            <div className='profileName'>
              <p>{props.name}</p>  
              <p>@{props.pseudo}</p>
            </div>

            <button className='btn_profile' onClick={() => props.homeHandler(props.pseudo)} >My profile</button>
 
        </div>
    )
}

export default ProfileCard