import React, { useState } from 'react'
import Signin from './Authentification/Signin';
import App from './App';
import Login from './Authentification/Login';
import Profile from './Profile';



function MainPage(props) {

    const [page, setPage] = useState('login');
    const [admin, setAdmin] = useState('');

    const pageHandler = (pageName) => { setPage(pageName); }

    return (
        <div className='mainpage'>
            
            {/* {isConnected ? <App data={database} /> : <Access data={database} login={getConnected} isConnected={isConnected}/>} */}

            { page === "login" ? <Login data={props.data} adminHandler={(elem) => setAdmin(elem)} onFormSwitch={pageHandler} /> : null}
            { page === "sign_up" ? <Signin data={props.data} onFormSwitch={pageHandler} /> : null}
            { (page !== "login") && (page !== "signup")  ? <App data={props.data} onFormSwitch={pageHandler} admin={admin} /> : null}

        </div>
            
    );
}

export default MainPage