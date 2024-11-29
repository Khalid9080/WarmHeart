import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleUpdateProfile = () => {
        navigate('/update'); // Redirect to the update profile page
    };

    return (
        <div>
            <h1 className='text-center font-sumana text-5xl my-6'>Your Dashboard</h1>
            <div className="card bg-base-100 font-mulish shadow-xl max-w-md sm:mx-auto mx-5">
                <figure className="p-8 h-2/3 overflow-hidden">
                    <img
                        src={user?.photoURL || 'default-avatar-url'}  // Use a default image if photoURL is missing
                        alt="User"
                        className="rounded-xl object-cover w-full h-full"
                    />
                </figure>
                <div className="p-8 -mt-10 space-y-4">
                    <h2 className="card-title">User Name: {user?.displayName || 'Guest'}</h2>
                    <p> User Email: {user?.email}</p>
                    <div className="card-actions pt-2">
                        {/* Update Profile Button */}
                        <button
                            className="btn font-mulish bg-amber-300 text-black hover:text-white hover:bg-orange-700"
                            onClick={handleUpdateProfile}
                        >
                            Update Your Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
