import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import './Login.css'

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const Navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                Navigate(from, { replace: true })
            })
            .catch(error => console.error(error));

    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Login.</h3>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required placeholder='Email' />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required placeholder='Password' />
                </div>
                <button className='btn-submit'>Login</button>
            </form>
            <p>New to Ema john ? <Link to='/signup'>Create a New Account.</Link> </p>
        </div>
    );
};

export default Login;