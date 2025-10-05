import React from 'react';

const Gallery = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">Photo Gallery</h1>
          <p className="text-xl">Explore the excitement and fun at Altitude Arena through our photo gallery</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Experience the Fun</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-6xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Laser Tag Action</h3>
                <p className="text-gray-600">Epic battles and strategic gameplay in our futuristic laser tag arenas.</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-400 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-6xl">🎳</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Bowling Excellence</h3>
                <p className="text-gray-600">Professional bowling lanes with state-of-the-art equipment and scoring systems.</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="bg-gradient-to-br from-green-400 to-emerald-400 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-6xl">🤸</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Trampoline Fun</h3>
                <p className="text-gray-600">High-flying action with ninja courses, sky riders, and donut slides.</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="bg-gradient-to-br from-orange-400 to-red-400 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-6xl">🕹️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Arcade Games</h3>
                <p className="text-gray-600">Classic and modern arcade games for endless entertainment and competition.</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="bg-gradient-to-br from-purple-400 to-blue-400 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-6xl">🥽</span>
                </div>
                <h3 className="text-xl font-bold mb-2">VR Adventures</h3>
                <p className="text-gray-600">Immersive virtual reality experiences that transport you to new worlds.</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="bg-gradient-to-br from-pink-400 to-purple-400 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-6xl">🎉</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Birthday Parties</h3>
                <p className="text-gray-600">Unforgettable birthday celebrations with decorations, cake, and endless fun.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-purple-600">Share Your Moments</h2>
            <p className="text-xl mb-8">
              Tag us @AltitudeArenaDubai in your photos and videos to be featured in our gallery!
            </p>
            <div className="flex justify-center space-x-4">
              <span className="bg-purple-500 text-white px-6 py-3 rounded-lg">#AltitudeArena</span>
              <span className="bg-pink-500 text-white px-6 py-3 rounded-lg">#DubaiEntertainment</span>
              <span className="bg-blue-500 text-white px-6 py-3 rounded-lg">#FamilyFun</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
