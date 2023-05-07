import React from 'react'
import "./Profile.css"
import Wall from './Wall'
import {useState, useEffect} from 'react'
import axios from 'axios';
import land from "./images/land.png"

axios.defaults.baseURL = 'http://localhost:3001';


function Profile(props) {
    
    const [following, setFollowing] = useState(props.followStatus);

    useEffect( () => { setFollowing(props.followStatus) },[props.followStatus])

    const handleFollow = async() => {

        try {
            if (following) {
                await axios.delete("apifriends/user/id_"+props.admin+"/friends/id_"+props.pseudo);
                props.friendHandler();
            } else {
                await axios.post("apifriends/user/id_"+props.admin+"/friends",{friend : props.pseudo});
                props.friendHandler();
            }
            setFollowing(previous => ! previous); props.changeHandler();
        } catch(e) { console.log("error : follow/unfollow") }

         
    }

    return (
        <div className= "profilePageCard">
            <div className="profilePicsP">
                <img src={land} alt="Cover"/>
                <img src={props.pic} alt="Profile pic"/>
            </div>

            <div className='profileName'>
              <p>{props.name}</p>  
              <p>@{props.pseudo}</p>
            </div>

            <div className='followStat'>
                <hr />
                <div>
                    <div className='follow'>
                        <span>{props.follower}</span>
                        <span>Followers</span>
                    </div>

                    <div className="vline"></div>

                    <div className='follow'>
                        <span>{props.following}</span>
                        <span>Following</span>
                    </div>

                    <div className="vline"></div>
                    
                    <div className='follow'>
                      <span>{ props.posts.length }</span>
                      <span>Posts</span>
                    </div>

                </div>
                <hr />

                {props.pseudo !== props.admin
                    ? <button className={ following ? "btn-unfollow" : "btn-follow" } type="button" onClick={handleFollow} > {following ? "Unfollow" : "Follow" }</button>
                    : ""
                }

                <div></div>
            </div>

            {props.posts.length === 0
                ? <div className='profileName'> This Bird hasn't chirped yet  </div>
                :  props.pseudo === props.admin 
                    ? <Wall changeHandler={() => props.changeHandler()} posts={props.posts} pic={land} modifiable={true}/>
                    : <Wall changeHandler={() => props.changeHandler()} posts={props.posts} pic={land} modifiable={false}/>
                
            }

        </div>
    )
}

export default Profile