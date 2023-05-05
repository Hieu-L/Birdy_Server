import React from 'react'
import Post from './Post'
import { useState } from 'react'

function Wall(props) {
    const pic = "https://cdn.pixabay.com/photo/2017/08/01/15/03/bird-2566116__480.jpg"

    const [posts, setPost] = useState(
        [
            {name: "Hugo Victor", pic: {pic}, image:{pic}},
            {name: "Hugo Victooooooor", pic: {pic}, image:{pic}},
            {name: "Zola Émile", pic: {pic}, image:{pic}},
            {name: "IDK YOU", pic:"", image:""}
        ]
    )

    return (
        <div>
            <div>{ posts.map(u =><Post name={u.name} pic={u.pic} image={u.image}/>)}</div>
        </div>
    )
}

export default Wall