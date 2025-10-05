import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const MiniGolf = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Mini Golf Course</h1>
              <h2 className="text-3xl font-bold mb-8 text-green-300">18-Hole Indoor Adventure</h2>
              <p className="text-xl mb-8">
                Navigate through our challenging 18-hole indoor mini golf course with creative obstacles and themed holes.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400">MINI GOLF ROUND</h3>
                <p className="text-lg">Price: AED 45 (Per Person)</p>
                <p className="text-sm text-gray-300">18 holes, putter and ball included</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={bearMascot} alt="Altitude Arena Mascot" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-green-600">Course Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">🏌️ 18 Unique Holes</h3>
                <p>Each hole features different challenges, obstacles, and themes to test your putting skills.</p>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">🌊 Water Features</h3>
                <p>Navigate around water hazards and fountains that add excitement to your game.</p>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">🏰 Themed Obstacles</h3>
                <p>Windmills, castles, ramps, and tunnels create a fun and challenging experience.</p>
              </div>

              <div className="bg-orange-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">🎯 Skill Challenges</h3>
                <p>Holes designed for different skill levels, from beginner-friendly to expert challenges.</p>
              </div>

              <div className="bg-pink-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">🌟 Glow Features</h3>
                <p>Special lighting effects and glow-in-the-dark elements for a magical experience.</p>
              </div>

              <div className="bg-yellow-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">🏆 Scoring System</h3>
                <p>Electronic scoring system to track your progress and compete with friends.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hole Highlights */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-emerald-600">Featured Holes</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">🌪️</div>
                <h3 className="text-xl font-bold mb-2">Tornado Twist</h3>
                <p className="text-gray-600">Navigate your ball through a spinning tornado obstacle.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">🏴‍☠️</div>
                <h3 className="text-xl font-bold mb-2">Pirate's Cove</h3>
                <p className="text-gray-600">Sail your ball through a pirate ship and treasure chest.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">Space Launch</h3>
                <p className="text-gray-600">Launch your ball through a space-themed rocket course.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">🦖</div>
                <h3 className="text-xl font-bold mb-2">Dino Valley</h3>
                <p className="text-gray-600">Putt around prehistoric dinosaurs and volcanic obstacles.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">🏰</div>
                <h3 className="text-xl font-bold mb-2">Castle Keep</h3>
                <p className="text-gray-600">Navigate through a medieval castle with drawbridge.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">🌈</div>
                <h3 className="text-xl font-bold mb-2">Rainbow Bridge</h3>
                <p className="text-gray-600">Cross the rainbow bridge to reach the final hole.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules and Tips */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Rules & Tips</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-400">Game Rules</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Maximum 6 strokes per hole</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Play in order of your group</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Wait for the group ahead to finish</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Keep scorecards with you</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Return equipment after play</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Pro Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">💡</span>
                    <span>Study each hole before putting</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">💡</span>
                    <span>Use gentle, controlled strokes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">💡</span>
                    <span>Aim for the center of obstacles</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">💡</span>
                    <span>Watch how the ball bounces</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-blue-400">💡</span>
                    <span>Have fun and don't rush!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready for a Mini Golf Adventure?</h2>
          <p className="text-xl mb-8">
            Challenge yourself on our exciting 18-hole indoor mini golf course!
          </p>
          <Link to="/contact-us" className="bg-white text-green-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
            Book Your Round
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MiniGolf;
