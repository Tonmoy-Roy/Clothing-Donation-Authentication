import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { signinUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [success, setSuccess] = useState('');
    const [error1,setError1] = useState('');

    function login(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signinUser(email, password)
            .then(() => {
                setSuccess(true);
                navigate('/');
            })
            .catch((error) => {
                setError1(true);
                console.log('Error', error.message);
            })

    }
    return (
        <div>
            <p className='font-bold text-3xl text-center mb-5'>Login Now</p>
            <form onSubmit={login}>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse md:w-[20vw]">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body md:h-[40vh]">
                                <fieldset className="fieldset">
                                    {
                                        success && <p className='text-green-600 font-bold'>Login is Succesfull</p>
                                    }
                                    {
                                        error1 && <p className='text-red-600'>Please enter correct Email & Password !</p>
                                    }
                                    <label className="label">Email</label>
                                    <input name="email" type="email" className="input" placeholder="Email" required />
                                    <label className="label">Password</label>
                                    <input name="password" type="password" className="input" placeholder="Password" required />
                                    <p>Don't have an account ? please
                                        <Link className='text-red-600' to="/register"> register</Link></p>
                                    <button className="btn btn-primary mt-4">Login</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;