

const getDonatedCardsPrice = cards =>{
    let cardPrice = 0;
    for(const card of cards){
       
     cardPrice  = cardPrice + card.price;
    }

    return cardPrice;
}


const getPercentage = (cardsPrice,donatedCardsPrice) =>{
    // console.log(cardsPrice,donatedCardsPrice);
    const remainingPrice = cardsPrice - donatedCardsPrice;
    const totalDonation = ((donatedCardsPrice/cardsPrice) * 100);
    const remainingDonation = ((remainingPrice/cardsPrice) * 100)
    // console.log(totalDonationPercentage);
    // console.log(remainingDonationPercentage);

    return {totalDonation,remainingDonation}
}


export {getDonatedCardsPrice,getPercentage}