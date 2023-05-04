import React from 'react'
import User from './User'
import { useState } from "react";
import "./PeopleCard.css"
import PeopleModal from './PeopleModal';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useRoutes } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:3001';

function People(props) {

    const [modalOpened, setModalOpened] = useState(false);
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");


    try { 
        axios.get('/api/user/all')
        .then(res => { const listusers = res.data.users; setUsers(listusers) }) 
    }   catch(e) { console.log("error getting all users") }


    return (

        <div className='people'>
            <h3> All Users </h3>

            <div className='searchbar'> 
                <input type="text" placeholder="Explore" onChange={(e) => setFilter(e.target.value)}/>
            </div>

            <div>{ users.filter(user => user.username.includes(filter)).map(u =><User homeHandler={(elem) => props.homeHandler(elem)} name={u.username} pic={u.pic} followStat={u.followStat}/>)}</div>
            <hr/>
            {props.page !== "modal" ? <span onClick={() => setModalOpened(true)}>Show more</span> : ""}

            <PeopleModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            /> 
        </div>
    )
}

export default People
