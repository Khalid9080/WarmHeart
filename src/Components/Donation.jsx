import React from 'react';
import Campaign_cards from './Campaign_cards';

const Donation = () => {
    return (
        <div className='animate__animated animate__backInLeft animate__slow'>
            <h1 className='font-sumana text-center text-5xl mx-3 leading-tight'>Donation Campaigns Around Bangladesh</h1>
            <div className='mt-10 mx-5 md:mx-0'>
                <Campaign_cards />
            </div>
        </div>
    );
};

export default Donation;