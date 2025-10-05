import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const Karaoke = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Karaoke Rooms</h1>
              <h2 className="text-3xl font-bold mb-8 text-pink-300">Sing Your Heart Out</h2>
              <p className="text-xl mb-8">
                Private karaoke rooms with the latest sound systems and thousands of songs to choose from.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400">KARAOKE SESSION</h3>
                <p className="text-lg">Price: AED 200 (Per Hour/Room)</p>
                <p className="text-sm text-gray-300">Up to 8 people per room</p>
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
            <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Karaoke Features</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-pink-100 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-xl font-bold mb-2">Professional Mics</h3>
                <p>High-quality wireless microphones for crystal clear vocals.</p>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-bold mb-2">Huge Song Library</h3>
                <p>Thousands of songs in multiple languages and genres.</p>
              </div>

              <div className="bg-blue-100 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4">🔊</div>
                <h3 className="text-xl font-bold mb-2">Premium Sound</h3>
                <p>State-of-the-art sound systems for the best audio experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Be a Star?</h2>
          <p className="text-xl mb-8">
            Book your private karaoke room and unleash your inner performer!
          </p>
          <Link to="/contact-us" className="bg-white text-pink-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
            Book Karaoke Room
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Karaoke;
