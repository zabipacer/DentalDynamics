import React from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-6 grid grid-cols-1 justify-between sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Clinic Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-gray-900">Dental Dynamics</h4>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-700" />
            4-Bank Square Market, C-Block, Model Town
              </p>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhone className="text-gray-700" />
            <a href="tel:+923008444631" className="hover:underline">
            +92 300 8444631
           
            </a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope className="text-gray-700" />
            <a href="mailto:Dentaldynamicspakistan@gmail.com" className="hover:underline">
              Dentaldynamicspakistan@gmail.com
            </a>
          </p>
        </div>

        {/* Quick Links */}
       

        {/* Top Services */}
        
        {/* Connect With Us */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-gray-900">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/DentalDynamicsPakistan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaFacebookF className="text-lg" />
            </a>
            <a
              href="https://www.instagram.com/dentaldynamicspakistan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="https://wa.me/923008444631"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FaWhatsapp className="text-lg" />
            </a>
          </div>
          <p className="text-sm">
            Looking for a <strong>top dentist in Model Town or Gulberg, Lahore</strong>? Visit Dental Dynamics for pain-free, advanced dental care.
          </p>
        </div>

      </div>

      <div className="text-center mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} Dental Dynamics, Lahore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
