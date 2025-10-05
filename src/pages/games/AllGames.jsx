import React from 'react';
import { Link } from 'react-router-dom';

const AllGames = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">All Games</h1>
          <p className="text-xl">Discover every exciting activity at Altitude Arena</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Complete Games Collection</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-100 to-red-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-2xl font-bold mb-4 text-red-600">Laser Tag</h3>
                <p className="text-gray-700 mb-4">Epic battles with state-of-the-art equipment in futuristic arenas.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 65 per game</p>
                  <p>• Duration: 15 minutes</p>
                  <p>• Ages: 8+</p>
                </div>
                <Link to="/laser-tag" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">🎳</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Bowling</h3>
                <p className="text-gray-700 mb-4">Professional 6-lane bowling alley with Hyperbowl technology.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 45 per game</p>
                  <p>• Duration: 1 hour</p>
                  <p>• Ages: All ages</p>
                </div>
                <Link to="/bowling" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">🤸</div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Trampoline</h3>
                <p className="text-gray-700 mb-4">Ninja courses, sky riders, and donut slides for high-flying fun.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 55 per hour</p>
                  <p>• Duration: 1 hour</p>
                  <p>• Ages: 5+</p>
                </div>
                <Link to="/trampoline" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">🥽</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">VR Games</h3>
                <p className="text-gray-700 mb-4">Immersive virtual reality experiences in cutting-edge worlds.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 75 per session</p>
                  <p>• Duration: 30 minutes</p>
                  <p>• Ages: 10+</p>
                </div>
                <Link to="/vr-games" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">🕹️</div>
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Arcade Games</h3>
                <p className="text-gray-700 mb-4">Classic and modern arcade games for endless entertainment.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 5-15 per game</p>
                  <p>• Duration: Varies</p>
                  <p>• Ages: All ages</p>
                </div>
                <Link to="/arcade-games" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">🌈</div>
                <h3 className="text-2xl font-bold mb-4 text-pink-600">Slime Universe</h3>
                <p className="text-gray-700 mb-4">Create and play with custom slime in our messy wonderland.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 40 per session</p>
                  <p>• Duration: 45 minutes</p>
                  <p>• Ages: 4+</p>
                </div>
                <Link to="/slime-universe" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">🛝</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-600">Soft Play</h3>
                <p className="text-gray-700 mb-4">Safe play area designed for toddlers and young children.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 50 per child</p>
                  <p>• Duration: Unlimited</p>
                  <p>• Ages: 2-8</p>
                </div>
                <Link to="/soft-play" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-red-100 to-orange-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">🧗</div>
                <h3 className="text-2xl font-bold mb-4 text-red-600">Wall Climbing</h3>
                <p className="text-gray-700 mb-4">Challenge yourself on indoor climbing walls with various difficulty levels.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 55 per hour</p>
                  <p>• Duration: 1 hour</p>
                  <p>• Ages: 6+</p>
                </div>
                <Link to="/wall-climbing" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">🛼</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Roll Glider</h3>
                <p className="text-gray-700 mb-4">Glide through the air on our exciting suspended track system.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 35 per ride</p>
                  <p>• Duration: 4 minutes</p>
                  <p>• Ages: 8+</p>
                </div>
                <Link to="/roll-glider" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">⛳</div>
                <h3 className="text-2xl font-bold mb-4 text-green-600">Mini Golf</h3>
                <p className="text-gray-700 mb-4">18-hole indoor mini golf course with themed obstacles.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 45 per person</p>
                  <p>• Duration: 1 hour</p>
                  <p>• Ages: All ages</p>
                </div>
                <Link to="/mini-golf" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-indigo-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">🔍</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Escape Room</h3>
                <p className="text-gray-700 mb-4">Mind-bending puzzles and thrilling scenarios for team challenges.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 150 per team</p>
                  <p>• Duration: 60 minutes</p>
                  <p>• Ages: 12+</p>
                </div>
                <Link to="/escape-room" className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-purple-200 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">🎤</div>
                <h3 className="text-2xl font-bold mb-4 text-pink-600">Karaoke</h3>
                <p className="text-gray-700 mb-4">Private karaoke rooms with professional sound systems.</p>
                <div className="text-sm text-gray-600 mb-4">
                  <p>• Price: AED 200 per hour</p>
                  <p>• Duration: 1 hour</p>
                  <p>• Ages: All ages</p>
                </div>
                <Link to="/karaoke" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition-colors">
                  Play Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-purple-600">Ready for Ultimate Fun?</h2>
          <p className="text-xl mb-8">
            Experience all our amazing games and activities in one incredible venue!
          </p>
          <Link to="/contact-us" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
            Book Your Adventure
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AllGames;
