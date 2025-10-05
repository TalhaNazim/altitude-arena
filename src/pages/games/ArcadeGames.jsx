import React from 'react';
import { Link } from 'react-router-dom';
import bearMascot from '../../assets/bear_mascot.png';

const ArcadeGames = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6">
                Arcade<br/>
                Games in<br/>
                Dubai
              </h1>
              <p className="text-xl mb-8">
                We're here to pump you up with challenges, fun, food, laughter, and memories!
              </p>
            </div>
            <div className="flex justify-center">
              <img src={bearMascot} alt="Altitude Arena Mascot" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Excitement Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4">Bearly containing</h2>
          <h2 className="text-5xl font-bold mb-8">your excitement?</h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Relive The Classics And Embrace The Future: The World Of Arcade Games</h2>
            
            <div className="space-y-8 text-lg">
              <p>
                Those vibrant cabinets filled with flashing lights, captivating sounds, and addictive gameplay have held a special place in our hearts for generations. From classic button mashers to innovative motion-controlled experiences, we offer a unique blend of nostalgia, challenge, and pure fun.
              </p>

              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-orange-400">Level Up Your Fun At Altitude Arena's Arcade Games In Dubai</h3>
                <p>
                  Gone are the days of clunky joysticks and pixelated graphics. Altitude Arena's Arcade Game boasts state-of-the-art technology, immersing you in breathtaking visuals, responsive controls, and cutting-edge gaming experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">What Sets Altitude Arena Apart From Other Arcade Games In Dubai?</h2>
            
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Cutting-Edge Tech</h3>
                <p>
                  Altitude Arena features the latest technology, delivering unparalleled graphics, smooth gameplay, and innovative experiences you won't find in any other arcade game arena in Dubai.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-pink-400">Diverse Game Library</h3>
                <p>
                  Our extensive library caters to all tastes and interests. Challenge your friends in classic fighting games, race to the finish line in heart-pounding driving simulators, or test your reflexes in action-packed adventures.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Something for Everyone</h3>
                <p>
                  Whether you're a seasoned gamer or a curious newcomer, Altitude Arena's Arcade Game has something for you. Rediscover the joy of classic arcade titles or dive into the future of gaming with cutting-edge experiences.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Endless Entertainment Under One Roof</h3>
                <p>
                  We're a one-stop shop for family fun. Challenge yourself on activities, soar through the air in the trampoline park, or unwind with a game of bowling – all conveniently located within Altitude Arena!
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl mb-6">
                Altitude Arena's Arcade Games Arena in Dubai is the ultimate destination for gamers of all ages and skill levels. So, why wait? Visit us today and step into the future of entertainment and experience the thrill of cutting-edge technology, a diverse game library, and endless fun!
              </p>
              <Link to="/contact-us" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg text-xl transition-colors">
                Start Gaming Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-orange-400">Game Categories</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Classic Arcade</h3>
                <p>Relive the golden age with timeless classics that never go out of style.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Racing Games</h3>
                <p>Feel the adrenaline rush with high-speed racing simulators.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Fighting Games</h3>
                <p>Test your skills in epic battles and tournaments.</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Shooting Games</h3>
                <p>Aim, shoot, and conquer in action-packed adventures.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Rhythm Games</h3>
                <p>Dance and move to the beat in musical challenges.</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Prize Games</h3>
                <p>Win amazing prizes and tickets in skill-based games.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArcadeGames;
