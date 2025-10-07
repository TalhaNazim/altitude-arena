import React from 'react';
import { Link } from 'react-router-dom';
import socialIcons from '../assets/social_icons.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-orange-400 mb-4">ALTITUDE ARENA</div>
            <p className="text-lg font-semibold mb-4">Step inside, and let the games begin!</p>
            <div className="space-y-2">
              <p>📞 800 ALTITUDE (800 258484)</p>
              <p className="text-purple-600">If you're unable to reach us, dial 054 2669357</p>
              <p>✉️ hello.dxb@altitudearena.ae</p>
              <p>📍 Al Quoz 2, Dubai, United Arab Emirates</p>
            </div>

            <div className="mt-6">
              <p className="font-semibold mb-2">Operating Hours:</p>
              <div className="space-y-1 text-sm">
                <p>🕐 Monday to Friday: 11:00 AM - 11:00 PM</p>
                <p>🕐 Saturday: 10:00 AM - 11:00 PM</p>
                <p>🕐 Sunday: 10:00 AM - 10:00 PM</p>
              </div>
            </div>

            {/* <div className="mt-6">
              <img src={socialIcons} alt="Social Media" className="h-8" />
            </div> */}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">COMPANY</h3>
            <div className="space-y-2">
              <Link to="/about-us" className="block hover:text-orange-400 transition-colors">About Us</Link>
              <Link to="/faqs" className="block hover:text-orange-400 transition-colors">FAQs</Link>
              <Link to="/gallery" className="block hover:text-orange-400 transition-colors">Gallery</Link>
              <Link to="/contact-us" className="block hover:text-orange-400 transition-colors">Contact</Link>
              <Link to="/careers" className="block hover:text-orange-400 transition-colors">Careers</Link>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">EXPLORE</h3>
            <div className="space-y-2">
              <Link to="/games" className="block hover:text-orange-400 transition-colors">Games</Link>
              <Link to="/party/birthday-party" className="block hover:text-orange-400 transition-colors">Birthday Party</Link>
              <Link to="/party/school-trips" className="block hover:text-orange-400 transition-colors">School Trips</Link>
              <Link to="/corporate-events" className="block hover:text-orange-400 transition-colors">Corporate Events</Link>
              <Link to="/party/venue-privatization" className="block hover:text-orange-400 transition-colors">Venue Privatization</Link>
              <Link to="/altitude-lounge" className="block hover:text-orange-400 transition-colors">Altitude Lounge</Link>
              <Link to="/blogs" className="block hover:text-orange-400 transition-colors">Blogs</Link>
            </div>
          </div>

          {/* Policy Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">POLICY</h3>
            <div className="space-y-2">
              <Link to="/house-rules" className="block hover:text-orange-400 transition-colors">House Rules</Link>
              <Link to="/safety-policy" className="block hover:text-orange-400 transition-colors">Safety Policy</Link>
              <Link to="/terms-conditions" className="block hover:text-orange-400 transition-colors">T & Cs</Link>
              <Link to="/privacy-policy" className="block hover:text-orange-400 transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <p className="text-gray-600">2025 © Whitelane Recreational | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
