import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const TeamBuilding = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Team Building Events</h1>
              <h2 className="text-3xl font-bold mb-8 text-blue-300">Strengthen Your Team Through Fun</h2>
              <p className="text-xl mb-8">
                Build stronger teams through exciting challenges and collaborative activities at Altitude Arena.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400">TEAM BUILDING PACKAGE</h3>
                <p className="text-lg">Starting from AED 150 per person</p>
                <p className="text-sm text-gray-300">Minimum 10 people, includes activities and refreshments</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={bearMascot} alt="Altitude Arena Mascot" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Building Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">Team Building Activities</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">🎯 Laser Tag Tournaments</h3>
                <p className="mb-4">Strategic team-based laser tag battles that require communication, planning, and coordination to succeed.</p>
                <ul className="text-sm space-y-1">
                  <li>• Multiple game modes available</li>
                  <li>• Team strategy development</li>
                  <li>• Leadership skills enhancement</li>
                </ul>
              </div>

              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">🏆 Bowling Competitions</h3>
                <p className="mb-4">Friendly bowling competitions that encourage teamwork and healthy competition among colleagues.</p>
                <ul className="text-sm space-y-1">
                  <li>• Team vs team tournaments</li>
                  <li>• Skills development workshops</li>
                  <li>• Celebration of achievements</li>
                </ul>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">🧩 Escape Room Challenges</h3>
                <p className="mb-4">Problem-solving adventures that require teams to work together under pressure to achieve common goals.</p>
                <ul className="text-sm space-y-1">
                  <li>• Critical thinking development</li>
                  <li>• Communication under pressure</li>
                  <li>• Collaborative problem solving</li>
                </ul>
              </div>

              <div className="bg-orange-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">🤸 Trampoline Team Challenges</h3>
                <p className="mb-4">Fun physical challenges that break down barriers and encourage team members to support each other.</p>
                <ul className="text-sm space-y-1">
                  <li>• Trust-building exercises</li>
                  <li>• Physical team challenges</li>
                  <li>• Stress relief activities</li>
                </ul>
              </div>

              <div className="bg-pink-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">🕹️ Arcade Tournaments</h3>
                <p className="mb-4">Multi-game arcade tournaments that bring out friendly competition and team spirit.</p>
                <ul className="text-sm space-y-1">
                  <li>• Multiple game stations</li>
                  <li>• Point-based team scoring</li>
                  <li>• Prize ceremonies</li>
                </ul>
              </div>

              <div className="bg-cyan-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-cyan-600">🥽 VR Team Experiences</h3>
                <p className="mb-4">Immersive virtual reality experiences designed for team collaboration and shared adventures.</p>
                <ul className="text-sm space-y-1">
                  <li>• Cooperative VR missions</li>
                  <li>• Shared virtual experiences</li>
                  <li>• Technology team building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-indigo-600">Team Building Packages</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full inline-block mb-6">
                  <h3 className="text-xl font-bold">STARTER PACKAGE</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-500 text-xl">⏰</span>
                    <p>3 hours of activities</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-500 text-xl">🎮</span>
                    <p>2 team activities</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-500 text-xl">☕</span>
                    <p>Light refreshments</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-500 text-xl">👥</span>
                    <p>10-20 participants</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-4">AED 150/person</p>
                  <Link to="/contact-us" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-300">
                <div className="bg-purple-500 text-white px-4 py-2 rounded-full inline-block mb-6">
                  <h3 className="text-xl font-bold">PROFESSIONAL PACKAGE</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-xl">⏰</span>
                    <p>5 hours of activities</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-xl">🎮</span>
                    <p>4 team activities</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-xl">🍽️</span>
                    <p>Full lunch included</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-xl">👥</span>
                    <p>20-50 participants</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-500 text-xl">🎪</span>
                    <p>Dedicated facilitator</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-purple-600 mb-4">AED 220/person</p>
                  <Link to="/contact-us" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full inline-block mb-6">
                  <h3 className="text-xl font-bold">EXECUTIVE PACKAGE</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-xl">⏰</span>
                    <p>Full day experience</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-xl">🎮</span>
                    <p>All activities access</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-xl">🍽️</span>
                    <p>Premium catering</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-xl">👥</span>
                    <p>50+ participants</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-xl">🎪</span>
                    <p>Professional team coach</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-xl">📊</span>
                    <p>Team assessment report</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-2xl font-bold text-orange-600 mb-4">AED 350/person</p>
                  <Link to="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Team Building Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Improved Communication</h3>
                <p>Activities designed to enhance communication skills and break down barriers between team members.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-400">Enhanced Collaboration</h3>
                <p>Collaborative challenges that require teams to work together to achieve common objectives.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Stress Relief</h3>
                <p>Fun activities that help reduce workplace stress and improve overall team morale.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Leadership Development</h3>
                <p>Opportunities for team members to develop and showcase leadership skills in a fun environment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Strengthen Your Team?</h2>
          <p className="text-xl mb-8">
            Contact us today to plan your customized team building experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Plan Your Event
            </Link>
            <a href="tel:800258484" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Call: 800 ALTITUDE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamBuilding;
