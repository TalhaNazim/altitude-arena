import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Main Pages
import Home from './pages/Home';
import Games from './pages/Games';
import PartyPackages from './pages/PartyPackages';
import Price from './pages/Price';
import Offers from './pages/Offers';
import AltitudeLounge from './pages/AltitudeLounge';
import ContactUs from './pages/ContactUs';

// Games Subpages
import LaserTag from './pages/games/LaserTag';
import Bowling from './pages/games/Bowling';
import Trampoline from './pages/games/Trampoline';
import RollGlider from './pages/games/RollGlider';
import SlimeUniverse from './pages/games/SlimeUniverse';
import VRGames from './pages/games/VRGames';
import SoftPlay from './pages/games/SoftPlay';
import WallClimbing from './pages/games/WallClimbing';
import ArcadeGames from './pages/games/ArcadeGames';
import AllGames from './pages/games/AllGames';

// Party Subpages
import TeamBuilding from './pages/party/TeamBuilding';
import BirthdayParty from './pages/party/BirthdayParty';
import VenuePrivatization from './pages/party/VenuePrivatization';
import SchoolTrips from './pages/party/SchoolTrips';

// Additional Pages
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import CorporateEvents from './pages/CorporateEvents';
import Blogs from './pages/Blogs';
import HouseRules from './pages/HouseRules';
import SafetyPolicy from './pages/SafetyPolicy';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/party-packages" element={<PartyPackages />} />
            <Route path="/price" element={<Price />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/altitude-lounge" element={<AltitudeLounge />} />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* Games Subpages */}
            <Route path="/games/laser-tag" element={<LaserTag />} />
            <Route path="/games/bowling" element={<Bowling />} />
            <Route path="/games/trampoline" element={<Trampoline />} />
            <Route path="/games/roll-glider" element={<RollGlider />} />
            <Route path="/games/slime-universe" element={<SlimeUniverse />} />
            <Route path="/games/vr-games" element={<VRGames />} />
            <Route path="/games/soft-play" element={<SoftPlay />} />
            <Route path="/games/wall-climbing" element={<WallClimbing />} />
            <Route path="/games/arcade-games" element={<ArcadeGames />} />
            <Route path="/games/all-games" element={<AllGames />} />

            {/* Party Subpages */}
            <Route path="/party/team-building" element={<TeamBuilding />} />
            <Route path="/party/birthday-party" element={<BirthdayParty />} />
            <Route path="/party/venue-privatization" element={<VenuePrivatization />} />
            <Route path="/party/school-trips" element={<SchoolTrips />} />

            {/* Additional Pages */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/corporate-events" element={<CorporateEvents />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/house-rules" element={<HouseRules />} />
            <Route path="/safety-policy" element={<SafetyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
