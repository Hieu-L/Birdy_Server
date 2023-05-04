import React from 'react';
import { useState } from 'react';
import './Signin.css';
import bird from './bird1.jpg';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';


function Signin(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conf_password, setConf_Password] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState(false);


    const handleSubmission = async(e) => {
        e.preventDefault();
        const user = username;
        const pass = password;

        try{ await axios.post('/api/user/signup', { username:username, firstname:firstName, lastname:lastName, password:password, confirmpassword:conf_password } )
        .then(res => { console.log(res.data); props.onFormSwitch('login'); }) }

        catch(e) { setError(true) }
    }

    const resetHandler = (e) => {
        setUsername("");
        setPassword("");
        setConf_Password("");
        setFirstName("");
        setLastName("");
        setError(false);
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

            <div className="sign">
                <h2>Create an account</h2>

                <form onSubmit={handleSubmission}>
                    
                    <input required type="text" placeholder="First Name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>

                    <input required type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>

                    <input required type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>

                    <input required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

                    <input required type="password" placeholder="Confirm Password" value={conf_password} onChange={(e) => setConf_Password(e.target.value)}/>

                    <div className="btns">
                        <button onClick={handleSubmission}>Sign In</button>
                        <button type="reset" onClick={resetHandler}>Reset</button>
                    </div>
                    

                    {error ? <div style={{color:"red"}}>Invalid username or invalid password</div> : ""}

                </form>

                <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Already have an account? Login here.</button>

            </div>
        </div>
    )
}

export default Signin