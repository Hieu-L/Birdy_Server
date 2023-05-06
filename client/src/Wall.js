import React from 'react'
import Post from './Post'
import { useState } from 'react'

function Wall(props) {

    return (
        <div>
            <div>{ props.posts.map(u =><Post name={u.author} pic={props.pic} image={props.image} pseudo={u.author} text={u.text}/>)}</div>
        </div>
    )
}

export default Wall