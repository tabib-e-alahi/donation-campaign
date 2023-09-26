// import { useState } from "react";
import PropTypes from 'prop-types';

const Banner = ({handleSearch}) => {
 


const handleSubmit = e =>{
  e.preventDefault()
  console.log(e.target.search.value);
  handleSearch(e.target.search.value);
  
}

// console.log(searchText);

  
  return (
    <div>

      <div className="text-center flex flex-col justify-center items-center mt-36 pb-[200px]">
        <h1 className="mb-10 text-5xl font-bold">
          I Grow By Helping People In Need
        </h1>

        <div className="form-control w-[450px]" >
          <form className="input-group " onSubmit={handleSubmit} >
            <input
              type="text"
              name="search"
              placeholder="Search…"
              className="input input-bordered w-9/12" 
            />
            <input type="submit" value="Search" className="btn  w-3/12 bg-[#FF444A] font-semibold text-white" />
            {/* <button  className="btn  w-3/12 bg-[#FF444A] font-semibold text-white">
              Search
            </button> */}
          </form>
        </div>
      </div>
      
    </div>
  );
};

Banner.propTypes = {
  handleSearch:PropTypes.func,
 
};

export default Banner;
