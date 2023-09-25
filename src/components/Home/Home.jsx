// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const cards = useLoaderData();
  // console.log(cards);

  return (
    <>
      <header className="mb-28">
        <div
          className="hero  bg-cover"
          style={{
            backgroundImage: "url(https://i.ibb.co/nbtf14q/Rectangle-4281.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-95 bg-[#FFFFFFF2]"></div>
          <div className="w-full ">
            <Navbar></Navbar>
            <Banner></Banner>
          </div>
        </div>
      </header>

      <main className="max-w-7xl  mx-auto mb-44">

        <div className="grid grid-cols-4 gap-5">

          {

            cards.map(card => <Cards key={card.id} card={card}></Cards>)

          }

        </div>

      </main>
    </>
  );
};

Home.propTypes = {};

export default Home;
