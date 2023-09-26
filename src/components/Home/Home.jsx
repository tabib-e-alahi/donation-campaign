// import PropTypes from 'prop-types';

// import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";


const Home = () => {
 const [cards,setCards] = useState([]);

 useEffect(()=>{
  fetch('category_cards.json')
  .then(res => res.json())
  .then(data => setCards(data))
 },[])
 
 const handleSearch = (text) =>{
  console.log(text);
  const matchingCards = cards.filter(card => card.category_name === text)
  setCards(matchingCards);
 }

  return (
    <>
      <header className="mb-28">
        <div
          className="hero bg-cover"
          style={{
            backgroundImage: "url(https://i.ibb.co/nbtf14q/Rectangle-4281.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-95 bg-[#FFFFFFF2]"></div>
          <div className="w-full">
            <Navbar></Navbar>
            <Banner cards={cards} handleSearch={handleSearch}></Banner>
          </div>
        </div>
      </header>

      <main className="w-11/12 lg:max-w-7xl  mx-auto mb-10 md:mb-16 lg:mb-44">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 ">

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
