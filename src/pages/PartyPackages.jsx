import React from 'react';
import { Link } from 'react-router-dom';

const PartyPackages = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Party Packages</h1>
          <p className="text-xl">Make your celebrations unforgettable at Altitude Arena</p>
        </div>
      </section>

      {/* Party Options */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/party/birthday-party" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-pink-600">Birthday Party</h3>
              <p>Celebrate your special day with friends and family</p>
            </Link>
            
            <Link to="/party/team-building" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Team Building</h3>
              <p>Corporate events and team building activities</p>
            </Link>
            
            <Link to="/party/school-trips" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-green-600">School Trips</h3>
              <p>Educational and fun group activities for schools</p>
            </Link>
            
            <Link to="/party/venue-privatization" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">Venue Privatization</h3>
              <p>Rent the entire venue for your exclusive event</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartyPackages;
