import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/config';
import '../style/Login.css'
const Login = () => {
    let navigate = useNavigate();
    const loginuser = e => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {


                console.log("Login success");
                navigate("/dashboard")



            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login_container'>
            <div className='login_form_container'>
                <div className='left1'>
                    <form className='form_container'>
                        <h1>Login to your Account</h1>
                        <input id='email' type="email" placeholder='Email' name='email' className='input' />
                        <input id='password' type="password" placeholder='Password' name='password' className='input' />
                        <button onClick={loginuser} type='submit' className='green_btn'>Sign In</button>
                    </form>
                </div>
                <div className="right1">
                    <h1>New Here ?</h1>
                    <Link to="/signup">
                        <button type='button' className='white_btn'>Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login