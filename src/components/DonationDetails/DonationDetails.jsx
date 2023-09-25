import PropTypes from "prop-types";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const DonationDetails = () => {
  const cardDetails = useLoaderData();

  const id = useParams();
  const intId = parseInt(id.id);

  console.log(cardDetails);
  const donationDetails = cardDetails.find(
    (cardDetail) => cardDetail.id === intId
  );
  const { cover_img, title, description, price, text_button_bg } =
    donationDetails;

  return (
    <div>
      <Navbar></Navbar>
      <section className="max-w-7xl mx-auto my-20 rounded-lg ">
        <div className="mb-14 relative">
          <img className="w-full h-[700px] " src={cover_img} alt="" />
          <div className="absolute bottom-0 bg-[#0B0B0B80] p-10 w-full rounded-b-lg">
            <div className="bg-opacity-95 w-full"></div>
            <button
              className="px-7 py-4 text-white rounded"
              style={{ backgroundColor: text_button_bg }}
            >
              Donate ${price}
            </button>
          </div>
        </div>
        <div>
          <h1 className="mb-6 text-4xl font-bold">{title}</h1>
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
