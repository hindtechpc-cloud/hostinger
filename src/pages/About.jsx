import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Your Blog</title>
        <meta name="description" content="Learn more about our mission and the team behind our blog." />
      </Helmet>

      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dedicated to sharing knowledge, insights, and the latest trends in technology and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <img 
              src="/assets/about-hero.jpg" 
              alt="About our blog" 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We believe in the power of shared knowledge. Our mission is to create a platform where developers, 
              tech enthusiasts, and lifelong learners can come together to explore, learn, and grow.
            </p>
            <p className="text-gray-600">
              Through high-quality tutorials, in-depth articles, and practical guides, we aim to make complex 
              technical concepts accessible to everyone.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">T</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Tutorials</h3>
              <p className="text-gray-600 text-sm">
                Step-by-step guides to help you master new technologies and frameworks.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">I</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Insights</h3>
              <p className="text-gray-600 text-sm">
                Deep dives into industry trends, best practices, and emerging technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">C</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                A welcoming space for developers to share knowledge and collaborate.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you're a seasoned developer or just starting your coding journey, 
            we're here to support your growth and learning. Subscribe to our newsletter 
            to stay updated with our latest articles and resources.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;