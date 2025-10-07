import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/social_icons.png';

const Header = () => {
  const [gamesDropdown, setGamesDropdown] = useState(false);
  const [partyDropdown, setPartyDropdown] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-4 fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Phone Contact */}
          <div className="flex items-center text-blue-200">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span className="text-sm">+971 4 XXX XXXX</span>
          </div>
          
          {/* Logo */}
          {/* <div className="flex-1 flex justify-center">
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="Altitude Arena" className="h-12 w-auto" />
            </Link>
          </div> */}
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-300 transition-colors font-medium">Home</Link>
            
            {/* Games Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setGamesDropdown(true)}
              onMouseLeave={() => setGamesDropdown(false)}
            >
              <Link to="/games" className="hover:text-blue-300 transition-colors font-medium">Games</Link>
              {gamesDropdown && (
                <div className="absolute top-full left-0 bg-blue-900 border border-blue-700 rounded-md shadow-xl py-2 w-52 mt-1">
                  <Link to="/games/laser-tag" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Laser Tag</Link>
                  <Link to="/games/bowling" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Bowling</Link>
                  <Link to="/games/trampoline" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Tampoline</Link>
                  <Link to="/games/roll-glider" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Sky Glider</Link>
                  <Link to="/games/slime-universe" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Crystal Caverns</Link>
                  <Link to="/games/vr-games" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Virtual Peaks</Link>
                  <Link to="/games/soft-play" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Soft Play</Link>
                  <Link to="/games/wall-climbing" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Ninja</Link>
                  <Link to="/games/arcade-games" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Arcade</Link>
                  <Link to="/games/all-games" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">All Adventures</Link>
                </div>
              )}
            </div>

            {/* Party Packages Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setPartyDropdown(true)}
              onMouseLeave={() => setPartyDropdown(false)}
            >
              <Link to="/party-packages" className="hover:text-blue-300 transition-colors font-medium">Packages</Link>
              {partyDropdown && (
                <div className="absolute top-full left-0 bg-blue-900 border border-blue-700 rounded-md shadow-xl py-2 w-52 mt-1">
                  <Link to="/party/team-building" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Corporate Events</Link>
                  <Link to="/party/birthday-party" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Birthday Parties</Link>
                  <Link to="/party/venue-privatization" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">Private Events</Link>
                  <Link to="/party/school-trips" className="block px-4 py-2 hover:bg-blue-800 hover:text-blue-200">School Trips</Link>
                </div>
              )}
            </div>

            <Link to="/price" className="hover:text-blue-300 transition-colors font-medium">Pricing</Link>
            <Link to="/offers" className="hover:text-blue-300 transition-colors font-medium">Peak Deals</Link>
            {/* <Link to="/altitude-lounge" className="hover:text-blue-300 transition-colors font-medium">Summit Lounge</Link> */}
            <Link to="/contact-us" className="hover:text-blue-300 transition-colors font-medium">Franchises</Link>
            
            <Link to="/contact-us" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-2 rounded-full transition-all duration-300 font-semibold shadow-lg">
              Start Climbing
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
