import React from 'react';
import ChirpBox from './ChirpBox';
import "./Nest.css";
import Post from './Post';
import ProfileCard from './ProfileCard';
import Searchbar from './Searchbar';
import Wall from './Wall'

function Explore(props) {
  const cover = "https://th.bing.com/th/id/R.e72cf06ab05a2cf5a76b50808cdb22ed?rik=UrdjpsagxDuafA&pid=ImgRaw&r=0"
  const pic = "https://cdn.pixabay.com/photo/2017/08/01/15/03/bird-2566116__480.jpg"
  const name = "Birdy No1"
  const pseudo = "BigBoyPiou"
  const followers = "10"
  const following = "4"
 
  return (
    <div className="nest">
        {/* Header */}
        <div className="nest_head">
          <h2>Nest</h2>
        </div>

        {/* ChirpBox : To make a new Post*/}
        <ChirpBox page={props.page}/>

        <Searchbar />

        {/* Post */}
        <Wall />


    </div>
  )
}

export default Explore