import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
    const navigate = useNavigate();
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photo, setPhoto] = useState(user?.photoURL || '');
    const [error, setError] = useState('');

    const handleUpdate = (event) => {
        event.preventDefault();

        // Validation for name
        if (name.length < 5) {
            setError('Name must be more than 5 characters long');
            return;
        }

        const updateData = {
            displayName: name,
            photoURL: photo,
        };

        updateUserProfile(updateData)
            .then(() => {
                toast.success('Profile updated successfully');
                // console.log('Profile updated successfully');

                // Wait for 2 seconds before navigating to the dashboard
                setTimeout(() => {
                    navigate('/dashboard'); // Redirect to dashboard after delay
                }, 2000); // 2000 ms = 2 seconds
            })
            .catch((error) => {
                toast.error(`Error: ${error.message}`);
                // console.log('Error:', error); // Log error message
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen font-mulish">
            <ToastContainer />
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleUpdate} className="card-body">
                    <h1 className='text-center text-3xl font-bold leading-snug pb-3'>
                        Update Profile
                    </h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            // value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    {error && (
                        <label className="label text-sm text-red-500">
                            {error}
                        </label>
                    )}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            // value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            placeholder="Photo URL"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control mt-4">
                        <button className="btn bg-black text-white hover:text-black">Update Information</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Update;
