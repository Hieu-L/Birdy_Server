import React, { useState , userEffect, useEffect} from 'react';
import ChirpBox from './ChirpBox';
import "./Nest.css";
import Post from './Post';
import ProfileCard from './ProfileCard';
import Profile from './Profile';
import Explore from './Explore';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001';

function Nest(props) {
  const cover = "https://th.bing.com/th/id/R.e72cf06ab05a2cf5a76b50808cdb22ed?rik=UrdjpsagxDuafA&pid=ImgRaw&r=0"
  const pic = "https://cdn.pixabay.com/photo/2017/08/01/15/03/bird-2566116__480.jpg"
  const name1 = "Birdy No1"
  const pseudo1 = "BigBoyPiou"

  const [name, setName] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [following, setFollowing] = useState(0);
  const [follower, setFollower] = useState(0);
  const [posts, setPosts] = useState([]);


  // GET NUMBER OF FOLLOWING
  useEffect ( () => {
  if (props.home !== "explore") {
    try 
    {         
        axios.get("/apifriends/user/id_"+props.home+"/friends")
        .then(res => {
            const tmp = res.data.userList; 
            setFollowing(tmp)  }
        )
        .then( () => axios.get("/apifriends/user/id_"+props.home+"/fans")
        )
        .then(res => { 
            const tmp = res.data.userList; 
            setFollower(tmp)  }
        ) 
        .then( () =>  axios.get("/apimessages/user/id_"+props.home+"/messages") 
        )
        .then(res => { 
            const tmp = res.data.messages; 
            setPosts(tmp)  }
        ) 
        .then( () => axios.get("/api/user/id_"+props.home) 
        )
        .then( res => { 
            const tmp = res.data.user_exist.firstname+" "+res.data.user_exist.lastname; 
            setName(tmp); setPseudo(props.home)} 
        )
    }   
    catch(e) { console.log("error getting user followings profile info") }
  }
  },[props.home])

  return (
    <div className="nest">
        {/* Header */}

      {props.home === "explore" 
          ? <Explore admin={props.admin} />
          : <Profile cover={cover} pic={pic} pseudo={pseudo} follower={follower.length} following={following.length} posts={posts} name={name} />
      }

    

    </div>
  )
}

export default Nest