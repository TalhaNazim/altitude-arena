import React from 'react';
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
          }}
        ></div>
        
        <div className="relative z-10 text-center">
          <div className="text-8xl font-bold mb-8 opacity-20 text-gray-400">
            Games Games Games
          </div>
          <h1 className="text-6xl font-bold mb-8">Games</h1>
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-purple-400">Bring out the </span>
            <span className="text-yellow-400">Beast </span>
            <span className="text-purple-400">in you !</span>
          </h2>
        </div>
      </section>

      {/* Arcade Games Section */}
      <section className="py-16 bg-black text-white">
        <div 
          className="relative min-h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h2 className="text-6xl font-bold mb-6">Arcade Games</h2>
            <p className="text-2xl mb-8">Bearly Containing Your Excitement!</p>
            <Link 
              to="/games/arcade-games" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-xl transition-colors"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">All Our Games</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Laser Tag */}
            <div className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-red-600 to-orange-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-red-400">Laser Tag</h3>
                <p className="text-gray-300 mb-4">Gear up for an epic battle with state-of-the-art laser tag equipment.</p>
                <Link to="/games/laser-tag" className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>
            </div>

            {/* Bowling */}
            <div className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-blue-400">Bowling</h3>
                <p className="text-gray-300 mb-4">Strike it big on our professional 6-lane bowling alley.</p>
                <Link to="/games/bowling" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>
            </div>

            {/* Trampoline */}
            <div className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-green-600 to-teal-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-green-400">Trampoline</h3>
                <p className="text-gray-300 mb-4">Bounce to new heights with ninja courses and sky riders.</p>
                <Link to="/games/trampoline" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>
            </div>

            {/* VR Games */}
            <div className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-purple-400">VR Games</h3>
                <p className="text-gray-300 mb-4">Step into virtual worlds with cutting-edge VR technology.</p>
                <Link to="/games/vr-games" className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>
            </div>

            {/* Arcade Games */}
            <div className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-yellow-600 to-orange-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-yellow-400">Arcade Games</h3>
                <p className="text-gray-300 mb-4">Classic and modern arcade games for endless entertainment.</p>
                <Link to="/games/arcade-games" className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>
            </div>

            {/* Slime Universe */}
            <div className="bg-black rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-pink-600 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-pink-400">Slime Universe</h3>
                <p className="text-gray-300 mb-4">Get messy and creative in our slime-making wonderland.</p>
                <Link to="/games/slime-universe" className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/games/all-games" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl transition-colors"
            >
              View All Games
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Games;
