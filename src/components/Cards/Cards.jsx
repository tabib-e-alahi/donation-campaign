import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Cards = ({ card }) => {

  const {id,img, title, category_name, category_bg, card_bg, text_button_bg } =
    card;
 
    const navigate = useNavigate()
    

    // console.log(parsedCard_bg,parsedCategory_bg,parsedText_button_bg);
    const handleDonationDetails = (id) =>{
      navigate(`/${id}`)
    }
    
  return (
   
      <div className="card" onClick={() => handleDonationDetails(id)}>
        <figure className="">
          <img className="w-full h-48" src={img} alt="" />
        </figure>
        <div style={{backgroundColor: card_bg}} className="card-body  p-4 rounded-b-lg">
          <p style={{backgroundColor: category_bg , color:text_button_bg}} className="px-3 py-0.5 w-max rounded text-sm font-medium">{category_name}</p>
          <h2 style={{color:text_button_bg}} className="text-xl font-semibold">{title}</h2>
        </div>
      </div>
   
  );
};

Cards.propTypes = {
  card: PropTypes.object,
};

export default Cards;
