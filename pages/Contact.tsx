import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, MOCK_PROPERTIES } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Physical Inspection',
    propertyInterest: MOCK_PROPERTIES[0].title,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-2">
            <ShieldCheck size={14} />
            <span>Corporate Contact & Inspection Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display">
            Speak with an Accredited Advisor
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Whether you are in Lagos, Abuja, or across the Atlantic, our property legal and sales specialists are on standby to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Side (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                Direct Channels
              </span>
              <h2 className="text-xl font-bold font-display text-white mb-6">Contact Directory</h2>
              
              <div className="space-y-6 text-xs">
                
                {/* Lagos HQ */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Lagos Head Office</h3>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">{COMPANY_INFO.address}</p>
                    <span className="text-[11px] text-emerald-400 font-medium mt-1 block">
                      Departure point for Saturday Inspection Shuttles (10 AM)
                    </span>
                  </div>
                </div>

                {/* Abuja Branch */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Abuja Branch Office</h3>
                    <p className="text-slate-300 mt-0.5 leading-relaxed">{COMPANY_INFO.branchAbuja}</p>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Guzape, Maitama & Lugbe regional portfolio
                    </span>
                  </div>
                </div>

                {/* Phone & Diaspora line */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Telephone & Hotline</h3>
                    <p className="text-slate-300 font-mono mt-0.5">{COMPANY_INFO.phone}</p>
                    <p className="text-slate-300 font-mono">{COMPANY_INFO.phoneSecondary}</p>
                    <div className="mt-1 text-[11px] text-slate-400">
                      <span>Diaspora Desk (London): </span>
                      <span className="text-emerald-400 font-mono">{COMPANY_INFO.diasporaHotline}</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Email Inquiries</h3>
                    <p className="text-slate-300 font-mono mt-0.5">{COMPANY_INFO.email}</p>
                    <p className="text-slate-300 font-mono">{COMPANY_INFO.salesEmail}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Operating Hours</h3>
                    <p className="text-slate-300 mt-0.5">Monday – Friday: 8:00 AM – 6:00 PM WAT</p>
                    <p className="text-slate-300">Saturday: 9:00 AM – 4:00 PM (Site Inspections)</p>
                    <p className="text-emerald-400 mt-0.5">24/7 WhatsApp Concierge Service</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick WhatsApp Action Box */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Land%20and%20Properties,%20I%20would%20like%20to%20connect%20with%20a%20property%20consultant.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors"
              >
                <MessageCircle size={16} />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Form Side (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <h2 className="text-lg font-bold font-display text-slate-950 mb-1">
                  Schedule an Inspection or Inquiry
                </h2>
                <p className="text-slate-500 text-xs mb-4">
                  Please provide your details and an advisor will contact you within 2 business hours.
                </p>

                {/* Name */}
                <div>
                  <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Barrister Emeka Danjuma"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 or Diaspora number"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                    />
                  </div>
                </div>

                {/* Inquiry Type & Property */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                      Purpose of Inquiry
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900"
                    >
                      <option value="Physical Inspection">Book Saturday Physical Inspection</option>
                      <option value="Virtual Video Tour">Virtual Live WhatsApp Video Tour</option>
                      <option value="Title Verification">Title Verification & Document Search</option>
                      <option value="Outright Purchase">Outright Purchase / Payment Plan</option>
                      <option value="General Inquiry">General Real Estate Advisory</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                      Property of Interest
                    </label>
                    <select
                      value={formData.propertyInterest}
                      onChange={e => setFormData({ ...formData, propertyInterest: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900"
                    >
                      {MOCK_PROPERTIES.map(p => (
                        <option key={p.id} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    Special Requirements or Questions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us if you prefer a specific pickup location, questions about title perfection, or timing..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors shadow-xs"
                >
                  <Send size={15} />
                  <span>Submit Inquiry Request</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Your contact details are encrypted and handled in strict accordance with SCUML compliance.
                </p>

              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-950 font-display">Inquiry Received Successfully</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our designated advisor for <strong>{formData.propertyInterest}</strong> has received your request and will contact you at <strong>{formData.phone}</strong> shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.propertyInterest)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Open Fast-Track WhatsApp Chat
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
