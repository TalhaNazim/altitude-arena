import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const SoftPlay = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Soft Play Area</h1>
              <h2 className="text-3xl font-bold mb-8 text-green-300">Safe Fun for Little Adventurers</h2>
              <p className="text-xl mb-8">
                A specially designed play area for toddlers and young children to explore, climb, and play safely.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400">SOFT PLAY ACCESS</h3>
                <p className="text-lg">Price: AED 50 (Per Child)</p>
                <p className="text-sm text-gray-300">Ages 2-8 years, Adult supervision required</p>
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
            <h2 className="text-4xl font-bold mb-12 text-center text-green-600">Soft Play Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">🏰 Play Structures</h3>
                <p>Multi-level play structures with slides, tunnels, and climbing areas designed for small children.</p>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">🏀 Ball Pit</h3>
                <p>Large ball pit filled with colorful, soft balls for endless jumping and diving fun.</p>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">🧸 Toddler Zone</h3>
                <p>Special area designed specifically for toddlers under 3 with age-appropriate activities.</p>
              </div>

              <div className="bg-orange-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">🎨 Activity Tables</h3>
                <p>Interactive play tables with puzzles, building blocks, and educational toys.</p>
              </div>

              <div className="bg-pink-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">🛝 Mini Slides</h3>
                <p>Small, safe slides perfect for young children to enjoy independently.</p>
              </div>

              <div className="bg-yellow-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">🎪 Sensory Play</h3>
                <p>Sensory play equipment to help develop motor skills and cognitive abilities.</p>
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
                <h3 className="text-2xl font-bold mb-6 text-green-400">Age Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Ages 2-8 years welcome</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Separate toddler area for under 3s</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Adult supervision required at all times</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Safety Rules</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">✓</span>
                    <span>Socks must be worn at all times</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">✓</span>
                    <span>No food or drinks in play area</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">✓</span>
                    <span>Follow staff instructions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Benefits of Soft Play</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                  <span className="text-4xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Cognitive Development</h3>
                <p>Enhances problem-solving skills and spatial awareness through interactive play.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                  <span className="text-4xl">💪</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Physical Development</h3>
                <p>Improves gross motor skills, balance, and coordination through active play.</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                  <span className="text-4xl">👥</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Social Skills</h3>
                <p>Encourages interaction with other children and develops communication skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for Safe, Fun Play?</h2>
          <p className="text-xl mb-8">
            Bring your little ones to our safe and exciting soft play area today!
          </p>
          <Link to="/contact-us" className="bg-white text-green-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
            Book Soft Play Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SoftPlay;
