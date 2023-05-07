import React, { useEffect } from 'react';
import ChirpBox from './ChirpBox';
import "./Nest.css";
import { useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import Wall from './Wall';
import pic from './images/pfp.jpg'

axios.defaults.baseURL = 'http://localhost:3001';

function Explore(props) {

  const [posts, setPost] = useState(
    [
        {author: "Hugo Victor", text: "sdfs", image:pic},
        {author: "Hugo Victooooooor", text: "sdfs", image:pic},
        {author: "Zola Émile", text: "sdfs", image:pic},
        {author: "IDK YOU", text: "sdfs", image:""}
    ]
  )

  const [filter, setFilter] = useState("");

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

        <Searchbar filterHandler={ (elem) => setFilter(elem) }/>

        <Wall posts={posts.filter( post => (post.text.includes(filter) || post.author.includes(filter)) )} pic={pic} modifiable={false}/>
       

    </div>
  )
}

export default Explore