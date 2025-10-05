import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const WallClimbing = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Wall Climbing</h1>
              <h2 className="text-3xl font-bold mb-8 text-orange-300">Reach New Heights</h2>
              <p className="text-xl mb-8">
                Challenge yourself on our indoor climbing walls with various difficulty levels and routes for climbers of all abilities.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400">CLIMBING SESSION</h3>
                <p className="text-lg">Price: AED 55 (Per Hour)</p>
                <p className="text-sm text-gray-300">Equipment included, safety briefing provided</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={bearMascot} alt="Altitude Arena Mascot" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Climbing Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-600">Climbing Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">🧗 Multiple Walls</h3>
                <p>Various climbing walls with different heights, angles, and difficulty levels to challenge every climber.</p>
              </div>

              <div className="bg-red-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-600">🎯 Route Variety</h3>
                <p>Color-coded climbing routes ranging from beginner-friendly to expert-level challenges.</p>
              </div>

              <div className="bg-pink-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">🛡️ Safety Equipment</h3>
                <p>Professional-grade harnesses, helmets, and climbing shoes provided for all participants.</p>
              </div>

              <div className="bg-yellow-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-600">👨‍🏫 Expert Instruction</h3>
                <p>Certified climbing instructors provide guidance, safety briefings, and technique coaching.</p>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">🏔️ Auto-Belay System</h3>
                <p>Automatic belay devices ensure safe climbing and controlled descent for solo climbers.</p>
              </div>

              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">📈 Progress Tracking</h3>
                <p>Track your climbing progress and achievements with our digital climbing log system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climbing Walls */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-red-600">Our Climbing Walls</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-block mb-6">
                  <h3 className="text-xl font-bold">BEGINNER WALL</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">📏</span>
                    <p>Height: 8 meters</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">📐</span>
                    <p>Angle: Vertical (90°)</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">🎯</span>
                    <p>6 beginner routes</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-xl">👥</span>
                    <p>Ages 6+ welcome</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">Perfect for first-time climbers and children. Large holds and gentle routes.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-orange-300">
                <div className="bg-orange-500 text-white px-4 py-2 rounded-full inline-block mb-6">
                  <h3 className="text-xl font-bold">INTERMEDIATE WALL</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-xl">📏</span>
                    <p>Height: 12 meters</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-xl">📐</span>
                    <p>Angle: Slight overhang</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-xl">🎯</span>
                    <p>8 intermediate routes</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-500 text-xl">👥</span>
                    <p>Ages 10+ recommended</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">Challenging routes with technical moves and varied hold types.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full inline-block mb-6">
                  <h3 className="text-xl font-bold">ADVANCED WALL</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-red-500 text-xl">📏</span>
                    <p>Height: 15 meters</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-500 text-xl">📐</span>
                    <p>Angle: Steep overhang</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-500 text-xl">🎯</span>
                    <p>10 advanced routes</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-red-500 text-xl">👥</span>
                    <p>Experienced climbers only</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">Extreme challenges with small holds, dynamic moves, and complex sequences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Requirements */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Safety & Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-orange-400">Age & Physical Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-orange-400">✓</span>
                    <span>Minimum age: 6 years old</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-orange-400">✓</span>
                    <span>Children under 12 need adult supervision</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-orange-400">✓</span>
                    <span>Basic physical fitness required</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-orange-400">✓</span>
                    <span>No fear of heights recommended</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-400">Safety Protocols</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✓</span>
                    <span>Mandatory safety briefing before climbing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✓</span>
                    <span>Professional equipment inspection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✓</span>
                    <span>Certified instructor supervision</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✓</span>
                    <span>Emergency procedures in place</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-pink-600">Benefits of Wall Climbing</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-pink-100 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                  <span className="text-4xl">💪</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Full Body Workout</h3>
                <p>Engages all major muscle groups for comprehensive strength and endurance training.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                  <span className="text-4xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Mental Challenge</h3>
                <p>Develops problem-solving skills, focus, and mental resilience through route planning.</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Confidence Building</h3>
                <p>Overcoming climbing challenges builds self-confidence and personal achievement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Reach New Heights?</h2>
          <p className="text-xl mb-8">
            Challenge yourself on our exciting climbing walls today!
          </p>
          <Link to="/contact-us" className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
            Book Climbing Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WallClimbing;
