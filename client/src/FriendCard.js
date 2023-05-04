import React from 'react'
import User from './User'
import { useState } from 'react'
import PeopleModal from './PeopleModal';


function FriendCard(props) {

    const [modalOpened, setModalOpened] = useState(false);

    const [users, setUser] = useState(
        [
            {name: "Hugo Victor", pic: "", followStat: true},
            {name: "Hugo Victooooooor", pic: "", followStat: false},
            {name: "Zola Émile", pic: "", followStat: true},
            {name: "IDK YOU", pic:""}
        ]
    )

    return (

        <div className='people'>
            <h3>Your friends</h3>
            
            <div>
                { users.map(u =><User homeHandler={(elem) => props.homeHandler(elem)} name={u.name} pic={u.pic} followStat={u.followStat}/>)}
            </div>

            <hr/>
            {props.page !== "modal" ? <span onClick={() => setModalOpened(true)}>Show more</span> : ""}

            <PeopleModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
            /> 

        </div>
    )
}

export default FriendCard