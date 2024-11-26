import React from 'react';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-lime-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <a 
          href="/" 
          className="mt-6 inline-block bg-lime-600 text-white py-3 px-6 rounded-md hover:bg-lime-700 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
