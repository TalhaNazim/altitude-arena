import React from 'react';

const SafetyPolicy = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">Safety Policy</h1>
          <p className="text-xl">Your safety is our top priority at Altitude Arena</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <h2 className="text-3xl font-bold mb-8 text-green-600">Our Safety Commitment</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <p className="text-lg leading-relaxed">
                At Altitude Arena, we are committed to providing a safe, secure, and enjoyable environment for all our guests. 
                Our comprehensive safety policy ensures that every activity, piece of equipment, and operational procedure 
                meets or exceeds industry safety standards. We continuously monitor, update, and improve our safety protocols 
                to maintain the highest level of protection for our visitors.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-blue-600">Equipment Safety Standards</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Daily Equipment Inspections</h3>
                <ul className="space-y-2">
                  <li>• All equipment inspected before facility opening</li>
                  <li>• Certified technicians perform detailed safety checks</li>
                  <li>• Equipment immediately removed if any issues detected</li>
                  <li>• Maintenance logs kept for all equipment</li>
                  <li>• Regular third-party safety audits conducted</li>
                </ul>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-teal-600">Equipment Certification</h3>
                <ul className="space-y-2">
                  <li>• All equipment meets international safety standards</li>
                  <li>• Regular certification renewals and updates</li>
                  <li>• Manufacturer guidelines strictly followed</li>
                  <li>• Professional installation and setup</li>
                  <li>• Emergency stop systems on all motorized equipment</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-purple-600">Staff Training & Qualifications</h2>

            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Comprehensive Staff Training Program</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Safety Certifications Required:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• First Aid and CPR certification</li>
                    <li>• Activity-specific safety training</li>
                    <li>• Emergency response procedures</li>
                    <li>• Equipment operation certification</li>
                    <li>• Customer safety management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Ongoing Training Requirements:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Monthly safety refresher courses</li>
                    <li>• Quarterly emergency drill participation</li>
                    <li>• Annual certification renewals</li>
                    <li>• New equipment training as needed</li>
                    <li>• Customer service and safety integration</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-red-600">Activity-Specific Safety Protocols</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-red-600">Laser Tag Safety</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• Eye-safe laser technology only</li>
                  <li>• Protective eyewear provided when required</li>
                  <li>• Non-slip flooring in all play areas</li>
                  <li>• Emergency lighting systems</li>
                  <li>• Clear exit routes marked and lit</li>
                  <li>• Staff monitoring throughout games</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Trampoline Safety</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• Professional-grade trampoline beds</li>
                  <li>• Safety padding on all frame edges</li>
                  <li>• Height and weight restrictions enforced</li>
                  <li>• Trained spotters for ninja courses</li>
                  <li>• Foam pit safety protocols</li>
                  <li>• Regular tension and wear inspections</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-yellow-600">Climbing Wall Safety</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• Auto-belay systems with backup safety</li>
                  <li>• Professional climbing harnesses</li>
                  <li>• Regular rope and hardware inspection</li>
                  <li>• Certified climbing instructors on duty</li>
                  <li>• Safety mats at base of all walls</li>
                  <li>• Weight and age restrictions enforced</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-600">VR Games Safety</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li>• Sanitized equipment between users</li>
                  <li>• Clear play boundaries marked</li>
                  <li>• Motion sickness monitoring</li>
                  <li>• Age-appropriate content filtering</li>
                  <li>• Emergency stop procedures</li>
                  <li>• Staff supervision during sessions</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-indigo-600">Emergency Procedures</h2>

            <div className="bg-indigo-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-indigo-600">Emergency Response Plan</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-indigo-600">Medical Emergencies:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Immediate first aid response</li>
                    <li>• Emergency services contacted when needed</li>
                    <li>• Trained medical response team on-site</li>
                    <li>• Clear evacuation routes maintained</li>
                    <li>• Emergency contact information collected</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-indigo-600">Facility Emergencies:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Fire suppression systems throughout</li>
                    <li>• Emergency lighting and exit signs</li>
                    <li>• Regular evacuation drills conducted</li>
                    <li>• Communication systems for alerts</li>
                    <li>• Coordination with local emergency services</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-pink-600">Health & Hygiene Standards</h2>

            <div className="bg-pink-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-pink-600">Cleanliness & Sanitization</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Equipment Cleaning:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Sanitized between each use</li>
                    <li>• Deep cleaning daily</li>
                    <li>• Hospital-grade disinfectants</li>
                    <li>• UV sanitization when applicable</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Facility Maintenance:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Hourly cleaning schedules</li>
                    <li>• Air filtration systems</li>
                    <li>• Regular deep cleaning</li>
                    <li>• Waste management protocols</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Health Monitoring:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Staff health screenings</li>
                    <li>• Illness reporting procedures</li>
                    <li>• Guest health guidelines</li>
                    <li>• Outbreak prevention measures</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-cyan-600">Guest Responsibilities</h2>

            <div className="bg-cyan-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-cyan-600">What We Expect From Our Guests</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Before Participating:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Complete and sign safety waivers</li>
                    <li>• Disclose any medical conditions</li>
                    <li>• Follow dress code requirements</li>
                    <li>• Attend mandatory safety briefings</li>
                    <li>• Ask questions if unsure about anything</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">During Activities:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Follow all staff instructions</li>
                    <li>• Stay within designated areas</li>
                    <li>• Report unsafe conditions immediately</li>
                    <li>• Use equipment as instructed only</li>
                    <li>• Respect other guests' safety</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-orange-600">Incident Reporting & Investigation</h2>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-orange-600">Our Commitment to Continuous Improvement</h3>
              <p className="mb-4">
                Every incident, no matter how minor, is thoroughly documented and investigated to prevent future occurrences. 
                We maintain detailed records and work with safety experts to continuously improve our protocols.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Incident Response:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Immediate care and assistance</li>
                    <li>• Detailed incident documentation</li>
                    <li>• Witness statements collected</li>
                    <li>• Equipment inspection if involved</li>
                    <li>• Follow-up with affected parties</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Investigation Process:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Root cause analysis conducted</li>
                    <li>• Safety protocol review</li>
                    <li>• Staff retraining if needed</li>
                    <li>• Equipment modifications if required</li>
                    <li>• Policy updates implemented</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Safety Questions or Concerns?</h3>
              <p className="mb-4">
                We welcome all safety-related questions and feedback. Your input helps us maintain the highest safety standards.
              </p>
              <p className="text-sm text-gray-600">
                Contact our Safety Manager at safety@altitudearena.ae or speak with any staff member.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SafetyPolicy;
