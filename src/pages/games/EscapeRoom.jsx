import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const EscapeRoom = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Escape Room</h1>
              <h2 className="text-3xl font-bold mb-8 text-yellow-300">Test Your Wits and Teamwork</h2>
              <p className="text-xl mb-8">
                Challenge yourself with mind-bending puzzles and thrilling scenarios in our immersive escape rooms.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400">ESCAPE CHALLENGE</h3>
                <p className="text-lg">Price: AED 150 (Per Team of 6)</p>
                <p className="text-sm text-gray-300">60 minutes to escape</p>
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
            <h2 className="text-4xl font-bold mb-12 text-center text-red-600">Escape Room Themes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-600">🏴‍☠️ Pirate's Treasure</h3>
                <p>Navigate through a pirate ship, solve maritime puzzles, and find the hidden treasure before time runs out.</p>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">🔬 Mad Scientist Lab</h3>
                <p>Escape from a crazy scientist's laboratory by solving chemical equations and unlocking secret formulas.</p>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">🏰 Medieval Castle</h3>
                <p>Break free from a medieval dungeon using ancient riddles and medieval mechanisms.</p>
              </div>

              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">🚀 Space Station</h3>
                <p>Repair the space station and return to Earth before oxygen runs out in this futuristic challenge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Test Your Skills?</h2>
          <p className="text-xl mb-8">
            Book your escape room adventure and see if you can beat the clock!
          </p>
          <Link to="/contact-us" className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
            Book Escape Room
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EscapeRoom;
