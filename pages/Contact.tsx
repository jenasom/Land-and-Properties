import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Mimic send
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-slate-900 mb-12">Get In Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Side */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
               <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
               <p className="text-slate-400 mb-8">Fill up the form or contact us directly. Our team is available 24/7 to answer your questions.</p>
               
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <Phone className="text-blue-400" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-slate-300">{COMPANY_INFO.phone}</p>
                      <p className="text-slate-300">{COMPANY_INFO.phoneSecondary}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <Mail className="text-blue-400" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-slate-300">{COMPANY_INFO.email}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <MapPin className="text-blue-400" />
                    <div>
                      <p className="font-semibold">Office Address</p>
                      <p className="text-slate-300">{COMPANY_INFO.address}</p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Embed Map Mockup */}
            <div className="mt-8 bg-slate-800 rounded-lg h-48 flex items-center justify-center text-slate-500">
               Google Map Embed Would Go Here
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
             {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all">
                     <Send size={20} /> Send Message
                  </button>
                </form>
             ) : (
               <div className="h-full flex flex-col items-center justify-center text-center">
                 <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                   <Send className="text-blue-600" size={32} />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                 <p className="text-slate-500">Thank you for contacting Land and Properties. One of our consultants will reach out to you within 24 hours.</p>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};