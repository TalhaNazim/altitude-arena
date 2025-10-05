import React from 'react';
import { Link } from 'react-router-dom';
import peakChallengeCard from '../assets/ai-generated/peak_challenge_card.png';
import summitWarriorsCard from '../assets/ai-generated/summit_warriors_card.png';
import altitudeAdventureCard from '../assets/ai-generated/altitude_adventure_card.png';
import mountainEagleMascot from '../assets/ai-generated/mountain_eagle_mascot.png';
import trampolinePeaks from '../assets/ai-generated/trampoline_peaks.png';
import bowlingSummit from '../assets/ai-generated/bowling_summit.png';
import laserTagAltitude from '../assets/ai-generated/laser_tag_altitude.png';
import climbingWallPeaks from '../assets/ai-generated/climbing_wall_peaks.png';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            REACH NEW HEIGHTS
          </h1>
          <p className="text-2xl mb-8 text-blue-200">
            Dubai's Premier Mountain-Themed Adventure Arena
          </p>
          <Link to="/contact-us" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg">
            Begin Your Ascent
          </Link>
        </div>
        
        {/* Floating Mountain Shapes */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" className="w-full h-24 text-white">
            <path d="M0,120 L0,60 L200,20 L400,80 L600,10 L800,70 L1000,30 L1200,90 L1200,120 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* October Peak Challenges Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-blue-900">October Peak Challenges</h2>
            <p className="text-xl text-gray-600">Conquer new heights with our monthly adventure specials</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={peakChallengeCard} alt="Peak Challenge" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Peak Challenge</h3>
                <p className="text-gray-600">Ultimate climbing and adventure course</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={summitWarriorsCard} alt="Summit Warriors" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Summit Warriors</h3>
                <p className="text-gray-600">Epic laser tag battles in mountain terrain</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src={altitudeAdventureCard} alt="Altitude Adventure" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Altitude Adventure</h3>
                <p className="text-gray-600">Complete mountain adventure package</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src={mountainEagleMascot} alt="Mountain Eagle Mascot" className="w-full max-w-md mx-auto" />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-4xl font-bold mb-6 text-blue-900">Who We Are?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Altitude Arena is Dubai's premier mountain-themed entertainment destination, where adventure meets altitude. 
                Our state-of-the-art facility brings the thrill of mountain exploration indoors, offering an unparalleled 
                experience for adventurers of all ages.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                From summit-conquering challenges to base camp relaxation, we've created an immersive environment that 
                captures the spirit of mountain adventure while ensuring safety and fun for the whole family.
              </p>
              <Link to="/about-us" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Peak Bounce - Trampoline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Peak Bounce</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src={trampolinePeaks} alt="Peak Bounce Trampolines" className="w-full rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Soar to New Heights</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Experience the ultimate high-altitude bouncing adventure in our mountain-themed trampoline park. 
                  With altitude markers showing your jumping heights, ninja courses inspired by mountain terrain, 
                  and sky-high fun for all ages.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">⛰️</span>
                    Mountain-themed obstacle courses
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">🏔️</span>
                    Altitude tracking displays
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">🦅</span>
                    Sky rider zip lines
                  </li>
                </ul>
                <Link to="/games/trampoline" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Start Bouncing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alpine Bowling Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Alpine Bowling</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Mountain Lodge Experience</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Strike it rich in our alpine-themed bowling alley, complete with mountain lodge atmosphere, 
                  wooden beams, and stunning mountain vistas. Our 6 professional lanes feature mountain peak 
                  pin designs and cozy cabin-style seating areas.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">🏔️</span>
                    Mountain vista backdrop
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">🪵</span>
                    Authentic lodge atmosphere
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">🎳</span>
                    Professional HyperBowl technology
                  </li>
                </ul>
                <Link to="/games/bowling" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Roll the Peaks
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <img src={bowlingSummit} alt="Alpine Bowling" className="w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summit Warriors - Laser Tag Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Summit Warriors</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img src={laserTagAltitude} alt="Summit Warriors Laser Tag" className="w-full rounded-lg shadow-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Epic Mountain Battles</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Engage in futuristic combat across our mountain-themed laser tag arena. Navigate through 
                  rocky terrain, use mountain peaks as cover, and experience the ultimate high-altitude 
                  battle in our immersive warrior training facility.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">⚔️</span>
                    Multi-level mountain terrain
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">🌌</span>
                    Atmospheric lighting effects
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">🎯</span>
                    Advanced laser tag equipment
                  </li>
                </ul>
                <Link to="/games/laser-tag" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Join the Battle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rock Face Climbing Section */}
      <section className="py-16 bg-gradient-to-r from-gray-100 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Rock Face Challenge</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Conquer the Summit</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Scale our indoor mountain peaks with climbing walls designed to replicate real mountain faces. 
                  From beginner-friendly slopes to expert-level cliff faces, challenge yourself to reach new heights 
                  with our auto-belay safety systems and professional instruction.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">🧗</span>
                    Multiple difficulty levels
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">🔒</span>
                    Auto-belay safety systems
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-500 mr-2">🏆</span>
                    Achievement tracking
                  </li>
                </ul>
                <Link to="/games/wall-climbing" className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Start Climbing
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <img src={climbingWallPeaks} alt="Rock Face Climbing" className="w-full rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Join the Summit Club</h2>
          <p className="text-xl mb-8 text-blue-200">
            Get exclusive access to peak deals, new adventure announcements, and mountain-sized savings!
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email for adventure updates" 
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Ascend
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
