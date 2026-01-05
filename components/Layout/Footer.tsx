import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../constants';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Land and Properties</h3>
            <p className="text-sm leading-relaxed mb-4">
              We provide verified, stress-free real estate investment opportunities in Nigeria. Our mission is to make land ownership accessible and secure for everyone.
            </p>
            <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
              <CheckCircle size={16} />
              <span>CAC Registered: {COMPANY_INFO.cac}</span>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/properties" className="hover:text-blue-400 transition-colors">Available Properties</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
              <li><Link to="/admin" className="hover:text-blue-400 transition-colors">Admin Login</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-blue-500" size={18} />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-blue-500" size={18} />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-blue-500" size={18} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <p className="mt-6 text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Land and Properties. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};