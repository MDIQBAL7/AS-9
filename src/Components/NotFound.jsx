import React from "react";
import { Link } from "react-router";


const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-lg">
        
        {/* 404 Number */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-primary">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-3">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Button */}
        <div className="mt-6">
          <Link to="/" className="btn btn-primary px-8">
            Go Back Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
