const getDonatedCardsPrice = cards =>{
    let cardPrice = 0;
    for(const card of cards){
       
     cardPrice  = cardPrice + card.price;
    }

    return cardPrice;
}


const getPercentage = (cardsPrice,donatedCardsPrice) =>{
    
    const remainingPrice = cardsPrice - donatedCardsPrice;
    const totalDonation = ((donatedCardsPrice/cardsPrice) * 100);
    const remainingDonation = ((remainingPrice/cardsPrice) * 100)
   

    return {totalDonation,remainingDonation}
}


export {getDonatedCardsPrice,getPercentage}