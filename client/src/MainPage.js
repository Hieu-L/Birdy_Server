import React, { useState } from 'react'
import Signin from './Authentification/Signin';
import App from './App';
import Login from './Authentification/Login';
import Profile from './Profile';



function MainPage(props) {

    const database = [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" }
    ];

    const [page, setPage] = useState('login');

    const pageHandler = (pageName) => {
        setPage(pageName);
    }
    // const[isConnected, setConnect] = useState(false);
    // // const[page, setPage] = useState("app_page");


    // function getConnected(){
    //     setConnect(true);
    // }

    // function getLogout(){
    //     setConnect(false);
    // }

    return (
        <div className='mainpage'>
            
            {/* {isConnected ? <App data={database} /> : <Access data={database} login={getConnected} isConnected={isConnected}/>} */}

            { page === "login" ? <Login data={props.data} onFormSwitch={pageHandler} /> : null}
            { page === "sign_up" ? <Signin data={props.data} onFormSwitch={pageHandler} /> : null}
            { page === "app" ? <App data={props.data} onFormSwitch={pageHandler}/> : null}

        </div>
            
    );
}

export default MainPage