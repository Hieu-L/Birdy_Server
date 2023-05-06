import React from 'react'
import User from './User'
import { useState , useEffect } from "react";
import "./PeopleCard.css"
import PeopleModal from './PeopleModal';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

function People(props) {

    const [modalOpened, setModalOpened] = useState(false);
    const [card, setCard] = useState ('')
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect( () => {
        try { 
            axios.get('/api/user/all')
            .then(res => { const listusers = res.data.users; setUsers(listusers) }) 
        }   catch(e) { console.log("error getting all users") }
    },[])

    const handleButton = () =>{
        setModalOpened(true)
        setCard('people')
    }



    return (

        <div className={ props.page !=="modal" ? "people" : "modalPeople"}>
            <h3> All Users </h3>

            <div className='searchpeople'> 
                <input type="text" placeholder="Explore" onChange={(e) => setFilter(e.target.value)}/>
            </div>

            {props.page !== "modal" 
                ? <div>{ users.filter(user => user.username.includes(filter)).slice(0,7).map(u =><User homeHandler={(elem) => props.homeHandler(elem)} name={u.username} pic={u.pic} followStat={u.followStat}/>)}</div>
                : <div>{ users.filter(user => user.username.includes(filter)).map(u =><User homeHandler={(elem) => props.homeHandler(elem)} name={u.username} pic={u.pic} followStat={u.followStat}/>)}</div>
            }
            
            {props.page !== "modal" ? <hr />:""}
            {props.page !== "modal" ? <span onClick={() => handleButton()}>Show more</span> : ""}

            <PeopleModal
                card={card}
                homeHandler={(elem) => props.homeHandler(elem)}
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            /> 
        </div>

    )
}

export default People