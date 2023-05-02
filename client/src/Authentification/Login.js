import { useState } from "react";
import React from 'react'
import './Login.css'
import bird from './bird1.jpg'

function Login(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);

    const handleLogin = (e) => {
        
        // Prevent page reload
        e.preventDefault();

        //Fetch data from server
        fetch("api/user/signin", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            } )
            .catch((err) => {
                setError(true)
                console.error(err)
                console.log(error)
            } )
    }

    const toMainPage = () => {
        if (!error){
            props.onFormSwitch('app')
        }
    }

    return (
        <div className="access">
            <div className="left">
                <img src={bird} alt="logo"/>
                 <div className="description">
                     <h1>Birdy</h1>
                     <p>This is one of the first versions of birdy app</p>
                 </div>
            </div>

            <div className="log">
                <h2>Login</h2>
            
                <form onSubmit={handleLogin}>
                    <input
                        required
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        required
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={() => toMainPage()}>Log In</button>
                </form>

                {error ? <div style={{color:"red"}}>Invalid username or invalid password</div> : ""}
                <button type="submit" onClick={() => props.onFormSwitch('sign_up')}> Don't have an account? Register here.</button>
            </div>
        </div>
      );
}
    


export default Login