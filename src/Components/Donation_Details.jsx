import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer here
import 'react-toastify/dist/ReactToastify.css';

const Donation_Details = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // State for form inputs
    const [itemName, setItemName] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [opinion, setOpinion] = useState('');

    useEffect(() => {
        fetch('./campaign.json')
            .then(res => res.json())
            .then(data => {
                setCampaigns(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching campaign data:', error);
                setIsLoading(false);
            });
    }, []);

    // If campaigns are loading or not available, show a loading message or fallback
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (campaigns.length === 0) {
        return <div>No campaigns available</div>;
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        if (!itemName || !selectedItem || !quantity || !pickupLocation) {
            toast.error('Please fill in all the fields');
            return;
        }

        // Success toast message
        toast.success('Thank you ! We will reach your destination soon');

        // Clear the form after submission
        setItemName('');
        setSelectedItem('');
        setQuantity('');
        setPickupLocation('');
        setOpinion('');
    };

    return (
        <div>
            <h1 className='text-center text-5xl text-slate-900 font-sumana my-10 mx-4 animate__animated animate__backInLeft animate__slow'>WarmHeart Donation Details</h1>
            <div
                className="hero min-h-screen md:rounded-xl overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: "url(https://i.postimg.cc/6qnpFvxC/pexels-julia-m-cameron-6994831.jpg)",
                }}
            >
                <div className="hero-overlay bg-opacity-60 "></div>
                <div className="flex flex-col md:flex-row items-center text-neutral-content text-center p-10 gap-10 animate__animated animate__backInLeft animate__slow">
                    <div className='flex flex-col space-y-10 max-w-xl w-full h-5/6'>
                        <h1 className='text-7xl text-center font-sumana py-14'>Donate and Join with us</h1>
                        <div className="card bg-slate-50 bg-opacity-60 shrink-0 shadow-2xl font-mulish">
                            <form className="card-body text-slate-900" onSubmit={handleSubmit}>
                                <h1 className='text-4xl font-sumana'>Donation Form</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base">Items you want to donate </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Items name"
                                        className="input input-bordered w-full"
                                        value={itemName}
                                        onChange={(e) => setItemName(e.target.value)}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base">Or Select Your Items</span>
                                    </label>
                                    <select
                                        className="select w-full"
                                        value={selectedItem}
                                        onChange={(e) => setSelectedItem(e.target.value)}
                                    >
                                        <option disabled value="">Pick clothing for donation</option>
                                        <option>Coats</option>
                                        <option>Shirts</option>
                                        <option>Jeans</option>
                                        <option>Dresses</option>
                                        <option>Sweaters</option>
                                        <option>Hats</option>
                                        <option>Scarves</option>
                                        <option>Jackets</option>
                                        <option>Gloves</option>
                                        <option>Socks</option>
                                        <option>Blankets</option>
                                        <option>Boots</option>
                                        <option>Shoes</option>
                                        <option>Handbags</option>
                                        <option>Backpacks</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base">Quantity of the Items</span>
                                    </label>
                                    <select
                                        className="select w-full"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                    >
                                        <option disabled value="">Add quantity</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base">Pickup Location</span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered"
                                        placeholder="Add location"
                                        value={pickupLocation}
                                        onChange={(e) => setPickupLocation(e.target.value)}
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base">Share your opinion</span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-lg textarea-bordered"
                                        value={opinion}
                                        onChange={(e) => setOpinion(e.target.value)}
                                    />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-slate-900 text-white hover:text-slate-900 border-0">
                                        Submit Donation
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white font-sumana">
                        {/* Map through campaigns and display each */}
                        {campaigns.map((campaign, index) => (
                            <div key={index} className="card bg-base-100 bg-opacity-50 w-full max-w-sm shadow-2xl">
                                <div className="card-body">
                                    <h2 className="text-2xl font-bold">{campaign.title}</h2>
                                    <p>{campaign.description}</p>
                                    <p><strong>Division:</strong> {campaign.division}</p>
                                    <p><strong>Status:</strong> {campaign.status}</p>
                                    <p><strong>Contact Info:</strong> {campaign.contactInfo}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ToastContainer /> {/* Add ToastContainer to render the toasts */}
        </div>
    );
};

export default Donation_Details;
