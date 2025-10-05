import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const VRGames = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">VR Games Dubai</h1>
              <h2 className="text-3xl font-bold mb-8 text-cyan-300">Step Into Virtual Reality</h2>
              <p className="text-xl mb-8">Experience the future of gaming with cutting-edge VR technology!</p>
              <div className="bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400">VR EXPERIENCE</h3>
                <p className="text-lg">Price: AED 120 (Per Session)</p>
                <p className="text-sm text-gray-300">30-minute immersive experience</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={bearMascot} alt="Altitude Arena Mascot" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Immerse Yourself in Virtual Worlds</h2>
            <div className="space-y-8 text-lg">
              <p>Step into extraordinary virtual worlds with our state-of-the-art VR gaming systems. From thrilling adventures to mind-bending puzzles, experience gaming like never before at Altitude Arena.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-600">Adventure Games</h3>
                  <p>Explore mystical lands and embark on epic quests in fully immersive virtual environments.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Action Games</h3>
                  <p>Feel the adrenaline rush as you battle enemies and overcome challenges in 360-degree action.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Puzzle Games</h3>
                  <p>Challenge your mind with intricate puzzles and brain teasers in virtual reality.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Multiplayer Experiences</h3>
                  <p>Team up with friends for cooperative adventures or compete in virtual arenas.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact-us" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-xl transition-colors">
                Enter Virtual Reality
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VRGames;
