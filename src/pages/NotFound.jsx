import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Your Blog</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-300">404</h1>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium transition-colors"
            >
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium transition-colors ml-0 sm:ml-4"
            >
              Go Back
            </button>
          </div>

          <div className="mt-12">
            <p className="text-gray-500 text-sm">
              If you believe this is an error, please{' '}
              <Link to="/contact" className="text-blue-600 hover:text-blue-700 underline">
                contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;