import React, { useEffect } from 'react';
import ChirpBox from './ChirpBox';
import "./Nest.css";
import { useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import Wall from './Wall';

axios.defaults.baseURL = 'http://localhost:3001';

function Explore(props) {
  const pic = "https://cdn.pixabay.com/photo/2017/08/01/15/03/bird-2566116__480.jpg"

  const [posts, setPost] = useState(
    [
        {name: "Hugo Victor", pic: pic, image:pic},
        {name: "Hugo Victooooooor", pic: pic, image:pic},
        {name: "Zola Émile", pic: pic, image:pic},
        {name: "IDK YOU", pic:"", image:""}
    ]
  )

  useEffect( () => {
    try 
    {
      axios.get("/apimessages/user/messages")
      .then( (res) => { let tmp = res.data.messages ; setPost(tmp) } )
    } catch(e) { console.log("error loading posts for Explore") }
  }, [posts])


 
  return (
    <div className="nest">
        {/* Header */}
        <div className="nest_head">
          <h2>Nest</h2>
        </div>

        {/* ChirpBox : To make a new Post*/}
        <ChirpBox admin={props.admin} page={props.page} postHandler={(elem) => setPost(current => [...current, elem])}/>

        <Searchbar />

        <Wall posts={posts} pic={pic} image={pic} modifiable={false}/>
       

    </div>
  )
}

export default Explore