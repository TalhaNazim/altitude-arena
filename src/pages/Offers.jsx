import React from 'react';
import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8">Special Offers</h1>
            <p className="text-xl mb-8">Amazing deals and discounts at Altitude Arena</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-lg border-2 border-yellow-300">
                <div className="bg-yellow-500 text-white px-4 py-2 rounded-full inline-block mb-4">
                  <span className="font-bold">WEEKEND SPECIAL</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Family Fun Package</h3>
                <p className="text-gray-600 mb-4">Perfect for families! Includes access to 3 activities for up to 4 people.</p>
                <p className="text-3xl font-bold text-orange-600 mb-4">AED 399</p>
                <p className="text-sm text-gray-500 line-through mb-2">Regular: AED 499</p>
                <Link to="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                  Book Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-lg border-2 border-blue-300">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full inline-block mb-4">
                  <span className="font-bold">STUDENT DISCOUNT</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Student Special</h3>
                <p className="text-gray-600 mb-4">20% off all activities with valid student ID. Valid Monday-Thursday.</p>
                <p className="text-3xl font-bold text-blue-600 mb-4">20% OFF</p>
                <p className="text-sm text-gray-500 mb-2">Show student ID at reception</p>
                <Link to="/contact-us" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                  Learn More
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg border-2 border-green-300">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-block mb-4">
                  <span className="font-bold">GROUP DEAL</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Group Booking</h3>
                <p className="text-gray-600 mb-4">Special rates for groups of 10 or more. Perfect for corporate events!</p>
                <p className="text-3xl font-bold text-green-600 mb-4">15% OFF</p>
                <p className="text-sm text-gray-500 mb-2">Minimum 10 people</p>
                <Link to="/contact-us" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
