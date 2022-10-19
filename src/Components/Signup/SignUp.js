import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import './SignUp.css'

const SignUp = () => {
    const [error, setError] = useState(null);
    const { user, createUser } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        if (password.length < 6) {
            setError('Password Should be at least 6 Characters');
            return;
        }
        else if (password !== confirm) {
            setError('Password did not matched.');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(`${error}`);
            });

    }
    return (
        <div className='form-container'>
            <h3 className='form-title'>Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm"> Confirm Password</label>
                    <input type="password" name="confirm" placeholder='Confirm Password' required />
                </div>
                <button className='btn-submit'>Submit</button>
            </form>
            <p>Already have an account ? <Link to='/login'>Login.</Link> </p>
            {user?.uid && <p className='error-text'>{error}</p>}
        </div>
    );
};

export default SignUp;