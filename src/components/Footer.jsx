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
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Clinic Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-gray-900">Dental Dynamics</h4>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-700" />
            31,32, Bank Square Market, Block C Model Town, Lahore, 54700
          </p>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhone className="text-gray-700" />
            <a href="tel:+923008444631" className="hover:underline">
              +92 300 8444631
            </a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope className="text-gray-700" />
            <a href="mailto:info@dentaldynamics.pk" className="hover:underline">
              info@dentaldynamics.pk
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick Links">
          <h4 className="text-xl font-semibold mb-4 text-gray-900">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/#services" className="hover:underline">
                Dental Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        {/* Top Services */}
        <nav aria-label="Top Services">
          <h4 className="text-xl font-semibold mb-4 text-gray-900">Top Services</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/dental-implants-in-lahore" className="hover:underline">
                Dental Implants in Lahore
              </a>
            </li>
            <li>
              <a href="/teeth-whitening-in-lahore" className="hover:underline">
                Teeth Whitening
              </a>
            </li>
            <li>
              <a href="/root-canal-treatment-in-lahore" className="hover:underline">
                Root Canal Treatment
              </a>
            </li>
            <li>
              <a href="/braces-aligners-in-lahore" className="hover:underline">
                Braces &amp; Aligners
              </a>
            </li>
          </ul>
        </nav>

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
