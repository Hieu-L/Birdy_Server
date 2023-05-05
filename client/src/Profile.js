import React from 'react'
import "./ProfileCard.css"
import ChirpBox from './ChirpBox'
import Post from './Post'
import Wall from './Wall'

function Profile(props) {

 
    const defaultpic = "https://th.bing.com/th/id/R.72ad85d65b52a367ebb66f5466a8556b?rik=dwT4CZMz5GX7gA&pid=ImgRaw&r=0"

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
                        <span>{props.followers}</span>
                        <span>Followers</span>
                    </div>

                    <div className="vline"></div>

                    <div className='follow'>
                        <span>{props.following}</span>
                        <span>Following</span>
                    </div>

                    <div className="vline"></div>
                    
                    <div className='follow'>
                      <span>12</span>
                      <span>Posts</span>
                    </div>
                </div>
                <hr />
                <div></div>
            </div>

          <ChirpBox page={props.page}/>

          {/* Post */}
          {/* <Post name="Birdy No1" pseudo="BigBoyPiou" pic={props.pic} text="Any Piou Piou you want duh" image={props.pic}/>
          <Post name="Birdy No1" pseudo="BigBoyPiou" pic="H" text="Any Piou Piou you want duh" image={props.pic}/>
          <Post name="Birdy No1" pseudo="BigBoyPiou" pic="H" text="Any Piou Piou you want duh" image={props.pic}/> */}
          <Wall />
            
        </div>
    )
}

export default Profile