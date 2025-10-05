import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-xl">Your privacy is important to us</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold mb-6 text-green-600">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Personal Information</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Name, email address, and phone number for bookings</li>
                <li>Age and emergency contact information for safety purposes</li>
                <li>Payment information for transactions (processed securely)</li>
                <li>Photo and video footage from security cameras and promotional activities</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-blue-600">Usage Information</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Website browsing patterns and preferences</li>
                <li>Activity participation and facility usage</li>
                <li>Feedback and survey responses</li>
                <li>Social media interactions with our accounts</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-green-600">2. How We Use Your Information</h2>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3">
                  <li><strong>Service Delivery:</strong> Process bookings, manage activities, and provide customer support</li>
                  <li><strong>Safety & Security:</strong> Ensure facility safety and emergency response capabilities</li>
                  <li><strong>Communication:</strong> Send booking confirmations, updates, and promotional offers</li>
                  <li><strong>Improvement:</strong> Analyze usage patterns to enhance our services and facilities</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-green-600">3. Information Sharing</h2>
              <p className="mb-4">We do not sell or rent your personal information. We may share information only in these circumstances:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>With service providers who help operate our business (payment processors, booking systems)</li>
                <li>When required by law or to protect safety and security</li>
                <li>With your explicit consent for promotional activities</li>
                <li>In case of business transfer or merger (with notice to affected users)</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 text-green-600">4. Data Security</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-3">Security Measures:</h3>
                <ul className="space-y-2">
                  <li>• Encrypted data transmission and storage</li>
                  <li>• Secure payment processing through certified providers</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Limited access to personal information on need-to-know basis</li>
                  <li>• Staff training on data protection and privacy</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-green-600">5. Your Rights</h2>
              <p className="mb-4">Under UAE data protection laws, you have the right to:</p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-600 mb-2">Access & Control:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Request access to your personal data</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request deletion of your data</li>
                    <li>• Opt-out of marketing communications</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-600 mb-2">Data Portability:</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Receive your data in portable format</li>
                    <li>• Transfer data to another service</li>
                    <li>• Restrict processing of your data</li>
                    <li>• Object to certain data uses</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-green-600">6. Cookies & Tracking</h2>
              <p className="mb-4">Our website uses cookies to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Remember your preferences and improve user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Enable social media features and integrations</li>
              </ul>
              <p className="mb-6">You can control cookie settings through your browser preferences.</p>

              <h2 className="text-3xl font-bold mb-6 text-green-600">7. Children's Privacy</h2>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
                <p className="font-semibold mb-2">Special Protection for Minors:</p>
                <p>
                  We take extra care with information from visitors under 18. Parental consent is required 
                  for data collection from minors, and we limit data collection to what's necessary for 
                  safety and service delivery.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-green-600">8. Data Retention</h2>
              <p className="mb-6">
                We retain personal information only as long as necessary for the purposes outlined in this policy, 
                or as required by law. Booking information is typically retained for 3 years for business and 
                legal purposes, while marketing data is kept until you opt-out.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-green-600">9. International Transfers</h2>
              <p className="mb-6">
                Your information may be processed in countries outside the UAE for technical or business purposes. 
                We ensure appropriate safeguards are in place to protect your data during international transfers.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-green-600">10. Contact Us</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>For privacy-related questions or requests:</strong></p>
                <p>Email: privacy@altitudearena.ae</p>
                <p>Phone: 800 ALTITUDE (800 258 484)</p>
                <p>Address: Dubai, United Arab Emirates</p>
                <p className="mt-4 text-sm text-gray-600">
                  We will respond to privacy requests within 30 days of receipt.
                </p>
              </div>

              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Last Updated:</strong> October 2025<br/>
                  <strong>Effective Date:</strong> This policy is effective immediately upon posting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
