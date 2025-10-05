import React from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">Join Our Team</h1>
          <p className="text-xl">Be part of Dubai's most exciting entertainment destination</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">Why Work at Altitude Arena?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">🎯 Dynamic Environment</h3>
                <p>Work in an exciting, fast-paced entertainment environment where no two days are the same.</p>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">📈 Career Growth</h3>
                <p>Opportunities for advancement and professional development in the entertainment industry.</p>
              </div>

              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">🤝 Team Spirit</h3>
                <p>Join a supportive team that values collaboration, creativity, and customer service excellence.</p>
              </div>

              <div className="bg-orange-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">💰 Competitive Benefits</h3>
                <p>Attractive salary packages, health insurance, and employee discounts on all activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Current Openings</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Game Attendant</h3>
                <p className="text-gray-600 mb-4">Supervise game areas, assist customers, and ensure safety protocols are followed.</p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Customer service experience preferred</li>
                  <li>• Fluent in English and Arabic</li>
                  <li>• Energetic and friendly personality</li>
                </ul>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Full-time</span>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Party Host</h3>
                <p className="text-gray-600 mb-4">Organize and host birthday parties and special events for children and families.</p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Experience with children's entertainment</li>
                  <li>• Excellent communication skills</li>
                  <li>• Creative and enthusiastic</li>
                </ul>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Part-time</span>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Maintenance Technician</h3>
                <p className="text-gray-600 mb-4">Maintain and repair gaming equipment, ensuring all attractions operate safely.</p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Technical background preferred</li>
                  <li>• Problem-solving skills</li>
                  <li>• Attention to detail</li>
                </ul>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Full-time</span>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Food Service Associate</h3>
                <p className="text-gray-600 mb-4">Prepare and serve food and beverages in our café and party areas.</p>
                <ul className="text-sm text-gray-600 mb-4">
                  <li>• Food handling certification</li>
                  <li>• Customer service experience</li>
                  <li>• Team player attitude</li>
                </ul>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">Full-time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8">
            Send your CV and cover letter to careers@altitudearena.ae
          </p>
          <Link to="/contact-us" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
            Contact HR Department
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;
