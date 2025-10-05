import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const BirthdayParty = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Birthday Beast-nival at Altitude Arena</h1>
              <p className="text-xl mb-8">
                Planning a birthday celebration? Look no further than Altitude Arena! At Altitude Arena, we believe every birthday deserves to be unforgettable. Let us take the stress out of party planning and create a fun-filled experience for all ages.
              </p>
              <Link to="/contact-us" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg text-xl transition-colors">
                Book Your Party
              </Link>
            </div>
            <div className="flex justify-center">
              <img src={bearMascot} alt="Altitude Arena Mascot" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Party Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Birthday Party Packages</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Basic Package */}
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-lg border-2 border-pink-300">
                <div className="bg-pink-500 text-white px-4 py-2 rounded-full inline-block mb-6">
                  <h3 className="text-xl font-bold">BASIC PACKAGE</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-pink-500 text-xl">🎈</span>
                    <p>2 hours of unlimited fun</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-pink-500 text-xl">🎮</span>
                    <p>Access to all games and activities</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-pink-500 text-xl">🍕</span>
                    <p>Birthday cake and refreshments</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-pink-500 text-xl">🎁</span>
                    <p>Party decorations included</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-pink-500 text-xl">👥</span>
                    <p>Up to 10 children</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-pink-600 mb-4">AED 899</p>
                  <Link to="/contact-us" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>

              {/* Premium Package */}
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-lg border-2 border-purple-300">
                <div className="bg-purple-500 text-white px-4 py-2 rounded-full inline-block mb-6">
                  <h3 className="text-xl font-bold">PREMIUM PACKAGE</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-xl">🎈</span>
                    <p>3 hours of unlimited fun</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-xl">🎮</span>
                    <p>Access to all games and VIP areas</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-xl">🍕</span>
                    <p>Full meal and birthday cake</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-xl">🎁</span>
                    <p>Premium decorations & party favors</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-xl">👥</span>
                    <p>Up to 15 children</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-xl">🎪</span>
                    <p>Dedicated party host</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-purple-600 mb-4">AED 1,299</p>
                  <Link to="/contact-us" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Why Choose Altitude Arena for Birthday Parties?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Stress-Free Planning</h3>
                <p>We handle all the details so you can focus on celebrating. From decorations to entertainment, we've got you covered.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">All-Ages Fun</h3>
                <p>Our activities are designed for children and adults alike, ensuring everyone has a blast at the party.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Safe Environment</h3>
                <p>Our facility is designed with safety in mind, with trained staff supervising all activities.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Memorable Experience</h3>
                <p>Create lasting memories with unique activities and experiences that your child will never forget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Party Add-Ons</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-100 rounded-lg">
                <div className="text-4xl mb-4">🎂</div>
                <h3 className="text-xl font-bold mb-2">Custom Cake</h3>
                <p className="text-gray-600 mb-4">Personalized birthday cake with your child's favorite theme</p>
                <p className="text-lg font-bold text-orange-500">+AED 150</p>
              </div>

              <div className="text-center p-6 bg-gray-100 rounded-lg">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-bold mb-2">Photo Package</h3>
                <p className="text-gray-600 mb-4">Professional photographer to capture all the special moments</p>
                <p className="text-lg font-bold text-orange-500">+AED 200</p>
              </div>

              <div className="text-center p-6 bg-gray-100 rounded-lg">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-2">Party Favors</h3>
                <p className="text-gray-600 mb-4">Special goodie bags for all party guests</p>
                <p className="text-lg font-bold text-orange-500">+AED 100</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Plan the Perfect Birthday Party?</h2>
          <p className="text-xl mb-8">
            Contact us today to book your unforgettable birthday celebration at Altitude Arena!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Book Your Party
            </Link>
            <a href="tel:800258484" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Call: 800 ALTITUDE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthdayParty;
