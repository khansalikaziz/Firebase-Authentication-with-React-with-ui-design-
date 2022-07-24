import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/config';
import '../style/Signup.css'
const Signup = () => {
    let navigate = useNavigate();
    const createuser = e => {

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log("Signup success");
                navigate("/login");
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='signup_container'>
            <div className='signup_form_container'>
                <div className='left'>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button className='white_btn'>Sign in</button>
                    </Link>
                </div>
                <div className='right'>
                    <form className='form_container'>
                        <h1>Create Account</h1>
                        <input type="text" placeholder='First Name' name='firstName' required className='input' />
                        <input type="text" placeholder='Last Name' name='lastName' required className='input' />
                        <input id='email' type="email" placeholder='Email' name='email' required className='input' />
                        <input id='password' type="password" placeholder='Password' name='password' required className='input' />
                        <button onClick={createuser} type='submit' className='green_btn'>Sign Up</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup