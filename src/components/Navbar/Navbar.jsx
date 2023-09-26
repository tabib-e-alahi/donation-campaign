import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {

    const [open,setOpen] = useState(false)
  const links = (
    <>
      <li>
        <NavLink to="/" className="text-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/donation" className="text-lg ">
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink to="/statistics" className="text-lg">
          Statistics
        </NavLink>
      </li>
    </>
  );

  const handleToggleNavMenu = () =>{
    setOpen(!open)
  }

  return (
    <div>
      <div className="flex justify-between max-w-7xl mx-auto items-center px-4 lg:px-0 pt-6 md:pt-10 lg:pt-14">
        <img
          className="w-1/3 lg:w-64"
          src="https://i.ibb.co/Rzwq5F2/Logo.png"
          alt=""
        />
        <div className="">
          <AiOutlineMenu onClick={handleToggleNavMenu} className="md:hidden text-3xl"></AiOutlineMenu>
          <ul className={`flex flex-col md:flex-row gap-2 md:gap-10 duration-1000 md:duration-0 absolute right-4 md:static border-2 md:border-0 rounded-lg p-4 md:p-0  shadow-2xl md:shadow-none
            ${open ? 'top-16' : '-top-64'}`}>
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
