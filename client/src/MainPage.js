import React, { useState } from 'react'
import Signin from './Authentification/Signin';
import App from './App';
import Login from './Authentification/Login';




function MainPage(props) {

    const [page, setPage] = useState('login');
    const [admin, setAdmin] = useState('');

    const pageHandler = (pageName) => { setPage(pageName); }

    return (
        <div className='mainpage'>
            

            { page === "login" ? <Login data={props.data} adminHandler={(elem) => setAdmin(elem)} onFormSwitch={pageHandler} /> : null}
            { page === "sign_up" ? <Signin data={props.data} onFormSwitch={pageHandler} /> : null}
            { (page !== "login") && (page !== "signup")  ? <App data={props.data} onFormSwitch={pageHandler} admin={admin} /> : null}

        </div>
            
    );
}

export default MainPage