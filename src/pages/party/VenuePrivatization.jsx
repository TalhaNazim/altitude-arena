import React from 'react';
import { Link } from 'react-router-dom';

const VenuePrivatization = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">Venue Privatization</h1>
          <p className="text-xl">Exclusive access to Altitude Arena for your special event</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <h2 className="text-4xl font-bold mb-12 text-center text-purple-600">Private Event Packages</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">PARTIAL PRIVATIZATION</h3>
                  <div className="text-4xl font-bold text-blue-600">AED 5,000</div>
                  <p className="text-sm text-gray-600">2-3 hours | Up to 50 guests</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Exclusive access to 2-3 activity areas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Dedicated party host</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Private party room</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Catering options available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Customizable decorations</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/contact-us" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-lg shadow-lg border-4 border-purple-300">
                <div className="text-center mb-6">
                  <div className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm mb-2">MOST POPULAR</div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">FULL PRIVATIZATION</h3>
                  <div className="text-4xl font-bold text-purple-600">AED 12,000</div>
                  <p className="text-sm text-gray-600">3-4 hours | Up to 150 guests</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Exclusive access to entire facility</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>All activities included</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Professional event coordination</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Full catering service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Custom branding & decorations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Photography/videography allowed</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/contact-us" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gold-100 to-yellow-200 p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-yellow-600 mb-2">PREMIUM EXPERIENCE</h3>
                  <div className="text-4xl font-bold text-yellow-600">AED 20,000</div>
                  <p className="text-sm text-gray-600">4-6 hours | Up to 300 guests</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">✓</span>
                    <span>Complete facility exclusivity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">✓</span>
                    <span>VIP lounge access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">✓</span>
                    <span>Premium catering & bar service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">✓</span>
                    <span>Professional entertainment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">✓</span>
                    <span>Complete event management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-yellow-500">✓</span>
                    <span>Valet parking service</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/contact-us" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">Perfect For These Events</h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="text-4xl mb-4">🎂</div>
                <h3 className="font-bold text-indigo-600 mb-2">Birthday Parties</h3>
                <p className="text-sm">Milestone birthdays and special celebrations</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="font-bold text-blue-600 mb-2">Corporate Events</h3>
                <p className="text-sm">Team building, product launches, company parties</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-4xl mb-4">💍</div>
                <h3 className="font-bold text-purple-600 mb-2">Wedding Events</h3>
                <p className="text-sm">Bachelor/bachelorette parties, receptions</p>
              </div>
              <div className="text-center p-6 bg-pink-50 rounded-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-bold text-pink-600 mb-2">Graduations</h3>
                <p className="text-sm">School graduations and achievement celebrations</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center text-green-600">What's Included</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-600">Facility Access</h3>
                <ul className="space-y-2">
                  <li>• Exclusive use of selected areas or entire facility</li>
                  <li>• All gaming equipment and activities</li>
                  <li>• Private party rooms and lounge areas</li>
                  <li>• Sound system and AV equipment</li>
                  <li>• Parking facilities</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Staff & Services</h3>
                <ul className="space-y-2">
                  <li>• Dedicated event coordinator</li>
                  <li>• Professional activity supervisors</li>
                  <li>• Cleaning and maintenance staff</li>
                  <li>• Security personnel if required</li>
                  <li>• Setup and breakdown services</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Catering Options</h3>
                <ul className="space-y-2">
                  <li>• Full-service catering available</li>
                  <li>• Custom menu planning</li>
                  <li>• Dietary restrictions accommodated</li>
                  <li>• Bar service for adult events</li>
                  <li>• Cake and dessert services</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Customization</h3>
                <ul className="space-y-2">
                  <li>• Custom decorations and theming</li>
                  <li>• Branded materials and signage</li>
                  <li>• Photography and videography coordination</li>
                  <li>• Entertainment and special guests</li>
                  <li>• Gift bags and party favors</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center text-red-600">Booking Process</h2>

            <div className="bg-red-50 p-8 rounded-lg mb-12">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="font-bold mb-2">Initial Consultation</h3>
                  <p className="text-sm">Discuss your event needs and preferences</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="font-bold mb-2">Custom Proposal</h3>
                  <p className="text-sm">Receive detailed proposal and pricing</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="font-bold mb-2">Contract & Deposit</h3>
                  <p className="text-sm">Sign agreement and secure your date</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h3 className="font-bold mb-2">Event Execution</h3>
                  <p className="text-sm">Enjoy your perfectly planned event</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Plan Your Private Event?</h3>
              <p className="text-lg mb-6">
                Contact our events team to discuss your vision and receive a custom proposal.
              </p>
              <div className="space-y-2 mb-6">
                <p><strong>Events Hotline:</strong> +971 4 XXX XXXX</p>
                <p><strong>Email:</strong> events@altitudearena.ae</p>
              </div>
              <Link to="/contact-us" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VenuePrivatization;
