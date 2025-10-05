import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const RollGlider = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Roll Glider</h1>
              <h2 className="text-3xl font-bold mb-8 text-cyan-300">Glide Through the Air</h2>
              <p className="text-xl mb-8">
                Experience the thrill of gliding through the air on our exciting roll glider attraction with twists, turns, and aerial excitement.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400">ROLL GLIDER RIDE</h3>
                <p className="text-lg">Price: AED 35 (Per Ride)</p>
                <p className="text-sm text-gray-300">Height requirement: Minimum 120cm</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={bearMascot} alt="Altitude Arena Mascot" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-cyan-600">Roll Glider Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cyan-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-cyan-600">🎢 Aerial Track</h3>
                <p>Suspended track system that takes you on an exciting journey through the air with smooth gliding motion.</p>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">🌪️ Twists & Turns</h3>
                <p>Experience thrilling curves, loops, and elevation changes as you glide through the course.</p>
              </div>

              <div className="bg-indigo-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-indigo-600">🛡️ Safety Harness</h3>
                <p>Secure safety harness system ensures a safe and comfortable ride throughout your gliding adventure.</p>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">⚡ Speed Control</h3>
                <p>Controlled speed system provides the perfect balance of excitement and safety for all riders.</p>
              </div>

              <div className="bg-teal-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-teal-600">🎯 Multiple Routes</h3>
                <p>Choose from different track routes offering varying levels of intensity and duration.</p>
              </div>

              <div className="bg-sky-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-sky-600">📸 Photo Opportunities</h3>
                <p>Scenic viewpoints along the track provide amazing photo opportunities of your gliding experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Routes */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">Track Routes</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">🟢</div>
                <h3 className="text-xl font-bold mb-2 text-green-600">Beginner Route</h3>
                <p className="text-gray-600 mb-4">Gentle gliding experience perfect for first-time riders and younger participants.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• 2-minute ride duration</li>
                  <li>• Gentle curves and slopes</li>
                  <li>• Lower speed setting</li>
                  <li>• Ages 8+ with supervision</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">🟡</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-600">Intermediate Route</h3>
                <p className="text-gray-600 mb-4">Moderate thrills with more dynamic movements and elevation changes.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• 3-minute ride duration</li>
                  <li>• Moderate twists and turns</li>
                  <li>• Medium speed setting</li>
                  <li>• Ages 12+ recommended</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">🔴</div>
                <h3 className="text-xl font-bold mb-2 text-red-600">Advanced Route</h3>
                <p className="text-gray-600 mb-4">Maximum excitement with steep drops, sharp turns, and high-speed sections.</p>
                <ul className="text-sm text-left space-y-1">
                  <li>• 4-minute ride duration</li>
                  <li>• Intense loops and drops</li>
                  <li>• High speed setting</li>
                  <li>• Ages 16+ only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Safety Guidelines</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Minimum height: 120cm (4 feet)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Maximum weight: 120kg (265 lbs)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-cyan-400">✓</span>
                    <span>Closed-toe shoes required</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-cyan-400">✓</span>
                    <span>No loose items or jewelry</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Safety Rules</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">✓</span>
                    <span>Follow all staff instructions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">✓</span>
                    <span>Secure harness properly before ride</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">✓</span>
                    <span>Keep hands and feet inside at all times</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">✓</span>
                    <span>No photography during ride</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Glide Through the Air?</h2>
          <p className="text-xl mb-8">
            Experience the thrill of our Roll Glider attraction today!
          </p>
          <Link to="/contact-us" className="bg-white text-cyan-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
            Book Your Glide
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RollGlider;
