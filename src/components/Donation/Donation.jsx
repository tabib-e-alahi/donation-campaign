
// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";
import { getStoredDonatedCard } from "../../utilities/localStorage";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import DonatedCard from "../DonatedCard/DonatedCard";

const Donation = () => {
    const cards = useLoaderData()

    const [donatedCards,setDonatedCards] = useState([]);
    const [showCardsLength ,setShowCardsLength] = useState([4]);

    useEffect(()=>{
        const donatedCardIds = getStoredDonatedCard();

        if(cards.length > 0){
const newDonatedCards = cards.filter(card => donatedCardIds.includes(card.id))
setDonatedCards(newDonatedCards);

        }
    },[cards])
    
   
    return (
        <div className="max-w-sm  md:max-w-2xl lg:max-w-7xl  mx-auto">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 mx-auto my-40">
                {
                    donatedCards.slice(0,showCardsLength).map((donatedCard,idx) => <DonatedCard key={idx} donatedCard={donatedCard}></DonatedCard>)
                }
            </div>
            <div className={`text-center mt-5 lg:mt-10 mb-40 ${showCardsLength === donatedCards.length ? 'hidden' : ''}`}>
            <button onClick={()=>setShowCardsLength (donatedCards.length)} className="btn btn-success px-6 text-white font-semibold">See All</button>
            </div>
        </div>
    );
};

Donation.propTypes = {
    
};

export default Donation;