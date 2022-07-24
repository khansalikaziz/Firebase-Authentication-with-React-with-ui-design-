import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/config';
import '../style/Main.css'
const Main = () => {
    let navigate = useNavigate();
    const logout = e => {
        e.preventDefault();
        if (auth.currentUser) {
            console.log('Logout Success');
            auth.signOut();
            navigate("/signup");
        }
    }
    return (
        <div className='main__container'>
            <nav className='navbar'>
                <h1>Codeacademy</h1>
                <button onClick={logout} className='white_btn'>Logout</button>
            </nav>
        </div>
    )
}

export default Main