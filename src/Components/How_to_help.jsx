import React from 'react';

const How_to_help = () => {
    return (

        <div className="font-sumana mx-5 "> {/* Apply bg-gray-100 to the whole page */}
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-screen rounded-xl z-20" style={{ backgroundImage: "url('https://i.postimg.cc/cLwyDYXL/5-1.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl z-10"></div>
                <div className="relative z-20 text-center text-white py-32 mx-4">
                    <h1 className="text-5xl font-bold leading-tight">How You Can Help WarmHearts This Winter</h1>
                    <p className="mt-4 text-lg">Join us in providing warmth to those in need by donating winter clothing and supporting our mission.</p>
                </div>
            </section>


            {/* Steps to Help Section */}
            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800">How to Get Involved</h2>
                    <p className="mt-4 text-lg text-gray-600">Here are the different ways you can help make a difference this winter:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                        {/* Step 1: Donate Clothes */}
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800">Donate Winter Clothing</h3>
                            <p className="mt-4 text-gray-600">Your donation of coats, scarves, gloves, hats, and other winter clothing will make a huge impact on the lives of those in need.</p>
                            <a href="/donation" className="mt-6 inline-block bg-orange-700 text-white py-2 px-6 rounded-lg hover:bg-orange-800">Donate Now</a>
                        </div>
                        {/* Step 2: Volunteer */}
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800">Volunteer Your Time</h3>
                            <p className="mt-4 text-gray-600">Help us sort and distribute donations to the people who need them the most. Your time and effort will make a big difference.</p>
                            <a href="/error" className="mt-6 inline-block bg-orange-700 text-white py-2 px-6 rounded-lg hover:bg-orange-800">Become a Volunteer</a>
                        </div>
                        {/* Step 3: Spread the Word */}
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800">Spread the Word</h3>
                            <p className="mt-4 text-gray-600">Even if you're unable to donate or volunteer, you can still help by sharing our campaign on social media or telling your friends and family about it.</p>
                            <a href="/error" className="mt-6 inline-block bg-orange-700 text-white py-2 px-6 rounded-lg hover:bg-orange-800">Share the Campaign</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default How_to_help;
