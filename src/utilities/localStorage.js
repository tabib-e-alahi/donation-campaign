
const getStoredDonatedCard = () =>{
    const storedDonatedCard = localStorage.getItem('card-donated');
    if(storedDonatedCard){
        return JSON.parse(storedDonatedCard);
    }
    return [];
}


const saveDonatedCard = id =>{
    const storedDonatedCards = getStoredDonatedCard();
    const isExists = storedDonatedCards.find(jobId => jobId === id);
     if(!isExists){
        storedDonatedCards.push(id);
        localStorage.setItem('card-donated',JSON.stringify(storedDonatedCards))
     }

}

export {saveDonatedCard,getStoredDonatedCard}