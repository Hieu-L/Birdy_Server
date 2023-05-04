import React from "react";
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import ProfileCard from "./ProfileCard";
import User from "./User"
import PeopleCard from "./PeopleCard";
import Logout from "./Authentification/Logout";
import Profile from "./Profile";
import FriendCard from "./FriendCard";



function Sidebar(props){
    const cover = "https://th.bing.com/th/id/R.e72cf06ab05a2cf5a76b50808cdb22ed?rik=UrdjpsagxDuafA&pid=ImgRaw&r=0"
    const pic = "https://cdn.pixabay.com/photo/2017/08/01/15/03/bird-2566116__480.jpg"
    const name = "Birdy No1"
    const pseudo = "BigBoyPiou"
    const followers = "10"
    const following = "4"

    
    return (
        <div className="sidebar">
            {/* Birdy icon */}
            <button onClick={() => props.homeHandler('explore')}><TwitterIcon className="birdyIcon"/></button>
            
            <ProfileCard homeHandler={(elem) => props.homeHandler(elem)} name={name} pseudo={pseudo} cover={cover} pic={pic} followers={followers} following={following}/>
            
            
            <FriendCard homeHandler={(elem) => props.homeHandler(elem)}/>

            <Logout onFormSwitch={() => props.onFormSwitch('login')}/>

        </div>
    )
}

export default Sidebar