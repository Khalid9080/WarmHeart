import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [activeLink, setActiveLink] = useState('/'); // Track active link
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state
    

    const links = (
        <div className='md:space-x-5 text-base text-black'>
            {/* Navigation Links */}
            <NavLink
                to='/'
                onClick={() => setActiveLink('/')}
                className={`btn btn-ghost ${activeLink === '/' ? 'bg-orange-700 text-white' : 'hover:bg-orange-700 hover:text-white'}`}
            >
                Home
            </NavLink>
            <NavLink
                to='/donation'
                onClick={() => setActiveLink('/donation')}
                className={`btn btn-ghost ${activeLink === '/donation' ? 'bg-orange-700 text-white' : 'hover:bg-orange-700 hover:text-white'}`}
            >
                Donation Campaigns
            </NavLink>
            <NavLink
                to='/donation_details'
                onClick={() => setActiveLink('/donation_details')}
                className={`btn btn-ghost ${activeLink === '/donation_details' ? 'bg-orange-700 text-white' : 'hover:bg-orange-700 hover:text-white'}`}
            >
                Donation Details
            </NavLink>
            <NavLink
                to='/dashboard'
                onClick={() => setActiveLink('/dashboard')}
                className={`btn btn-ghost ${activeLink === '/dashboard' ? 'bg-orange-700 text-white' : 'hover:bg-orange-700 hover:text-white'}`}
            >
                Dashboard
            </NavLink>
            <NavLink
                to='/how_to_help'
                onClick={() => setActiveLink('/how_to_help')}
                className={`btn btn-ghost ${activeLink === '/how_to_help' ? 'bg-orange-700 text-white' : 'hover:bg-orange-700 hover:text-white'}`}
            >
                How to help
            </NavLink>
        </div>
    );

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    };

    // Function to handle button clicks and set the active button
    const handleButtonClick = (button) => {
        setActiveLink(button);
    };
    // console.log(  
    //     user?.photoURL,
    //     user?.displayName,
    //     user?.email  
    // );

    return (
        <div className="navbar font-mulish text-black">
            {/* Left: Logo */}
            <div className="navbar-start">
                <div className="dropdown relative">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={handleDropdownToggle}
                        className="btn btn-ghost lg:hidden flex flex-col"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    {/* Mobile Dropdown Links */}
                    {isDropdownOpen && (
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box flex flex-col z-50 mt-3 w-52 p-2 shadow absolute"
                        >
                            {links}
                        </ul>
                    )}
                </div>

                {/* Logo */}
                <div className='gap-3 flex items-center text-black'>
                    <img src="./logo1.webp" className='w-10 h-10 lg:w-16 lg:h-16 md:w-12 md:h-12 rounded-full' alt="Logo" />
                    <h1 className='lg:text-4xl md:text-2xl sm:text-base font-extrabold'>WarmHeart</h1>
                </div>
            </div>

            {/* Center: Links (Desktop Only) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {links}
                </ul>
            </div>

            {/* Right: Authentication Links */}
            
            <div className="navbar-end flex items-center gap-4">
            {/* {user ? (
        <img
          src={user.photoURL || 'default-avatar-url'}  // Show the user's photo or a default one
          alt="User Avatar"
          className="rounded-full"
        />
      ) : (
        <p>No user logged in</p>
      )} */}
                {user  ? (
                    <>
                        <img
                       
                            src={user?.photoURL}
                            alt="User"
                            className="object-cover w-14 h-14 rounded-full"
                        />
                        <button onClick={logOut} className='btn btn-warning'>Logout</button>
                    </>
                ) : (
                    <div className="gap-3 flex">
                        {/* Register Button with Default Styling */}
                        <NavLink
                            to='/signup'
                            className={`btn border-0 btn-sm md:btn-md ${activeLink === '/signup' ? 'bg-orange-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-800' : 'border-2 btn-ghost border-orange-700 text-orange-700 font-bold py-2 px-4 rounded-lg hover:bg-orange-800 hover:text-white'}`}
                            onClick={() => handleButtonClick('/signup')}
                        >
                            Register
                        </NavLink>
                        {/* Login Button with Default Styling */}
                        <NavLink
                            to='/login'
                            className={`btn border-0 btn-sm md:btn-md ${activeLink === '/login' ? 'bg-orange-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-800' : 'border-2 btn-ghost border-orange-700 text-orange-700 font-bold py-2 px-4 rounded-lg hover:bg-orange-800 hover:text-white'}`}
                            onClick={() => handleButtonClick('/login')}
                        >
                            Login
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
