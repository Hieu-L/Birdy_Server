import React from 'react';
import axios from 'axios';
import "./DeleteAcc.css"


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
        <button className="delete-acc-btn" type="button" onClick={ (ev) => deletehandler(ev)}> Delete Account </button>
    )
}

export default DeleteAcc;
