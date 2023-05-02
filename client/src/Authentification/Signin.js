import React from 'react'
import { useState } from 'react'
import './Signin.css'
import bird from './bird1.jpg'

function Signin(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conf_password, setConf_Password] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passOK, setPassOK] = useState(true);


    const handleSubmission = (e) => {
        if (password === conf_password) setPassOK(true);
        else setPassOK(false);
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
                        <button type="reset">Reset</button>
                    </div>
                    

                    {passOK ? <p></p>:<p style={{color:"red"}}>Erreur: mots de passe différents</p>}

                </form>

                <button className="link-btn" onClick={() => props.onFormSwitch('login')}> Already have an account? Login here.</button>

            </div>
        </div>
    )
}

export default Signin