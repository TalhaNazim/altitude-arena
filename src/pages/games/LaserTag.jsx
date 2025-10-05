import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const LaserTag = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-orange-500 to-pink-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">
                The best<br/>
                Laser Tag<br/>
                experience in<br/>
                Dubai
              </h1>
              <p className="text-xl mb-8">
                When the adrenaline is high, and your stealthy ninja moves come in handy, know it's time for laser tag in Dubai!
              </p>
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-300">Height Min. 108cm</p>
                  <h3 className="text-xl font-bold text-orange-400">BATTLE ISLAND:</h3>
                  <p className="text-lg">Price: AED 100 (60min)</p>
                  <p className="text-sm text-gray-300">New session every 60 mins</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-400">STAR SHIELD:</h3>
                  <p className="text-lg">Price: AED 99 (60min)</p>
                  <p className="text-sm text-gray-300">New session every 60 mins</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={bearMascot} alt="Altitude Arena Mascot" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Ready Aim Fire Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 text-orange-400">Ready. Aim. Fire.</h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Zap, Dodge, Win: Join in The Laser Tag Fun</h2>
            
            <div className="space-y-8 text-lg">
              <p>
                Laser tag is a heart-pounding recreational activity that blends the excitement of combat games with the safety of non-contact play. Perfect for friends, families, and groups of all ages. It offers a fun-filled experience that gets you moving, working together, and strategizing for victory.
              </p>
              
              <p className="text-center font-semibold text-orange-600">
                Looking for a perfect laser tag arena in Dubai? Your search ends here!
              </p>

              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-orange-400">Two-storey Laser Tag in Dubai</h3>
                <p>
                  Our state-of-the-art two-story arena is the perfect battleground to challenge your friends and family to a heart-pounding laser tag game near you. Traverse through a multi-level battlefield filled with ramps, obstacles, and strategic hiding spots, putting your tactical skills to the test.
                </p>
              </div>

              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-orange-400">High Tech Gear from Red Tactical USA</h3>
                <p>
                  Gear up with the latest technology from Red Tactical USA, the first and only one of its kind in Dubai, and unleash a barrage of laser beams on your opponents. Our immersive arena and advanced equipment create a realistic and exhilarating laser tag experience unlike any other in Dubai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Why Choose Altitude Arena For Laser Tag In Dubai?</h2>
            
            <p className="text-xl mb-8 text-center">
              Here's why Altitude Arena stands out as the ultimate battleground for your next laser tag game:
            </p>

            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">State-of-the-Art Equipment</h3>
                <p>Altitude Arena boasts the latest tactical gear from Red Tactical USA, ensuring a smooth and realistic game.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Thrilling Arena Design</h3>
                <p className="mb-4">Step into a meticulously crafted arena that transports you into a world of strategy and combat. Expect exciting features like:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The multi-level playing field for tactical maneuvering</li>
                  <li>Themed obstacles and props for an immersive experience (think giant tank!)</li>
                  <li>Blacklight environment that adds to the atmosphere of Dubai Laser Tag</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Variety of Game Modes</h3>
                <p>Challenge yourself with different game types of Laser Tag in Dubai like Team Deathmatch, Capture the Flag, and Domination, keeping things fresh and exciting.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Safety First</h3>
                <p>Altitude Arena prioritizes safety with well-maintained equipment and clear safety protocols overseen by experienced staff.</p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Beyond Laser Tag</h3>
                <p>Make a day of it! Altitude Arena is a one-stop entertainment hub offering activities like bowling, a trampoline park, arcade games, and more, perfect for groups with diverse interests.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl mb-6">
                So, what are you waiting for? Gather your squad and head down to <Link to="/contact-us" className="text-orange-400 hover:underline">Altitude Arena in Al Quoz 2</Link> for the ultimate laser tag experience!
              </p>
              <Link to="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Laser Tag Rules</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>All participants must have a valid signed waiver, which an adult should only sign. (18 years or above)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>No running inside the arena</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>No sitting, kneeling and lying down</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>No physical contact or rough play</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>No entry with impairments, injuries, or respiratory issues</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Respect boundaries and stay within the playing area</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Use equipment responsibly; no tampering</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Listen to game referees and follow their instructions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>No climbing on obstacles or structures</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Be courteous and fair to all players</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Report any equipment issues immediately</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Inform the staff in reception before entry in case of any pre-existing medical condition</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Avoid the activity under the influence of medication or alcohol</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LaserTag;
