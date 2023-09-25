const Banner = () => {
  return (
    <div>

      <div className="text-center flex flex-col justify-center items-center mt-36 pb-[200px]">
        <h1 className="mb-10 text-5xl font-bold">
          I Grow By Helping People In Need
        </h1>

        <div className="form-control w-[450px]">
          <div className="input-group ">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-9/12"
            />
            <button className="btn  w-3/12 bg-[#FF444A] font-semibold text-white">
              Search
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
