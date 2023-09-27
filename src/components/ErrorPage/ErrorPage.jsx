// import Navbar from "../Navbar/Navbar";

import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-red-800">Oops... Not found</h1>
            <p className="py-6">
              Your provided path is not available
            </p>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
