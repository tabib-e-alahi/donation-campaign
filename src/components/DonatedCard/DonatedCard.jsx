import PropTypes from "prop-types";

const DonatedCard = (donatedCard) => {
    // console.log(donatedCard);
  const {
    img,
    title,
    category_name,
    category_bg,
    card_bg,
    text_button_bg,
    price,
  } = donatedCard.donatedCard;
  return (
   
      <div className="card card-side ">
        <figure className="w-full md:w-1/3">
          <img className="w-full h-full"
            src={img}
            alt=""
          />
        </figure>
        <div style={{backgroundColor: card_bg}} className="card-body w-full p-6 rounded-r-lg">

            <p style={{backgroundColor: category_bg , color:text_button_bg}} className="px-3 py-1 w-max rounded text-sm">{category_name}</p>

          <h2  className="text-2xl font-semibold">{title}</h2>
          <p style={{color:text_button_bg}} className="text-base font-semibold">${price}</p>
          <div className="card-actions ">
            <button style={{backgroundColor:text_button_bg}} className="btn text-white">View Details</button>
          </div>
        </div>
      </div>
   
  );
};

DonatedCard.propTypes = {
  donatedCard: PropTypes.object,
};

export default DonatedCard;
