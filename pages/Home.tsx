import React from 'react';
import { Shield, CheckCircle, Search, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_PROPERTIES, MOCK_REVIEWS } from '../constants';
import { PropertyCard } from '../components/UI/PropertyCard';

export const Home = () => {
  const featuredProperties = MOCK_PROPERTIES.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-slate-900">
           <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80" 
            alt="Modern House in Nigeria" 
            className="w-full h-full object-cover opacity-30"
           />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <Shield size={16} className="text-blue-300" />
            <span className="text-sm font-medium text-blue-100">100% Verified Titles & Documentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Buy Verified Lands & Properties <span className="text-blue-400">You Can Trust</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Transparent documentation. Physical & virtual inspections. Zero hidden charges. Join 500+ happy landowners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/properties" className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1">
              View Properties
            </Link>
            <Link to="/contact" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Book Inspection
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="bg-blue-100 p-3 rounded-full mb-3 text-blue-600">
                <Shield size={24} />
              </div>
              <h3 className="font-bold text-slate-800">CAC Registered</h3>
              <p className="text-xs text-slate-500">Fully Compliant Entity</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="bg-blue-100 p-3 rounded-full mb-3 text-blue-600">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-bold text-slate-800">Verified Titles</h3>
              <p className="text-xs text-slate-500">C of O, Gazette, Deeds</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="bg-blue-100 p-3 rounded-full mb-3 text-blue-600">
                <Star size={24} />
              </div>
              <h3 className="font-bold text-slate-800">5 Years+</h3>
              <p className="text-xs text-slate-500">Industry Experience</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="bg-blue-100 p-3 rounded-full mb-3 text-blue-600">
                <Search size={24} />
              </div>
              <h3 className="font-bold text-slate-800">Instant Allocation</h3>
              <p className="text-xs text-slate-500">No Stories, No Delay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Properties</h2>
              <p className="text-slate-500">Hand-picked investment opportunities with high ROI.</p>
            </div>
            <Link to="/properties" className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700">
              See All <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link to="/properties" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              See All Properties <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How To Own Your Land</h2>
              <p className="text-slate-400">We have simplified the process to 4 easy steps.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Select Property", desc: "Browse our list of verified properties." },
                  { step: "02", title: "Book Inspection", desc: "Schedule a physical or virtual site visit." },
                  { step: "03", title: "Make Payment", desc: "Pay securely to the company account." },
                  { step: "04", title: "Instant Allocation", desc: "Get your documents and physical allocation." }
                ].map((item, idx) => (
                  <div key={idx} className="relative p-6 border border-slate-700 rounded-xl hover:bg-slate-800 transition-colors">
                      <span className="text-5xl font-bold text-slate-800 absolute top-4 right-4">{item.step}</span>
                      <h3 className="text-xl font-bold mb-2 relative z-10 text-blue-400">{item.title}</h3>
                      <p className="text-slate-400 text-sm relative z-10">{item.desc}</p>
                  </div>
                ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_REVIEWS.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-blue-100">
                 <div className="flex gap-1 mb-4">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={16} className={`${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                   ))}
                 </div>
                 <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                      {review.name.charAt(0)}
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                     <p className="text-xs text-slate-500">{review.role}</p>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-800">
         <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Future?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't wait to buy land, buy land and wait. The best time to invest was 20 years ago, the next best time is now.
            </p>
            <Link to="/contact" className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
               Start Your Journey
            </Link>
         </div>
      </section>
    </div>
  );
};