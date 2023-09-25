import PropTypes from "prop-types";

const Cards = ({ card }) => {

  const { img, title, category_name, category_bg, card_bg, text_button_bg } =
    card;
  
    

    // console.log(parsedCard_bg,parsedCategory_bg,parsedText_button_bg);
    
  return (
   
      <div className="card ">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div style={{backgroundColor: card_bg}} className="card-body p-4 rounded-lg">
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
