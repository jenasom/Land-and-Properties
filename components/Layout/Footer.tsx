import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-base shadow-sm">
                LP
              </div>
              <span className="font-extrabold text-base tracking-tight text-white font-display">
                Land and Properties <span className="text-emerald-400 text-xs font-semibold uppercase">Nigeria</span>
              </span>
            </Link>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Nigeria's foremost trust-anchored real estate platform. We specialize in verified, litigation-free estate duplexes and master-planned land schemes across Lagos and Abuja.
            </p>

            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck size={15} />
                <span>CAC Registered: {COMPANY_INFO.cac}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 size={15} className="text-slate-500" />
                <span>Anti-Money Laundering: {COMPANY_INFO.scuml}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-xs space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Portfolio & Properties
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/properties" className="hover:text-emerald-400 transition-colors">
                  All Properties
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-emerald-400 transition-colors">
                  Lagos Estate Duplexes
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-emerald-400 transition-colors">
                  Abuja Luxury Homes
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-emerald-400 transition-colors">
                  Epe & Ibeju-Lekki Lands
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1">
                  <span>Operations Console</span>
                  <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="text-xs space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Due Diligence
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  Title Perfection Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  Governor's Consent Audits
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors">
                  C of O Verification
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  Diaspora Verification Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-xs space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Offices & Hotlines
            </h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-mono">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <span className="font-mono text-emerald-300">Diaspora: {COMPANY_INFO.diasporaHotline}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Bottom Credits */}
        <div className="pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] leading-relaxed max-w-2xl">
            Disclaimer: All land and estate offerings are subject to legal availability and conveyancing checks. Survey coordinates and registry numbers are authenticated by the Surveyors Council of Nigeria (SURCON) and State Lands Bureau.
          </p>
          <p className="text-[11px] whitespace-nowrap">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
