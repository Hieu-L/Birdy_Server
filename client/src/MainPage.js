import React, { useState } from 'react'
import Signin from './Authentification/Signin';
import App from './App';
import Login from './Authentification/Login';


function MainPage(props) {

    const database = [
        { username: "user1", password: "pass1" },
        { username: "user2", password: "pass2" }
    ];

    const [form, setForm] = useState('login');

    const formHandler = (formName) => {
        setForm(formName);
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

            { form === "login" ? <Login data={props.data} onFormSwitch={formHandler} /> : null}
            { form === "sign_up" ? <Signin data={props.data} onFormSwitch={formHandler} /> : null}
            { form === "app" ? <App data={props.data}/> : null}


        </div>
            
    );
}

export default MainPage