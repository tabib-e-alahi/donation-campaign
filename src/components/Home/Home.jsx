// import PropTypes from 'prop-types';

import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <header className="mb-24">
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
      <main>
        <Cards></Cards>
      </main>
    </>
  );
};

Home.propTypes = {};

export default Home;
