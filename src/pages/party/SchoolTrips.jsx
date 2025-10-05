import React from 'react';
import { Link } from 'react-router-dom';

const SchoolTrips = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">School Trips</h1>
          <p className="text-xl">Educational fun and team building for students of all ages</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            <h2 className="text-4xl font-bold mb-12 text-center text-green-600">Educational Packages</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">PRIMARY SCHOOL</h3>
                  <div className="text-3xl font-bold text-green-600">AED 45</div>
                  <p className="text-sm text-gray-600">Per student | Ages 5-11</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Soft play area access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Mini bowling lanes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Age-appropriate arcade games</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Educational activity worksheets</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Supervised group activities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Healthy snack included</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/contact-us" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Book Trip
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-lg shadow-lg border-4 border-blue-300">
                <div className="text-center mb-6">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm mb-2">MOST POPULAR</div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">MIDDLE SCHOOL</h3>
                  <div className="text-3xl font-bold text-blue-600">AED 65</div>
                  <p className="text-sm text-gray-600">Per student | Ages 12-15</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Laser tag team battles</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Trampoline park access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Bowling competitions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Team building challenges</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>STEM activity stations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-blue-500">✓</span>
                    <span>Lunch package included</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/contact-us" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Book Trip
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">HIGH SCHOOL</h3>
                  <div className="text-3xl font-bold text-purple-600">AED 85</div>
                  <p className="text-sm text-gray-600">Per student | Ages 16-18</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Full facility access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>VR gaming experiences</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Escape room challenges</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Leadership development activities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Career exploration workshops</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-purple-500">✓</span>
                    <span>Full meal package</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link to="/contact-us" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Book Trip
                  </Link>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center text-orange-600">Educational Benefits</h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="font-bold text-orange-600 mb-2">STEM Learning</h3>
                <p className="text-sm">Physics concepts through gaming, technology exploration</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-red-600 mb-2">Teamwork</h3>
                <p className="text-sm">Collaborative activities that build communication skills</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="font-bold text-green-600 mb-2">Physical Activity</h3>
                <p className="text-sm">Promoting healthy lifestyle and physical fitness</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-blue-600 mb-2">Problem Solving</h3>
                <p className="text-sm">Critical thinking through games and challenges</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600">What Teachers Say</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MS
                  </div>
                  <div>
                    <h4 className="font-bold">Ms. Sarah Ahmed</h4>
                    <p className="text-sm text-gray-600">Grade 7 Science Teacher</p>
                  </div>
                </div>
                <p className="italic">
                  "The STEM activities at Altitude Arena perfectly complement our physics curriculum. 
                  Students could see real-world applications of concepts like force, motion, and energy through the games."
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    MR
                  </div>
                  <div>
                    <h4 className="font-bold">Mr. Rashid Al-Mansouri</h4>
                    <p className="text-sm text-gray-600">PE Department Head</p>
                  </div>
                </div>
                <p className="italic">
                  "Excellent facility for promoting physical activity in a fun environment. 
                  The team building aspects really helped our students develop better cooperation skills."
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Safety & Supervision</h2>

            <div className="bg-pink-50 p-8 rounded-lg mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-pink-600">Safety Measures</h3>
                  <ul className="space-y-2">
                    <li>• Certified staff supervision for all activities</li>
                    <li>• Age-appropriate equipment and challenges</li>
                    <li>• First aid trained personnel on-site</li>
                    <li>• Emergency procedures clearly established</li>
                    <li>• Regular safety briefings for students</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-pink-600">Teacher Support</h3>
                  <ul className="space-y-2">
                    <li>• Pre-visit planning sessions available</li>
                    <li>• Educational materials provided</li>
                    <li>• Flexible scheduling to fit curriculum</li>
                    <li>• Post-visit follow-up activities</li>
                    <li>• Teacher appreciation discounts</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-center text-cyan-600">Booking Information</h2>

            <div className="bg-cyan-50 p-8 rounded-lg mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-bold text-cyan-600 mb-2">Group Requirements</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Minimum 20 students</li>
                    <li>• Maximum 60 students per visit</li>
                    <li>• 1 teacher per 10 students required</li>
                    <li>• Advanced booking required</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-cyan-600 mb-2">Available Times</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Monday-Thursday: 9:00 AM - 2:00 PM</li>
                    <li>• Friday: 9:00 AM - 12:00 PM</li>
                    <li>• Duration: 2-4 hours</li>
                    <li>• Flexible scheduling available</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-cyan-600 mb-2">Special Offers</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 10% discount for repeat bookings</li>
                    <li>• Free teacher admission</li>
                    <li>• Educational materials included</li>
                    <li>• Flexible payment terms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Plan Your Educational Adventure</h3>
              <p className="text-lg mb-6">
                Contact our education team to customize the perfect learning experience for your students.
              </p>
              <div className="space-y-2 mb-6">
                <p><strong>Education Coordinator:</strong> +971 4 XXX XXXX</p>
                <p><strong>Email:</strong> education@altitudearena.ae</p>
              </div>
              <Link to="/contact-us" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
                Book School Trip
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolTrips;
