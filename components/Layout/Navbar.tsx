import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_INFO } from '../../constants';
import { useCurrency } from '../../context/CurrencyContext';
import { Currency } from '../../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { currency, setCurrency } = useCurrency();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single text element wordmark */}
          <Link to="/" className="text-xl font-extrabold tracking-tight text-slate-950 font-display whitespace-nowrap">
            Land & Properties
          </Link>

          {/* Zone 2: 4-5 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors whitespace-nowrap hover:text-slate-950 ${
                  isActive(link.path)
                    ? 'text-slate-950 font-semibold border-b-2 border-slate-900 pb-0.5'
                    : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Currency Switcher */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-xs font-semibold">
              {(['NGN', 'USD', 'GBP'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2 py-1 rounded transition-colors whitespace-nowrap ${
                    currency === curr
                      ? 'bg-white text-slate-900 shadow-xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  title={`View prices in ${curr}`}
                >
                  {curr === 'NGN' ? '₦ NGN' : curr === 'USD' ? '$ USD' : '£ GBP'}
                </button>
              ))}
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Land%20and%20Properties,%20I%20would%20like%20to%20inquire%20about%20your%20verified%20properties.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-950 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
            >
              Book Inspection
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Currency toggle on mobile */}
            <div className="flex items-center bg-slate-100 rounded-md p-0.5 text-xs font-semibold">
              {(['NGN', 'USD'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2 py-1 rounded ${
                    currency === curr ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  {curr === 'NGN' ? '₦' : '$'}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive(link.path)
                    ? 'bg-slate-100 text-slate-950 font-bold'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 py-2.5 rounded-lg"
            >
              <Phone size={14} /> Call {COMPANY_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello,%20I%20am%20interested%20in%20verified%20properties`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs font-semibold text-white bg-slate-950 py-2.5 rounded-lg"
            >
              Book Inspection on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
