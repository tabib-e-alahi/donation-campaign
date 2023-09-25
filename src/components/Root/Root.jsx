import { Outlet } from "react-router-dom";
// import Home from "../Home/Home";
// import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            {/* <img src="https://i.ibb.co/nbtf14q/Rectangle-4281.png" alt="" /> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;