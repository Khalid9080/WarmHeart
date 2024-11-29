import React, { useEffect, useState } from 'react';
import CCM from './CCM';


const Campaign_cards = () => {

    const [campaigns,setCampaign] = useState([]);

    useEffect(() => {
        fetch('./campaign.json')
        .then(res=>res.json())
        .then(data=> setCampaign(data));
    }, []);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    campaigns.map(campaign => <CCM ccard={campaign}  key={campaign.id}></CCM> )
                        
                
                }
               
            </div>
        </div>
    );
};

export default Campaign_cards;