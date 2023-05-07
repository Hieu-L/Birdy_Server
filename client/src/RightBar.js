import React from 'react'
import PeopleCard from './PeopleCard'
import DeleteAcc from './DeleteAcc';
import "./RightBar.css"

function RightBar(props) {


    return (
        <div className='rightbar'>
            <PeopleCard homeHandler={(elem) => props.homeHandler(elem)} admin={props.admin}/>
            <DeleteAcc onFormSwitch={(elem) => props.onFormSwitch(elem)} admin={props.admin} ></DeleteAcc>
        </div>
    )
}

export default RightBar;