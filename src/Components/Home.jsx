import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useState } from 'react';

const Home = () => {
    const [activeCard, setActiveCard] = useState(null);
    const { user } = useContext(AuthContext)

    // Data for each card and its modal content
    const cardData = [
        {
            id: 1,
            title: "How it Works",
            subtitle:"WarmHeart Donation System typically works by facilitating the collection, sorting, and distribution of winter clothing to those in need.",
            image: "/pexels-akh-taufiq-202388902-15311442.jpg",
            modalContent: "A Winter Clothing Donation System typically works by facilitating the collection, sorting, and distribution of winter clothing to those in need. Here's an explanation of how such a system can function. Donation Drives: Organizations or individuals organize drives to collect winter clothing, such as jackets, sweaters, scarves, gloves, and blankets. Donors can bring their items to designated locations such as community centers, schools, or donation bins.In some systems, donors can register online and schedule pickups or receive addresses for drop-offs.",

        },
        {
            id: 2,
            title: "Event Schedule",
            subtitle:"The Winter Clothing Donation Event will take place from December 1st to December 15th, running daily from 10:00 AM to 6:00 PM.",
            image: "/pexels-simonreza-10789493.jpg",
            modalContent: "The Winter Clothing Donation Event will take place from December 1st to December 15th, running daily from 10:00 AM to 6:00 PM. Donations can be dropped off at the community center or designated collection points in the city. A special distribution day is planned for December 20th from 9:00 AM to 4:00 PM at the central park, where collected items will be distributed to those in need. Volunteers are welcome to assist during the event hours or on the distribution day.",
        },
        {
            id: 3,
            title: "Region of Services",
            subtitle:"Key areas include the northern districts like Rangpur, Dinajpur, and Thakurgaon, known for their harsh winters. Other priority regions are the hilly areas of Sylhet and Chattogram.",
            image: "/pexels-mushfik-hasnain-493473222-17562861.jpg",
            modalContent: "The Winter Clothing Drive in Bangladesh will focus on regions most affected by the cold. Key areas include the northern districts like Rangpur, Dinajpur, and Thakurgaon, known for their harsh winters. Other priority regions are the hilly areas of Sylhet and Chattogram, where vulnerable communities often face inadequate resources. Additionally, parts of the Mymensingh and Rajshahi divisions, which experience significant temperature drops, will be included. Urban areas such as Dhaka and Khulna will also be covered to support low-income families and street dwellers. This drive aims to reach every corner of the country where warmth is needed the most.",
        },
        {
            id: 4,
            title: "About Us",
            subtitle:"WarmHeart is a charitable initiative based in Bangladesh, dedicated to spreading warmth and hope during the cold winter months. Founded on the principle of giving back to the community. ",
            image: "/pexels-pixabay-326576.jpg",
            modalContent: "WarmHeart is a charitable initiative based in Bangladesh, dedicated to spreading warmth and hope during the cold winter months. Founded on the principle of giving back to the community, WarmHeart collects and distributes winter clothing to underprivileged individuals and families across the country. From the northern regions facing harsh cold to urban areas where street dwellers struggle to stay warm, we strive to make a meaningful impact.Through the generosity of donors and the commitment of volunteers, WarmHeart has become a beacon of support for those in need. Join us in our mission to ensure no one faces winter alone. Together, we can bring comfort, dignity, and warmth to countless lives.",
        },
    ];

    // Function to open modal and set active card
    const openModal = (cardId) => {
        setActiveCard(cardId);
    };

    // Function to close modal
    const closeModal = () => {
        setActiveCard(null);
    };

    return (
        <div
      
        >


            <div className='flex flex-col gap-4 justify-center items-center font-sumana my-12 text-black mx-4 animate__animated animate__backInLeft animate__slow '>
                <div className='space-y-5'>
                    <h1 className=' text-5xl leading-tight text-center font-medium'>Donate Winter Clothing, With WarmHearts</h1>
                    <h1 className=' text-center'>Join us in spreading warmth and kindness by donating winter clothing to those in need. <br />Your contribution can make a big difference in someone's life this winter.</h1>
                </div>



            </div>

           


            <div className='px-5 animate__animated animate__backInLeft animate__slow'>
                <div className="carousel w-full h-[600px]  ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="pexels-rdne-8580802.jpg"
                            className="w-full h-full object-cover rounded-xl" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="/pexels-kokorevas-11319520.jpg"
                            className="w-full h-full object-cover  rounded-xl" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="/pexels-julia-m-cameron-6995180.jpg"
                            className="w-full h-full object-cover  rounded-xl" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full  ">
                        <img
                            src="/pexels-julia-m-cameron-6995178.jpg"
                            className="w-full rounded-xl object-cover" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>



                <div className='my-14'>
                    <h1 className='text-5xl text-center font-sumana'>All about WarmHeart</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 w-full font-sumana animate__animated animate__backInLeft animate__slow   ">
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="card bg-base-100 image-full w-full h-72 shadow-xl cursor-pointer "
                            onClick={() => openModal(card.id)} // Open modal for specific card
                        >
                            <figure>
                                <img src={card.image} className='w-full' alt={card.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{card.title}</h2>
                                <p>{card.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Modal */}
                {activeCard && (
                    <dialog
                        open
                        className="modal bg-gray-900 bg-opacity-50 flex items-center justify-center"
                    >
                        <div className="modal-box w-full max-w-5xl">
                            <h3 className="font-bold text-lg">
                                {cardData.find((card) => card.id === activeCard)?.title}
                            </h3>
                            <p className="py-4">
                                {cardData.find((card) => card.id === activeCard)?.modalContent}
                            </p>
                            <div className="modal-action">
                                <button className="btn" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </dialog>
                )}


            </div>




        </div>
    );
};

export default Home;