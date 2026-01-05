import React from 'react';
import { ShieldCheck, Target, Users, Award } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

export const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
        <p className="max-w-2xl mx-auto text-slate-400">
          Building trust in the Nigerian real estate sector, one verified property at a time.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg leading-relaxed text-slate-600 mb-8">
            <span className="font-bold text-slate-900">{COMPANY_INFO.name}</span> is a registered real estate company ({COMPANY_INFO.cac}) dedicated to providing genuine, litigation-free landed properties in Nigeria. 
            We recognized a major gap in the industry: <span className="italic">Trust</span>. Too many people have lost money to scams or unverified titles. We exist to solve that.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
               <Target className="text-blue-600 mb-4" size={32} />
               <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
               <p className="text-slate-600">To help 10,000 Nigerians become proud landowners of verified properties by 2026 through transparent processes and flexible payment plans.</p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
               <ShieldCheck className="text-blue-600 mb-4" size={32} />
               <h3 className="text-xl font-bold text-slate-900 mb-2">Our Promise</h3>
               <p className="text-slate-600">We do not sell what we do not own or have legal power to sell. Every property listed is vetted by our legal team before it goes public.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why We Are Different</h2>
          <ul className="space-y-4">
             {[
               "100% Money-back guarantee on title issues.",
               "No hidden documentation fees sprung on you later.",
               "We allocate lands immediately after payment completion.",
               "We provide free post-purchase support for development."
             ].map((item, i) => (
               <li key={i} className="flex items-start gap-3">
                 <div className="mt-1 bg-green-100 rounded-full p-1">
                    <Award size={14} className="text-green-600" />
                 </div>
                 <span className="text-slate-700">{item}</span>
               </li>
             ))}
          </ul>
        </div>
      </div>
    </div>
  );
};