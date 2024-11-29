import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({});
    const navigate_profile = useNavigate();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Sign-Up Successful with Google!");
                navigate('/');
                setTimeout(() => {
                    navigate('/'); // Redirect to dashboard after delay
                }, 2000); // 2000 ms = 2 seconds
            })
            .catch((error) => {
                toast.error(`Google Sign-Up Failed: ${error.message}`);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
    
        // Reset the error state before validating
        setError({});
    
        // Validate name length
        if (name.length < 5) {
            setError({ ...error, name: "Name must be more than 5 characters long" });
            return;
        }
    
        // Password validation - broken into three parts
        const hasLowerCase = /(?=.*[a-z])/;
        const hasUpperCase = /(?=.*[A-Z])/;
        const hasDigitAndLength = /(?=.*\d).{6,}/;
    
        // Check the password against the validation rules
        if (!hasLowerCase.test(password)) {
            setError({
                ...error,
                password: "Password must contain at least one lowercase letter."
            });
            return;
        }
    
        if (!hasUpperCase.test(password)) {
            setError({
                ...error,
                password: "Password must contain at least one uppercase letter."
            });
            return;
        }
    
        if (!hasDigitAndLength.test(password)) {
            setError({
                ...error,
                password: "Password must be at least 6 characters long and contain at least one number."
            });
            return;
        }
    
        // Proceed with creating user if password is valid
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Successfully Registered!");
                
                setTimeout(() => {
                    navigate('/'); // Redirect to dashboard after delay
                }, 2000); // 2000 ms = 2 seconds
                event.target.reset();
    
                // Update the user profile
                updateUserProfile({
                    displayName: name,
                    photoURL: form.get("photo"),
                });
    
               
            })
            .catch((error) => {
                toast.error(`Error: ${error.message}`);
            });
    };
    

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen font-mulish">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className='text-center text-3xl font-bold leading-snug pb-3 font-sumana '> WarmHeart <br />Register Page</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        {error.name && (
                            <label className="label text-sm text-red-500">
                                {error.name}
                            </label>
                        )}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Photo-URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo-url" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-base">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className='btn btn-xs absolute right-3 bottom-3 '
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {error.password && (
                            <label className="label text-sm text-red-500">
                                {error.password}
                            </label>
                        )}
                        <div className="form-control mt-4">
                            <button className="btn  bg-black text-white hover:text-black">Register</button>

                            <button
                                onClick={handleGoogleSignIn}
                                className="flex mt-3 items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg shadow hover:shadow-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300"
                            >
                                <FcGoogle className="text-xl" />
                                <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
                            </button>
                        </div>
                        <h1 className='mt-2'>Already have an account? Go to <NavLink to="/login"><span className='text-red-500'>Login.</span></NavLink></h1>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
