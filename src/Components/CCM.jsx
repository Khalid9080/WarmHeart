

import React from 'react';
import { useNavigate } from 'react-router-dom';

const CCM = ({ ccard }) => {
    const { image, title, description, division } = ccard;
    const navigate = useNavigate(); // Add navigation
    const handleDonate = () => {
        navigate('/donation_details'); // Redirect to donation
    };
    return (
       
            <div className="card bg-base-100 font-mulish shadow-xl">
                <figure className="p-8 h-2/3 overflow-hidden">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl object-cover w-full h-full " />
                </figure>
                <div className="p-8 -mt-10 space-y-4">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className='font-semibold'>{division}</p>
                    <div className="card-actions pt-2">
                    
                        <button 
                         onClick={handleDonate}
                        className="btn font-mulish  bg-amber-300 text-black hover:text-white hover:bg-orange-700">Donate Now</button>
                    </div>
                </div>
            </div>
        
    );
};

export default CCM;










// <div className="card bg-base-100 shadow-xl w-80 h-96 flex flex-col">
// {/* Image Section */}
// <figure className="h-2/3 overflow-hidden">
//     <img
//         src={image}
//         alt={title}
//         className="w-full h-full object-cover"
//     />
// </figure>

// {/* Content Section */}
// <div className="h-1/3 p-4 flex flex-col justify-between">
//     <div>
//         <h2 className="card-title text-lg font-bold">{title}</h2>
//         <p className="text-sm text-gray-600">{description}</p>
//         <p className="text-sm text-gray-500">{division}</p>
//     </div>
//     <div className="card-actions mt-4">
//         <button className="btn btn-primary w-full">Buy Now</button>
//     </div>
// </div>
// </div>