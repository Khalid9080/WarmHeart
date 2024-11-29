import React, { useContext, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate(); // Add navigation
  const location = useLocation();
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
 
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);  // Update the user context with the latest user
        toast.success("Login Successful with Google!");
        navigate(location?.state || '/');
      })
      .catch((error) => {
        toast.error(`Google Sign-In Failed: ${error.message}`);
      });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // Show the success toast
        toast.success("Login Successful!");

        // Wait for a moment before navigating to the next page
        setTimeout(() => {
          navigate(location?.state || '/');  // Redirect to the homepage or previous page
        }, 2000); // 3-second delay to show the toast before navigation



      })
      .catch((err) => {
        toast.error("Unable to login");
        setError({ ...error, login: err.code });
      });
  }
  const handleForgetPassword = (e) => {
    const email = emailRef.current.value;
    // console.log("Email entered: ", email);

    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success('Password reset email sent to Email Address!');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(`Error: ${errorMessage}`);
          // console.log(errorCode, errorMessage);  // Check error for more details
        });
    }
  };



  return (
    <div>
      <div className="hero bg-base-200 min-h-screen font-mulish">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className='text-center text-3xl font-bold leading-snug font-sumana'> WarmHeart <br />Login Page</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" />

            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className='btn btn-xs absolute right-3 top-12'>
                {
                  showPassword ? <FaEyeSlash /> : <FaEye />
                }
              </button>

              {/* Displaying error message below the password field */}
              {error.login && <label className="label text-sm text-red-500">
                {error.login}
              </label>}

              <label onClick={handleForgetPassword} className="label">
                <a className="text-sm link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-5">

              <button className="btn  bg-black text-white hover:text-black" >Login</button>

              <button
                onClick={handleGoogleSignIn}
                className="flex mt-5 items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg shadow hover:shadow-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300"
              >
                <FcGoogle className="text-xl" />
                <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
              </button>
            </div>

            <h1 className='mt-2'>
              Do not have an account? Go to <NavLink to="/signup"><span className='text-red-500'>Register.</span></NavLink>
            </h1>
          </form>
        </div>
      </div>

      {/* Toast container should be placed here for notifications */}
      <ToastContainer />
    </div>
  );
};

export default Login;

