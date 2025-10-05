import React from 'react';

const HouseRules = () => {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8">House Rules</h1>
          <p className="text-xl">Guidelines for a safe and enjoyable experience at Altitude Arena</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            <h2 className="text-3xl font-bold mb-8 text-red-600">General Facility Rules</h2>
            
            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-red-600">Entry Requirements</h3>
              <ul className="space-y-2">
                <li>• All visitors must sign a waiver before participating in activities</li>
                <li>• Children under 18 require parent/guardian signature on waiver</li>
                <li>• Valid ID required for all participants</li>
                <li>• Closed-toe shoes mandatory for all activities</li>
                <li>• Appropriate athletic clothing recommended</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-orange-600">Prohibited Items & Behaviors</h3>
              <ul className="space-y-2">
                <li>• No outside food or beverages (except for medical/dietary needs with approval)</li>
                <li>• No smoking, vaping, or alcohol consumption anywhere on premises</li>
                <li>• No weapons, sharp objects, or dangerous items</li>
                <li>• No disruptive, aggressive, or inappropriate behavior</li>
                <li>• No running in non-activity areas</li>
                <li>• No climbing on equipment outside designated areas</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-blue-600">Activity-Specific Rules</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Laser Tag Rules</h3>
                <ul className="space-y-2 text-sm">
                  <li>• No physical contact with other players</li>
                  <li>• No covering sensors or equipment</li>
                  <li>• Follow game marshal instructions at all times</li>
                  <li>• No running or aggressive movements</li>
                  <li>• Equipment must be returned after each game</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-600">Trampoline Rules</h3>
                <ul className="space-y-2 text-sm">
                  <li>• One person per trampoline at a time</li>
                  <li>• No flips or dangerous stunts without supervision</li>
                  <li>• Socks must be worn at all times</li>
                  <li>• No food, drinks, or gum while jumping</li>
                  <li>• Follow staff instructions for ninja course</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-purple-600">Bowling Rules</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Bowling shoes must be worn on lanes</li>
                  <li>• No food or drinks on the approach area</li>
                  <li>• Wait for pins to be reset before bowling</li>
                  <li>• No throwing balls in other lanes</li>
                  <li>• Report equipment issues immediately</li>
                </ul>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-pink-600">VR Games Rules</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Follow safety briefing before starting</li>
                  <li>• Stay within designated play area</li>
                  <li>• No sharing headsets for hygiene reasons</li>
                  <li>• Report motion sickness immediately</li>
                  <li>• Handle equipment with care</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-purple-600">Safety & Emergency Procedures</h2>

            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Emergency Protocols</h3>
              <ul className="space-y-2">
                <li>• Report all injuries to staff immediately, no matter how minor</li>
                <li>• Follow evacuation procedures if announced</li>
                <li>• Emergency exits are clearly marked throughout facility</li>
                <li>• First aid stations located at main desk and activity areas</li>
                <li>• Emergency contact numbers posted at all activity stations</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-green-600">Supervision & Age Requirements</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <h3 className="font-bold text-green-600 mb-2">Ages 2-7</h3>
                <p className="text-sm">Adult supervision required at all times. Limited to soft play and designated areas.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <h3 className="font-bold text-yellow-600 mb-2">Ages 8-12</h3>
                <p className="text-sm">Adult supervision required for most activities. Some independent play allowed in designated areas.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h3 className="font-bold text-blue-600 mb-2">Ages 13+</h3>
                <p className="text-sm">Independent participation allowed with signed waiver. Adult supervision recommended for high-intensity activities.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-orange-600">Consequences for Rule Violations</h2>

            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3">
                <li><strong>First Violation:</strong> Verbal warning and rule explanation</li>
                <li><strong>Second Violation:</strong> Temporary suspension from activity (15-30 minutes)</li>
                <li><strong>Third Violation:</strong> Removal from facility without refund</li>
                <li><strong>Serious Violations:</strong> Immediate removal and potential ban from facility</li>
                <li><strong>Safety Violations:</strong> Immediate removal for safety of all participants</li>
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4">Questions About Our Rules?</h3>
              <p className="mb-4">Our staff is here to help ensure everyone has a safe and fun experience!</p>
              <p className="text-sm text-gray-600">
                Contact us at info@altitudearena.ae or speak with any staff member for clarification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HouseRules;
