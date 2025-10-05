import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../assets/bear_mascot.png';

const AltitudeLounge = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Altitude Lounge</h1>
              <h2 className="text-3xl font-bold mb-8 text-amber-300">Premium Dining & Relaxation</h2>
              <p className="text-xl mb-8">
                Unwind in our sophisticated lounge area with premium food, beverages, and comfortable seating while enjoying views of the action.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400">LOUNGE ACCESS</h3>
                <p className="text-lg">Complimentary with any activity</p>
                <p className="text-sm text-gray-300">Premium menu available</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={bearMascot} alt="Altitude Arena Mascot" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Lounge Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-amber-600">Lounge Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">🛋️ Comfortable Seating</h3>
                <p>Plush sofas, armchairs, and booth seating designed for relaxation and conversation.</p>
              </div>

              <div className="bg-orange-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">🍽️ Premium Dining</h3>
                <p>Gourmet menu featuring international cuisine, fresh salads, and artisanal beverages.</p>
              </div>

              <div className="bg-red-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-600">📺 Entertainment Screens</h3>
                <p>Large screens showing live sports, entertainment, and views of the gaming areas.</p>
              </div>

              <div className="bg-yellow-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">☕ Specialty Beverages</h3>
                <p>Barista-made coffee, fresh juices, smoothies, and a selection of hot and cold beverages.</p>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">🌐 Free WiFi</h3>
                <p>High-speed internet access for business meetings or staying connected with friends.</p>
              </div>

              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">🎵 Ambient Music</h3>
                <p>Carefully curated background music creating the perfect atmosphere for relaxation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-600">Menu Highlights</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-amber-600">🍕 Main Courses</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Gourmet Pizza</span>
                    <span className="font-bold">AED 45</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Grilled Chicken Burger</span>
                    <span className="font-bold">AED 38</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pasta Primavera</span>
                    <span className="font-bold">AED 42</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fish & Chips</span>
                    <span className="font-bold">AED 48</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Caesar Salad</span>
                    <span className="font-bold">AED 32</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">🥤 Beverages</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Fresh Orange Juice</span>
                    <span className="font-bold">AED 18</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Specialty Coffee</span>
                    <span className="font-bold">AED 15</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fruit Smoothie</span>
                    <span className="font-bold">AED 22</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Soft Drinks</span>
                    <span className="font-bold">AED 12</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Iced Tea</span>
                    <span className="font-bold">AED 14</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-600">🍰 Desserts & Snacks</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Chocolate Cake</span>
                    <span className="font-bold">AED 25</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fresh Fruit Platter</span>
                    <span className="font-bold">AED 28</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Nachos & Dip</span>
                    <span className="font-bold">AED 24</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ice Cream Sundae</span>
                    <span className="font-bold">AED 20</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mixed Nuts</span>
                    <span className="font-bold">AED 16</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Lounge Special Offers</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-amber-400">🍽️ Family Meal Deal</h3>
                <p className="mb-4">Perfect for families enjoying activities together.</p>
                <ul className="space-y-2 mb-4">
                  <li>• 2 Main courses</li>
                  <li>• 4 Beverages</li>
                  <li>• 1 Dessert to share</li>
                </ul>
                <p className="text-xl font-bold text-amber-400">AED 149 (Save AED 30)</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">☕ Business Meeting Package</h3>
                <p className="mb-4">Ideal for corporate team building events.</p>
                <ul className="space-y-2 mb-4">
                  <li>• Reserved seating area</li>
                  <li>• Coffee & tea service</li>
                  <li>• Light snacks</li>
                  <li>• Free WiFi access</li>
                </ul>
                <p className="text-xl font-bold text-orange-400">AED 75 per person</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-400">🎉 Birthday Celebration</h3>
                <p className="mb-4">Make birthdays extra special in the lounge.</p>
                <ul className="space-y-2 mb-4">
                  <li>• Decorated table setup</li>
                  <li>• Birthday cake</li>
                  <li>• Party beverages</li>
                  <li>• Photo opportunities</li>
                </ul>
                <p className="text-xl font-bold text-green-400">AED 199 (Up to 8 people)</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">🕐 Happy Hour</h3>
                <p className="mb-4">Special pricing during off-peak hours.</p>
                <ul className="space-y-2 mb-4">
                  <li>• Monday-Thursday 2-5 PM</li>
                  <li>• 25% off all beverages</li>
                  <li>• 15% off appetizers</li>
                  <li>• Extended seating time</li>
                </ul>
                <p className="text-xl font-bold text-purple-400">Daily 2-5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Experience Premium Comfort</h2>
          <p className="text-xl mb-8">
            Reserve your spot in Altitude Lounge for the ultimate dining and relaxation experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="bg-white text-amber-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Reserve Your Table
            </Link>
            <a href="tel:800258484" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Call: 800 ALTITUDE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AltitudeLounge;
