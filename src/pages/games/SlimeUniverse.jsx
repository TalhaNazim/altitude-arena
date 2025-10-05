import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const SlimeUniverse = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Slime Universe</h1>
              <h2 className="text-3xl font-bold mb-8 text-pink-300">Dive into a World of Squishy, Gooey Fun!</h2>
              <p className="text-xl mb-8">
                Our Slime Universe Room is the ultimate playground for slime enthusiasts of all ages.
              </p>
              <div className="bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400">SLIME EXPERIENCE</h3>
                <p className="text-lg">Price: AED 75 (30 minutes)</p>
                <p className="text-sm text-gray-300">Create your own slime masterpiece</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={bearMascot} alt="Altitude Arena Mascot" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Immerse Yourself in Altitude Arena's Slime Universe</h2>
            <div className="space-y-8 text-lg">
              <p>
                Dive into a World of Gooey Fun! Get ready to embark on a thrilling slime adventure at Altitude Arena! Our Slime Universe isn't just a shop – it's a fully-fledged laboratory where you're the star scientist! Experiment with a dazzling palette of colors, textures, and incredible add-ins to create your own unique slime masterpiece.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="text-center">
                  <div className="bg-purple-100 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                    <span className="text-4xl">🧪</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">Adventure</h3>
                  <p>Explore endless slime possibilities</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-pink-100 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                    <span className="text-4xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-pink-600 mb-2">Creativity</h3>
                  <p>Express your artistic side</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-orange-100 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
                    <span className="text-4xl">🎉</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">Fun</h3>
                  <p>Enjoy every gooey moment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Create */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">What You Can Create</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-600">Fluffy Slime</h3>
                <p>Light, airy, and incredibly satisfying to touch. Perfect for stress relief and sensory play.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Glitter Slime</h3>
                <p>Add sparkle and shine to your creation with our premium glitter collection.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Clear Slime</h3>
                <p>Crystal clear base perfect for adding colorful beads, charms, and decorations.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Butter Slime</h3>
                <p>Smooth, spreadable texture that's incredibly satisfying to play with.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Cloud Slime</h3>
                <p>Fluffy, cloud-like texture that stretches and pulls in amazing ways.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-600">Scented Slime</h3>
                <p>Choose from a variety of delicious scents to make your slime smell amazing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Slime Universe Rules</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-400">DO's</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Follow the instructions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Wear protective gear</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Be creative and have fun</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Share and collaborate</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Inform staff of any issues</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span>Wash your hands</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-400">DON'Ts</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✗</span>
                    <span>Don't eat the slime</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✗</span>
                    <span>Don't make a mess</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✗</span>
                    <span>Don't waste materials</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✗</span>
                    <span>Don't rush</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-red-400">✗</span>
                    <span>Don't distract others</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Create Your Slime Masterpiece?</h2>
          <p className="text-xl mb-8">
            Book your Slime Universe experience today and dive into a world of gooey creativity!
          </p>
          <Link to="/contact-us" className="bg-white text-purple-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
            Book Your Slime Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SlimeUniverse;
