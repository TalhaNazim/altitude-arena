import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    enquiryType: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-8xl font-bold mb-8 opacity-20 text-gray-400">Contact Us</h1>
            <h2 className="text-6xl font-bold mb-8">Ready to Soar? Reach Out!</h2>
            <div className="text-yellow-400 text-2xl mb-8">
              ~~~~~~~~~~~~~~~~
            </div>
            <h3 className="text-4xl font-bold mb-8">
              Let's start<br/>
              Beast-<br/>
              versation<span className="text-yellow-400">.</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-black/50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-8 text-orange-400">Contact Us</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <select 
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-orange-400 focus:outline-none"
                    required
                  >
                    <option value="">Enquiry Type</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking</option>
                    <option value="party">Party Packages</option>
                    <option value="corporate">Corporate Events</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-orange-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-orange-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-orange-400 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-orange-400 focus:outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg text-lg font-semibold transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-black/50 p-8 rounded-lg">
                <h3 className="text-3xl font-bold mb-6 text-orange-400">Seems like a beast-ful day to chat!</h3>
                <p className="text-lg mb-8">
                  Wanna share something with us? We are at your service, 24X7!
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-yellow-400">Address:</h4>
                    <p className="text-lg">
                      401A, Al Quoz 2<br/>
                      Dubai, United Arab Emirates
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-yellow-400">Opening Hours</h4>
                    <div className="space-y-2">
                      <p>Monday to Friday: 11:00 AM - 11:00 PM</p>
                      <p>Saturday: 10:00 AM - 11:00 PM</p>
                      <p>Sunday: 10:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-8 rounded-lg">
                <h4 className="text-2xl font-bold mb-6 text-orange-400">For Support</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-400">✉️</span>
                    <a href="mailto:hello.dxb@altitudearena.ae" className="text-lg hover:text-orange-400 transition-colors">
                      hello.dxb@altitudearena.ae
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-400">📞</span>
                    <a href="tel:800258484" className="text-lg hover:text-orange-400 transition-colors">
                      800 ALTITUDE (800 258484)
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-400">📱</span>
                    <a href="tel:+971542669357" className="text-lg hover:text-orange-400 transition-colors">
                      If you're unable to reach us, dial 054 2669357
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">Find Us</h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Interactive Map</h3>
              <p className="text-lg text-gray-600">401A, Al Quoz 2, Dubai, UAE</p>
              <p className="text-sm text-gray-500 mt-4">
                Map integration would be implemented here<br/>
                (Google Maps, Mapbox, etc.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Experience the Thrill?</h2>
          <p className="text-xl mb-8">
            Book your adventure today and reach new heights of fun!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:800258484" 
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Call Now: 800 ALTITUDE
            </a>
            <a 
              href="https://wa.me/971542669357" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
