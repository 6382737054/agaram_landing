import React from 'react';
import { 
  Shield, 
  Phone, 
  Mail, 
  Globe, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-50 to-amber-100 border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-amber-700" />
                <h3 className="text-xl font-serif text-amber-900">AGARAM</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Empowering governance through digital innovation and administrative excellence in Tamil Nadu.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-amber-900 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Services', 'Current Postings', 'Transfers', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-amber-700 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-amber-900 font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 text-amber-700" />
                  Fort St. George, Chennai
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <Phone className="w-4 h-4 text-amber-700" />
                  +91 44 2567 8901
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <Mail className="w-4 h-4 text-amber-700" />
                  contact@tn.gov.in
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <Globe className="w-4 h-4 text-amber-700" />
                  www.tn.gov.in
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-amber-900 font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="bg-amber-100 p-2 rounded-lg hover:bg-amber-200 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-amber-700" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-200 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>© 2024 Government of Tamil Nadu. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;