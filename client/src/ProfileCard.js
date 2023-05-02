import React from 'react'
import "./ProfileCard.css"
import { useState } from "react";


function ProfileCard(props) {

    const defaultpic = "https://th.bing.com/th/id/R.72ad85d65b52a367ebb66f5466a8556b?rik=dwT4CZMz5GX7gA&pid=ImgRaw&r=0"

    return (
        <div className= {props.page === "ProfilePage" ? "profilePageCard" : "profileCard"}>
            <div className={props.page === "ProfilePage" ? "profilePicsP" : "profilePics"}>
                <img src={props.cover ? props.cover : defaultpic} alt="Cover Image"/>
                <img src={props.pic} alt="Profile Picture"/>
            </div>

            <div className='profileName'>
              <p>{props.name}</p>  
              <p>@{props.pseudo}</p>
            </div>

            <div className='followStat'>
                <hr />
                <div>
                    <div className='follow'>
                        <span>{props.followers}</span>
                        <span>Followers</span>
                    </div>

                    <div className="vline"></div>

                    <div className='follow'>
                        <span>{props.following}</span>
                        <span>Following</span>
                    </div>

                    {props.page === "ProfilePage" 
                        ?   (<div className="vline"></div>)
                        : ""}
                    
                    {props.page === "ProfilePage" 
                        ?   (<div className='follow'>
                                <span>12</span>
                                <span>Posts</span>
                            </div>)
                        : ""}
                </div>
                <hr />
            </div>

            {props.page === "ProfilePage"  
                ? "" 
                : <span className='profile'> {/* add link */} My profile </span>
            }
            
        </div>
    )
}

export default ProfileCard