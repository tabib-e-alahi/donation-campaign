import { Outlet } from "react-router-dom";




const Root = () => {
    return (
        <div>
           
            {/* <img src="https://i.ibb.co/nbtf14q/Rectangle-4281.png" alt="" /> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;