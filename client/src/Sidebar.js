import React from "react";
import './Sidebar.css'
import ProfileCard from "./ProfileCard";
import Logout from "./Authentification/Logout";
import FriendCard from "./FriendCard";
import axios from 'axios';
import { useState } from "react";
import birdy from "./images/birdy.jpg"
import pic from "./images/pfp.jpg"
import cover from "./images/land.png"


axios.defaults.baseURL = 'http://localhost:3001';


function Sidebar(props){
 
    const [name, setName] = useState("");
    const [pseudo, setPseudo] = useState(props.admin);


    let url = "/api/user/id_"+props.admin;
    try { axios.get(url).then(res => { 
        console.log(res.data); 
        setName( res.data.user_exist.firstname+" "+res.data.user_exist.lastname ); 
        setPseudo( props.admin );
    }) }
    catch(e) {}


    
    return (
        <div className="sidebar">
            {/* Birdy icon */}
            <button className="birdyIcon" onClick={() => props.homeHandler('explore')}><img src={birdy} alt="" /> EXPLORE </button>
            
            <ProfileCard homeHandler={(elem) => props.homeHandler(elem)} name={name} pseudo={pseudo} cover={cover} pic={pic} />
            
            
            <FriendCard admin={pseudo} homeHandler={(elem) => props.homeHandler(elem)}/>

            <div className="logout">
            <Logout onFormSwitch={() => props.onFormSwitch('login')}/>
            </div>

        </div>
    )
}

export default Sidebar