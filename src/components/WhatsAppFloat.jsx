import React from 'react';
import whatsappIcon from '../assets/whatsapp_icon.png';

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="https://wa.me/971542669357" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block hover:scale-110 transition-transform duration-300"
      >
        <img 
          src={whatsappIcon} 
          alt="WhatsApp" 
          className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        />
      </a>
    </div>
  );
};

export default WhatsAppFloat;
