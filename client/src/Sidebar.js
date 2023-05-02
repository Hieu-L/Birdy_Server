import React from "react";
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
// import SidebarOption from "./SidebarOption";
// import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import Button from '@mui/material/Button';
import ProfileCard from "./ProfileCard";
import User from "./User"
import PeopleCard from "./PeopleCard";



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
            <TwitterIcon className="birdyIcon"/>
            
            {props.page === "ProfilePage" 
                ? ""
                : <ProfileCard name={name} pseudo={pseudo} cover={cover} pic={pic} followers={followers} following={following} page=""/>
            }
            
            <PeopleCard />
            {/* <User name={name} pic={pic} followStat={stat1}/>
            <User name={name} pic={pic} followStat={stat2}/> */}

            {/* <SidebarOption active Icon = {HomeIcon} text = "Home"/>
            <SidebarOption Icon = {SearchIcon} text = "Explore"/>

            <SidebarOption Icon = {NotificationsIcon} text = "Notifications"/> */}


            {/* Tweet button */}
            {/* <Button variant="outlined" className="btn_tweet" fullWidth>Tweet</Button> */}
        </div>
    )
}

export default Sidebar