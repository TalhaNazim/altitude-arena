import React from 'react';

const TermsConditions = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">Terms & Conditions</h1>
          <p className="text-xl">Please read these terms carefully before using our facilities</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold mb-6 text-blue-600">1. General Terms</h2>
              <p className="mb-6">
                By entering Altitude Arena Dubai, you agree to comply with all rules, regulations, and terms of service. 
                These terms apply to all visitors, participants, and guests using our facilities and services.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-blue-600">2. Age Requirements & Supervision</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3">
                  <li><strong>Children under 8:</strong> Must be accompanied by an adult at all times</li>
                  <li><strong>Ages 8-12:</strong> Adult supervision required in activity areas</li>
                  <li><strong>Ages 13-17:</strong> May participate independently with signed waiver from parent/guardian</li>
                  <li><strong>Adults 18+:</strong> Full access to all facilities with signed waiver</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-blue-600">3. Safety Requirements</h2>
              <p className="mb-4">All participants must:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Follow all posted safety rules and staff instructions</li>
                <li>Wear appropriate clothing and closed-toe shoes</li>
                <li>Remove jewelry, loose items, and sharp objects before activities</li>
                <li>Report any injuries or incidents to staff immediately</li>
                <li>Not participate under the influence of alcohol or drugs</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-blue-600">4. Liability & Risk Acknowledgment</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <p className="font-semibold mb-2">Important Notice:</p>
                <p>
                  Participation in activities at Altitude Arena involves inherent risks. By participating, 
                  you acknowledge these risks and agree that Altitude Arena, its employees, and affiliates 
                  are not liable for injuries or damages resulting from normal use of facilities.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-blue-600">5. Booking & Payment Terms</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>All bookings require advance payment or valid payment method</li>
                <li>Group bookings may require deposit and signed agreement</li>
                <li>Prices are subject to change without notice</li>
                <li>Special offers and promotions have specific terms and expiration dates</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-blue-600">6. Facility Rules</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-600 mb-2">Permitted:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Photography for personal use</li>
                    <li>• Outside food for special dietary needs (with approval)</li>
                    <li>• Personal water bottles</li>
                    <li>• Celebration decorations (with approval)</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold text-red-600 mb-2">Prohibited:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Outside food and beverages (except approved items)</li>
                    <li>• Smoking or vaping anywhere on premises</li>
                    <li>• Disruptive or inappropriate behavior</li>
                    <li>• Commercial photography without permission</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-blue-600">7. Lost & Found</h2>
              <p className="mb-6">
                Altitude Arena is not responsible for lost, stolen, or damaged personal items. 
                Lost items will be held for 30 days before disposal. Please secure valuables in provided lockers.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-blue-600">8. Privacy & Data Protection</h2>
              <p className="mb-6">
                We collect and process personal information in accordance with UAE data protection laws. 
                See our Privacy Policy for detailed information about data collection, use, and protection.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-blue-600">9. Modification of Terms</h2>
              <p className="mb-6">
                Altitude Arena reserves the right to modify these terms at any time. 
                Updated terms will be posted on our website and take effect immediately upon posting.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-blue-600">10. Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>For questions about these terms:</strong></p>
                <p>Email: legal@altitudearena.ae</p>
                <p>Phone: 800 ALTITUDE (800 258 484)</p>
                <p>Address: Dubai, United Arab Emirates</p>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Last Updated:</strong> October 2025<br/>
                  <strong>Effective Date:</strong> These terms are effective immediately upon posting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
