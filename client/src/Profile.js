import React from 'react'
import "./ProfileCard.css"
import Wall from './Wall'




function Profile(props) {

 
    const defaultpic = "https://th.bing.com/th/id/R.72ad85d65b52a367ebb66f5466a8556b?rik=dwT4CZMz5GX7gA&pid=ImgRaw&r=0"
    const pic = "https://cdn.pixabay.com/photo/2017/08/01/15/03/bird-2566116__480.jpg"

    return (
        <div className= "profilePageCard">
            <div className="profilePicsP">
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
                <div></div>
            </div>

            {props.posts.length === 0
                ? <div className='profileName'> This Bird hasn't chirped yet  </div>
                : <Wall posts={props.posts} pic={pic} image={pic}/>
            }

        </div>
    )
}

export default Profile