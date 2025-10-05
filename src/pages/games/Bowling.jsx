import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const Bowling = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">Bowling In Dubai</h1>
              <h2 className="text-3xl font-bold mb-8 text-blue-300">Fun and Exciting Bowling Games for Friends & Family</h2>
              <p className="text-xl mb-8">
                Bowling Games that are fun for everyone - All ages and skill levels
              </p>
              <p className="text-lg mb-8">
                Whether a beginner or an expert, the excitement to knock down pins never goes away.
              </p>
              
              <div className="space-y-4">
                <div className="bg-black/50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-400">BOWLING</h3>
                  <p className="text-lg">Price: AED 60 (Per Person)</p>
                  <p className="text-lg">AED 249 (5 Pax Per Hour)</p>
                </div>
                <div className="bg-black/50 p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-400">HYPERBOWL</h3>
                  <p className="text-lg">AED 299 (5 Pax Per Hour)</p>
                  <p className="text-sm text-gray-300">Get a free upgrade to Hyperbowl on group booking of 5 or more players</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img src={bearMascot} alt="Altitude Arena Mascot" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Roll Strikes Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Roll strikes and</h2>
          <h2 className="text-5xl font-bold mb-4">spares, bring out</h2>
          <h2 className="text-5xl font-bold mb-8">your Inner Beast!</h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Bowling In Dubai: Strike Up Some Fun Today!</h2>
            
            <div className="space-y-8 text-lg">
              <p>
                In vibrant Dubai, where people are looking for exciting activities beyond the desert, we offer a perfect blend of fun and competition. Whether you're a seasoned bowler or a complete beginner, our Bowling lanes in Al Quoz 2 cater to all skill levels. So, lace up your shoes and get ready to strike up some fun today!
              </p>

              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-orange-400">Altitude Arena – A Vibrant Space For Bowling In Dubai</h3>
                <p>
                  Looking for a classic and thrilling way to spend time with friends and family in Dubai? Head down to Altitude Arena, an exciting place with a vibrant atmosphere and friendly staff. Altitude Arena offers the perfect setting for an unforgettable bowling experience.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6 text-center text-orange-400">Explore Altitude Arena's Offerings As One Of The Best Bowling Places In Dubai</h3>
                <p className="text-center">
                  Whether you're a seasoned bowler aiming for the perfect strike or a beginner just starting out, Altitude Arena caters to all skill levels.
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
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Why Do You Consider Altitude Arena As The One-Stop Bowling Alley In Dubai?</h2>
            
            <p className="text-xl mb-8">
              Altitude Arena is your one-stop destination whether you want to go with family, friends, or your kids. Here's why:
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-orange-500 text-2xl">•</span>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-orange-400">State-of-the-art bowling lanes and equipment</h4>
                  <p>Enjoy a smooth alley experience with well-maintained lanes and modern equipment.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-orange-500 text-2xl">•</span>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-orange-400">Family-friendly atmosphere</h4>
                  <p>The friendly staff and welcoming environment create a relaxing and enjoyable experience for everyone.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-orange-500 text-2xl">•</span>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-orange-400">Something for everyone</h4>
                  <p>While you wait your turn, you can enjoy arcade games, a delicious snack bar, and other exciting activities offered at Altitude Arena.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="text-orange-500 text-2xl">•</span>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-orange-400">Convenient location</h4>
                  <p>Altitude Arena is very conveniently located, making it a great choice for anyone looking for a fun and accessible experience.</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl mb-6">
                So, gather your friends and family, grab your bowling shoes, and head down to <Link to="/contact-us" className="text-orange-400 hover:underline">Altitude Arena Dubai</Link> for a strike-tastic afternoon or evening!
              </p>
              <Link to="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-xl transition-colors">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hyperbowl Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Experience the future of entertainment with Hyperbowl</h2>
            
            <div className="space-y-6 text-lg">
              <p>
                Hyperbowl is a revolutionary new take on bowling that blends the classic game with cutting-edge technology. This state-of-the-art attraction pushes the boundaries of technology and adrenaline, delivering an unparalleled sensory experience.
              </p>
              
              <p className="text-xl font-semibold">
                Prepare to be amazed as this isn't just bowling; it's a high-energy, interactive experience that's set to redefine entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Bowling Rules</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Kindly keep food and drinks off the approach</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Watch your step for safety</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Avoid reaching over the lane</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Please stay in your designated lane</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Roll the balls, don't throw them</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Refrain from climbing on dividers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Feel free to ask for help with heavy balls</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>No fighting or pushing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Handle equipment with care</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p>Follow staff instructions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bowling;
