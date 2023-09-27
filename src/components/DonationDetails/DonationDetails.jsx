import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { saveDonatedCard } from "../../utilities/localStorage";

import swal from 'sweetalert'


const DonationDetails = () => {
  const cardDetails = useLoaderData();

  const id = useParams();
  const intId = parseInt(id.id);

  //   console.log(cardDetails);
  const donationDetails = cardDetails.find(
    (cardDetail) => cardDetail.id === intId
  );
  const { cover_img, title, description, price, text_button_bg } =
    donationDetails;

  const handleDonatedCard = () => {
    const exist = saveDonatedCard(intId);
   
    if(exist === 'exist'){
      swal({
        title: "Already Donated",
        text: "After 48 hours, again you can donate",
        icon: "error",
        button: "Close",
        
      });
      return
    }
   
    swal({
      title: "Successfully Donated",
      text: "Thanks for the donation!",
      icon: "success",
      button: "Close",
      
    });
  };

  return (
    <div className="max-w-sm md:max-w-2xl lg:max-w-7xl mx-auto">
      <Navbar></Navbar>
      <section className="  my-36 md:my-20 rounded-lg ">
        <div className="mb-14 relative">
          <img className="w-full lg:h-[700px] rounded-lg" src={cover_img} alt="" />
          <div className="absolute bottom-0 bg-[#0B0B0B80] p-6 md:p-10 w-full rounded-b-lg">
            <div className="bg-opacity-95 w-full"></div>
            <button
              onClick={handleDonatedCard}
              className="px-7 py-4 text-white rounded"
              style={{ backgroundColor: text_button_bg }}
            >
              Donate ${price}
            </button>
          </div>
        </div>
        <div>
          <h1 className="mb-6 text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="text-justify">{description}</p>
        </div>
      </section>
     
    </div>
  );
};

DonationDetails.propTypes = {
  id: PropTypes.string,
};

export default DonationDetails;
