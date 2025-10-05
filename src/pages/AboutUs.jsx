import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../assets/bear_mascot.png';

const AboutUs = () => {
  return (
    <div className="pt-20">
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">About Altitude Arena</h1>
              <h2 className="text-3xl font-bold mb-8 text-orange-300">Reach New Heights of Fun</h2>
              <p className="text-xl mb-8">
                Dubai's premier indoor entertainment destination where adventure meets excitement!
              </p>
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
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-8 text-lg">
              <p>
                Altitude Arena was born from a vision to create the ultimate indoor entertainment experience in Dubai. Located in the heart of Al Quoz 2, we have transformed a space into a thrilling adventure playground where families, friends, and thrill-seekers come together to create unforgettable memories.
              </p>
              
              <p>
                Our state-of-the-art facility combines cutting-edge technology with classic entertainment, offering everything from high-tech laser tag and VR experiences to traditional bowling and arcade games. We believe that fun knows no age limit, which is why our attractions are designed to challenge and delight visitors of all ages.
              </p>

              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-orange-400">Our Mission</h3>
                <p>
                  To provide Dubai with an unparalleled indoor entertainment experience that brings people together, creates lasting memories, and offers the perfect escape from the ordinary. We strive to be the destination where adventure meets innovation.
                </p>
              </div>

              <div className="bg-orange-100 p-8 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-orange-600">Our Vision</h3>
                <p>
                  To be recognized as the leading indoor entertainment destination in the UAE, setting new standards for fun, safety, and customer experience while continuously evolving to exceed our guests' expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">What Makes Us Special</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Cutting-Edge Technology</h3>
                <p>We invest in the latest entertainment technology to ensure our guests experience the most advanced and exciting attractions available.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Safety First</h3>
                <p>Our commitment to safety is unwavering. All our equipment is regularly maintained and our staff are trained to the highest safety standards.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Family-Friendly Environment</h3>
                <p>We've created a welcoming space where families can enjoy quality time together, with activities suitable for all ages and skill levels.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Exceptional Service</h3>
                <p>Our dedicated team is passionate about creating memorable experiences and ensuring every guest leaves with a smile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-orange-400">Join the Adventure</h2>
            <p className="text-xl mb-8">
              Whether you're planning a birthday party, corporate event, or just looking for a fun day out, Altitude Arena is your destination for unforgettable experiences.
            </p>
            <Link to="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl transition-colors">
              Visit Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
