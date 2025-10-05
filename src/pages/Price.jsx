import React from 'react';
import { Link } from 'react-router-dom';

const Price = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-8">Pricing & Packages</h1>
            <p className="text-xl mb-8">Affordable fun for everyone at Altitude Arena</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Individual Activity Pricing</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-lg border-2 border-purple-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Laser Tag</h3>
                <div className="space-y-2">
                  <p><strong>Battle Island:</strong> AED 100 (60min)</p>
                  <p><strong>Star Shield:</strong> AED 99 (60min)</p>
                  <p className="text-sm text-gray-600">Height Min. 108cm</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg border-2 border-blue-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Bowling</h3>
                <div className="space-y-2">
                  <p><strong>Regular:</strong> AED 60 (Per Person)</p>
                  <p><strong>5 Pax:</strong> AED 249 (Per Hour)</p>
                  <p><strong>Hyperbowl:</strong> AED 299 (5 Pax/Hour)</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg border-2 border-green-300">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Trampoline</h3>
                <div className="space-y-2">
                  <p><strong>Per Person:</strong> AED 80</p>
                  <p><strong>Includes:</strong> All trampoline areas</p>
                  <p className="text-sm text-gray-600">Ninja courses, Sky rider, Donut slides</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-lg border-2 border-orange-300">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">VR Games</h3>
                <div className="space-y-2">
                  <p><strong>Per Session:</strong> AED 120</p>
                  <p><strong>Duration:</strong> 30 minutes</p>
                  <p className="text-sm text-gray-600">Immersive VR experience</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-6 rounded-lg border-2 border-pink-300">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">Arcade Games</h3>
                <div className="space-y-2">
                  <p><strong>Game Cards:</strong> Starting AED 25</p>
                  <p><strong>Unlimited:</strong> AED 150 (2 hours)</p>
                  <p className="text-sm text-gray-600">All arcade games included</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-6 rounded-lg border-2 border-indigo-300">
                <h3 className="text-2xl font-bold mb-4 text-indigo-600">Combo Packages</h3>
                <div className="space-y-2">
                  <p><strong>3 Activities:</strong> AED 199</p>
                  <p><strong>All Access:</strong> AED 299</p>
                  <p className="text-sm text-gray-600">Best value for multiple activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-orange-400">Group Discounts Available</h2>
            <p className="text-xl mb-8">Special rates for groups of 10 or more</p>
            <Link to="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl transition-colors">
              Contact for Group Rates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
