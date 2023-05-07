import React from 'react'
import { useState , useEffect } from "react";
import axios from 'axios';
import PeopleCard from './PeopleCard'
import DeleteAcc from './DeleteAcc';

function RightBar(props) {


    return (
        <div>
            <PeopleCard homeHandler={(elem) => props.homeHandler(elem)} admin={props.admin}/>
            <DeleteAcc onFormSwitch={(elem) => props.onFormSwitch(elem)} admin={props.admin} ></DeleteAcc>
        </div>
    )
}

export default RightBar;