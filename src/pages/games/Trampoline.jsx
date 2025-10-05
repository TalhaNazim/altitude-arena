import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const Trampoline = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Trampoline Park Dubai</h1>
              <h2 className="text-3xl font-bold mb-8 text-green-300">Bounce to New Heights</h2>
              <p className="text-xl mb-8">Ready to Bounce? Experience the ultimate trampoline park in Dubai!</p>
              <div className="bg-black/50 p-4 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400">TRAMPOLINE PARK</h3>
                <p className="text-lg">Price: AED 80 (Per Person)</p>
                <p className="text-sm text-gray-300">Includes access to all trampoline areas</p>
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
            <h2 className="text-4xl font-bold mb-8 text-center">The Ultimate Trampoline Experience</h2>
            <div className="space-y-8 text-lg">
              <p>Equipped with Ninja Courses, Sky rider, Donut Slides and so much more, Altitude Arena's trampoline park is not like any other trampoline park in Dubai, it is so much more!</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-green-600">Ninja Courses</h3>
                  <p>Challenge yourself with our exciting ninja obstacle courses designed for all skill levels.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Sky Rider</h3>
                  <p>Soar through the air on our thrilling sky rider attraction for an unforgettable experience.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-purple-600">Donut Slides</h3>
                  <p>Slide down our exciting donut slides for a fun-filled adventure that everyone will love.</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-orange-600">Free Jump Areas</h3>
                  <p>Bounce freely in our open jump areas perfect for practicing tricks and having fun.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/contact-us" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl transition-colors">
                Book Your Jump Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trampoline;
