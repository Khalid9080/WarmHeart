import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sumana">
            <div className="text-center bg-white p-10 rounded-lg shadow-lg space-x-4">
                <h1 className="text-4xl font-semibold  text-red-500">Oops! Something went wrong</h1>
                <p className="mt-4 text-lg text-gray-600">The page you are looking for does not exist. Please check the link or return to the homepage.</p>
                <Link to='/' className='btn bg-orange-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-800 mt-4'> Go Back</Link>
            </div>
            
        </div>
    );
};

export default Error;
