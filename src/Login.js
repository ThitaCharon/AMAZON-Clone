import reactDom from "react-dom";
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useState } from "react";

function Login (){
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => { 
        e.preventDefault()
        // do fierbase resgister
        auth.signInWithEmailAndPassword(email, password)
            .then( auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => { 
        e.preventDefault()
        // do fierbase resgister
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // successful
                console.log(auth);
                if (auth) { 
                    history.push('/')
                }
            })
            .catch(error => alert(error.message)
        )
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
                />
            </Link>

            <div className="lgoin__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange=
                    {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange=
                    {e => setPassword(e.target.value)}/>

                    <button className="login__signInButton" 
                        onClick={signIn} type="submit">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKECLONE 
                    Conditions of Use & Sale. Please see our Privacy Notice, our 
                    Cookie Notice and our Interest-Based Ads Notice. 
                </p>
                
                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login