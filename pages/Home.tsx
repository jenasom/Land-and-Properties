import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, FileCheck, Phone, Video, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_PROPERTIES, MOCK_REVIEWS, VERIFICATION_GUARANTEES, FAQ_ITEMS, COMPANY_INFO } from '../constants';
import { PropertyCard } from '../components/UI/PropertyCard';
import { TitleVerificationModal } from '../components/UI/TitleVerificationModal';
import { SafeImage } from '../components/UI/SafeImage';
import { Property } from '../types';

export const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'House' | 'Land'>('All');
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [selectedPropertyForVerify, setSelectedPropertyForVerify] = useState<Property | undefined>(undefined);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredProperties = MOCK_PROPERTIES.filter(p => {
    if (activeCategory === 'All') return true;
    return p.category === activeCategory;
  });

  const handleOpenVerifyModal = (prop?: Property) => {
    setSelectedPropertyForVerify(prop);
    setIsVerifyModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[640px] flex items-center bg-slate-950 text-white overflow-hidden py-20">
        
        {/* Background photo of luxury Nigerian estate house */}
        <div className="absolute inset-0 z-0">
          <SafeImage
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1920&q=80"
            alt="Contemporary Nigerian Luxury Estate Mansion in Lekki"
            fallbackCategory="House"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            
            {/* Trust Kicker (clean unboxed text) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4 tracking-wide uppercase">
              <ShieldCheck size={16} />
              <span>Certified Titles · Alausa & AGIS Verified · Instant Allocation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-tight mb-6">
              Buy Verified Lands & Modern Estate Houses in Nigeria.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              100% litigation-free property ownership with official Governor’s Consent, C of O, and Gazette titles. Free weekend chauffeur inspections in Lagos and Abuja, plus live video inspections for Diaspora investors.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/properties"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm"
              >
                <span>Browse Available Properties</span>
                <ArrowRight size={16} />
              </Link>

              <button
                type="button"
                onClick={() => handleOpenVerifyModal()}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-xl font-semibold text-sm backdrop-blur-sm transition-colors"
              >
                <FileCheck size={16} className="text-emerald-400" />
                <span>Verify a Property Title</span>
              </button>
            </div>

            {/* Micro stats */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-slate-300 text-xs">
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-white">850+</span>
                <span className="text-slate-400">Inspections Completed</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-white">100%</span>
                <span className="text-slate-400">Zero Omo-Onile Guarantee</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold font-mono text-white">RC: 1849204</span>
                <span className="text-slate-400">CAC & SCUML Certified</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust & Guarantee Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {VERIFICATION_GUARANTEES.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  {item.stat}
                </span>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                Direct Developer Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-display mt-1">
                Featured Lands & Estate Houses
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Contemporary duplexes, serviced terraces, and master-planned land schemes in Lagos & Abuja.
              </p>
            </div>

            {/* Interactive Filter Controls (Functional button tabs) */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto border border-slate-200 text-xs font-medium">
              {(['All', 'House', 'Land'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    activeCategory === cat
                      ? 'bg-white text-slate-950 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {cat === 'All' ? 'All Listings' : cat === 'House' ? 'Estate Houses & Duplexes' : 'Verified Land Schemes'}
                </button>
              ))}
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.slice(0, 6).map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onVerifyClick={handleOpenVerifyModal}
              />
            ))}
          </div>

          {/* See all link */}
          <div className="mt-12 text-center">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors shadow-sm"
            >
              <span>Explore All {MOCK_PROPERTIES.length} Verified Properties</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* Due Diligence & Verification Mechanism */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Transparency First
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              How We Safeguard Your Nigerian Real Estate Investment
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              We eliminate title fraud, overlapping boundary disputes, and land-grabber harassment with an unyielding 4-point verification protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Cadastral Survey & Beacon Coordinates',
                desc: 'Surveyor-General certified coordinates (Pillar beacons) confirmed with high-precision GPS to prevent overlaps.'
              },
              {
                step: '02',
                title: 'Lands Bureau File Perfection',
                desc: 'Official searches conducted at Lagos State Lands Bureau (Alausa) or AGIS (Abuja) to verify root of title.'
              },
              {
                step: '03',
                title: 'Independent Legal Audit',
                desc: 'Our retained Senior Advocates and solicitors review all probate, gazettes, and court histories.'
              },
              {
                step: '04',
                title: 'Instant Deed & Allocation',
                desc: 'Physical pegging on site and handover of provisional allotment letter and deed immediately upon subscription.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 relative">
                <span className="text-3xl font-mono font-bold text-slate-700 block mb-3">
                  {item.step}
                </span>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Verification CTA Bar */}
          <div className="mt-10 p-6 bg-slate-900/60 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-white text-base">Have a specific property in mind?</h4>
              <p className="text-xs text-slate-400">
                Download a verified legal dossier with sample survey plans and state file numbers.
              </p>
            </div>
            <button
              onClick={() => handleOpenVerifyModal()}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
            >
              Open Title Verification Tool
            </button>
          </div>

        </div>
      </section>

      {/* Diaspora Investor Spotlight */}
      <section className="py-16 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                UK · USA · Canada · Europe · UAE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1 mb-4">
                The Dedicated Diaspora Real Estate Desk
              </h2>
              <p className="text-sm text-emerald-100/90 leading-relaxed mb-6">
                Living abroad shouldn’t mean risking your hard-earned funds on dubious middlemen or unreliable relatives. We provide a transparent, end-to-end framework tailored specifically for Nigerians in the diaspora.
              </p>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center shrink-0 text-emerald-300">
                    <Video size={13} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Live WhatsApp & Zoom Video Inspections</h4>
                    <p className="text-emerald-200">Our site engineer conducts interactive live video walkthroughs showing real-time road conditions, drainage, and progress.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center shrink-0 text-emerald-300">
                    <ShieldCheck size={13} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Direct Power of Attorney & Corporate Escrow</h4>
                    <p className="text-emerald-200">All payments are made to our audited corporate bank account with official SCUML compliance certification.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center shrink-0 text-emerald-300">
                    <Phone size={13} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">London & International Desk Support</h4>
                    <p className="text-emerald-200">Call our direct international line at {COMPANY_INFO.diasporaHotline} or chat with our diaspora coordinator on WhatsApp.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello,%20I%20am%20a%20Diaspora%20buyer%20inquiring%20about%20verified%20properties.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-emerald-950 hover:bg-emerald-50 px-5 py-2.5 rounded-lg text-xs font-bold transition-colors"
                >
                  Schedule Virtual Inspection
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-800">
              <SafeImage
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Contemporary Nigerian Estate House Exterior with Paved Interlocking"
                fallbackCategory="House"
                containerClassName="w-full h-80 lg:h-96"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                  Featured Diaspora Investment
                </span>
                <p className="font-bold text-sm">The Oakwood 5-Bedroom Luxury Duplex, Lekki Phase 1</p>
                <p className="text-xs text-slate-300">Turnkey delivery with guaranteed 11-13% annual rental yield.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Attributable Client Reviews */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Verified Client Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-950 mt-1">
              Trusted by 500+ Landowners & Investors
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Hear directly from professionals, diaspora residents, and corporate executives who secured their property with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-amber-500 text-xs font-mono font-bold mb-3">
                    ★★★★★ <span className="ml-1 text-slate-400 font-sans text-[11px]">(5.0)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 italic">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-xs">{review.name}</h4>
                  <p className="text-[11px] text-slate-500">{review.role}</p>
                  <p className="text-[10px] text-emerald-700 font-semibold mt-1">
                    Purchased: {review.propertyBought}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-950 mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between text-sm font-semibold text-slate-900 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-slate-900' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-white border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Final Action Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-2">
            Secure Your Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4">
            Don't Wait to Buy Real Estate. Buy Real Estate and Wait.
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Our property specialists are ready to guide you through property selection, physical site inspections, and title verification searches.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/properties"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-sm"
            >
              Browse Verified Properties
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors"
            >
              Book Site Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Title Verification Modal */}
      <TitleVerificationModal
        isOpen={isVerifyModalOpen}
        onClose={() => setIsVerifyModalOpen(false)}
        initialProperty={selectedPropertyForVerify}
      />

    </div>
  );
};
