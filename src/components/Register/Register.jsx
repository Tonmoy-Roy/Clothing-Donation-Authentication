import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [signupok, setSignupok] = useState('');
    const [signuperror, setSignuperror] = useState('');
    const { updateUser } = useContext(AuthContext);

    function signUp(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(() => {
                setSignupok(true);
                updateUser({ displayName: name, photoURL: photo });
            })
            .catch((error) => {
                setSignuperror(true);
                console.log('Error', error.message)
            })

    }
    return (
        <div>
            <p className='font-bold text-3xl text-center mb-5'>Register Your Account</p>
            <form onSubmit={signUp}>
                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse md:w-[20vw]">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                {
                                    signupok && <p className='text-green-600 font-bold'>Registration is Successfull.</p>
                                }
                                {
                                    signuperror && <p className='text-red-600 font-bold'>Please enter correct information !</p>
                                }
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input name="name" type="text" className="input" placeholder="Email" required />
                                    <label className="label">Photo URL</label>
                                    <input name="photo" type="text" className="input" placeholder="Photo URL" required />
                                    <label className="label">Email</label>
                                    <input name="email" type="email" className="input" placeholder="Email" required />
                                    <label className="label">Password</label>
                                    <input name="password" type="password" className="input" placeholder="Password" required />
                                    <button className="btn btn-primary mt-4">Sign Up</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;