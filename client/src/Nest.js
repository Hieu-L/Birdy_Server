import React, { useState , useEffect} from 'react';
import "./Nest.css";
import Profile from './Profile';
import Explore from './Explore';
import axios from 'axios'
import pic from './images/pfp.jpg'
import cover from './images/land.png'

axios.defaults.baseURL = 'http://localhost:3001';


function Nest(props) {

  const [name, setName] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [following, setFollowing] = useState(0);
  const [follower, setFollower] = useState(0);
  const [posts, setPosts] = useState([]);
  const [followStatus, setFollowStatus] = useState(false);

  const [change, setChange] = useState(0);


  // GET NUMBER OF FOLLOWING
  useEffect ( () => {
  if (props.home !== "explore") {
    try 
    {         
        axios.get("/apifriends/user/id_"+props.home+"/friends")
        .then( res => {
            const tmp = res.data.userList; 
            setFollowing(tmp)  }
        )
        .then( () => axios.get("/apifriends/user/id_"+props.home+"/fans")
        )
        .then( res => { 
            const tmp = res.data.userList; 
            setFollower(tmp)  }
        ) 
        .then( () =>  axios.get("/apimessages/user/id_"+props.home+"/messages") 
        )
        .then( res => { 
            const tmp = res.data.messages; 
            setPosts(tmp);  }
        ) 
        .then( () => axios.get("/api/user/id_"+props.home) 
        )
        .then( res => { 
            const tmp = res.data.user_exist.firstname+" "+res.data.user_exist.lastname; 
            setName(tmp); setPseudo(props.home)} 
        )
        .then( () => axios.get("apifriends/user/id_"+props.admin+"/friends/id_"+props.home) 
        )
        .then( res => {
          const tmp = res.data.msg ; setFollowStatus(tmp)} 
        )
    }   
    catch(e) { console.log("error getting user followings profile info") }
  }
  },[props.home, change, followStatus])

  return (
    <div className="nest">


      {props.home === "explore" 
          ? <Explore admin={props.admin} />
          : <Profile friendHandler={() => props.friendHandler()} followStatus={followStatus} admin={props.admin} changeHandler={() => {setChange(previous => previous + 1); console.log(change)}} cover={cover} pic={pic} pseudo={pseudo} follower={follower.length} following={following.length} posts={posts} name={name} />
      }

    

    </div>
  )
}

export default Nest