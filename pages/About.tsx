import React from 'react';
import { Target, Award, Building2, MapPin, Scale } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { SafeImage } from '../components/UI/SafeImage';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Editorial Header */}
      <section className="bg-slate-950 text-white py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2 block">
            Institutional Real Estate Firm
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display mb-4">
            Engineered on Legal Purity & Land Certainty
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {COMPANY_INFO.name} was established with one mission: to eliminate title disputes, boundary fraud, and land-grabber extortion in Nigerian property ownership.
          </p>
        </div>
      </section>

      {/* Corporate Compliance Dossier */}
      <section className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-slate-400 block mb-0.5">Corporate Affairs Commission</span>
              <span className="font-mono font-bold text-slate-900">{COMPANY_INFO.cac}</span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-slate-400 block mb-0.5">Anti-Money Laundering</span>
              <span className="font-mono font-bold text-slate-900">{COMPANY_INFO.scuml}</span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-slate-400 block mb-0.5">Physical Head Office</span>
              <span className="font-bold text-slate-900 truncate block">Lekki Phase 1, Lagos</span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <span className="text-slate-400 block mb-0.5">Federal Capital Office</span>
              <span className="font-bold text-slate-900 truncate block">CBD, Abuja FCT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
              Our Founding Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-950 mb-4">
              Restoring Integrity to Nigerian Real Estate
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              In Nigeria, acquiring property has historically been fraught with anxiety. Untold numbers of hardworking professionals and diaspora investors have suffered from counterfeit survey plans, uncommitted government acquisitions, and illegal resale by community land grabbers ("omo-onile").
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We founded <strong className="text-slate-900">{COMPANY_INFO.name}</strong> to create an airtight, institutional-grade transaction ecosystem. We do not advertise or sell any parcel of land or estate house that has not undergone multi-stage forensic audit at the State Lands Bureau and Office of the Surveyor-General.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <SafeImage
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
              alt="Land and Properties Nigeria Corporate Architectural Developments"
              fallbackCategory="House"
              containerClassName="w-full h-80"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 backdrop-blur-xs p-4 text-white text-xs">
              <span className="font-semibold block">Richmond Park Estate, Lekki</span>
              <span className="text-slate-300 text-[11px]">Turnkey delivered under Governor's Consent title</span>
            </div>
          </div>
        </div>

        {/* Pillars of Execution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <Target className="text-emerald-700 mb-3" size={24} />
            <h3 className="text-base font-bold text-slate-950 mb-2">Our Mission</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              To empower 5,000 Nigerian families and diaspora investors to secure verified, high-yield land and contemporary estate homes with zero litigation and 100% peace of mind.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <Scale className="text-emerald-700 mb-3" size={24} />
            <h3 className="text-base font-bold text-slate-950 mb-2">Legal Perfection</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every property title—whether Certificate of Occupancy (C of O), Governor’s Consent, or Official Government Gazette—is backed by an indemnity warranty against defect of title.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <Award className="text-emerald-700 mb-3" size={24} />
            <h3 className="text-base font-bold text-slate-950 mb-2">Instant Beacon Handover</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No protracted delays or bureaucratic excuses. Upon down payment or outright completion, buyers receive their survey beacons and registered provisional allotment letter immediately.
            </p>
          </div>
        </div>

        {/* Executive Leadership Team */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Experienced Custodians
            </span>
            <h2 className="text-2xl font-bold font-display text-slate-950 mt-1">
              Executive Leadership & Advisory Board
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Arc. Babatunde Sanusi, FNIA",
                role: "Managing Director & Chief Executive",
                credentials: "22+ years in master-planned estate developments in Lagos & Abuja. Fellow of the Nigerian Institute of Architects."
              },
              {
                name: "Barr. (Mrs.) Folashade Adeleke, LL.M",
                role: "Partner & Head of Legal & Title Conveyance",
                credentials: "Former Special Counsel at Lagos State Ministry of Justice. 16 years specializing in conveyancing and Land Use Act."
              },
              {
                name: "Surv. Chukwuemeka Eze, mnis",
                role: "Chief Cadastral Surveyor",
                credentials: "Registered with Surveyors Council of Nigeria (SURCON). Oversees GPS cadastral coordinate pegging across all schemes."
              }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 text-xs">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm mb-3">
                  {member.name.split(' ')[1]?.charAt(0) || 'L'}
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-0.5">{member.name}</h4>
                <p className="text-emerald-700 font-medium text-[11px] mb-2">{member.role}</p>
                <p className="text-slate-500 leading-relaxed">{member.credentials}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Office Hubs */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Building2 size={16} />
                <span>Flagship Lagos Corporate Office</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Lekki Phase 1 Center</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {COMPANY_INFO.address}
              </p>
              <p className="text-xs text-slate-400">
                Saturday inspection shuttles depart from this office every weekend at 10:00 AM prompt.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <MapPin size={16} />
                <span>Federal Capital Territory Branch</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Abuja Central Business District</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {COMPANY_INFO.branchAbuja}
              </p>
              <p className="text-xs text-slate-400">
                Liaison desk for AGIS title perfection, Guzape villas, and Maitama developments.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Ready to meet our legal conveyance team or inspect a property?
            </span>
            <Link
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              Contact Our Offices
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
};
