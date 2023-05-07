import React from 'react';
import { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';


function DeleteAcc(props) {

    const deletehandler = async(ev) => {
        ev.preventDefault();
        try {
            await axios.post("api/user/id_"+ props.admin +"/delete").then( res => {
                console.log(res.data); props.onFormSwitch('login'); }
            )
        } 
        catch(e) { console.log("error : deleting user ")}
    }
    

    return (
        <button type="button" onClick={ (ev) => deletehandler(ev)}> Delete Account </button>
    )
}

export default DeleteAcc;
