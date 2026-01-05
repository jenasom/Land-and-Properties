import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { MapPin, CheckCircle, FileText, Calendar, Calculator, Download, Phone, MessageCircle } from 'lucide-react';
import { MOCK_PROPERTIES, COMPANY_INFO } from '../constants';
import { Booking } from '../types';

export const PropertyDetail = () => {
  const { id } = useParams();
  const property = MOCK_PROPERTIES.find(p => p.id === id);

  // States for Calculator
  const [calcPlots, setCalcPlots] = useState(1);
  const [calcMonths, setCalcMonths] = useState(property?.paymentPlanDuration || 3);
  
  // States for Booking
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingType, setBookingType] = useState<'Physical' | 'Virtual'>('Physical');
  const [isBooked, setIsBooked] = useState(false);

  if (!property) return <Navigate to="/properties" />;

  const currentPrice = property.promoPrice || property.price;
  const totalPrice = currentPrice * calcPlots;
  const monthlyPay = totalPrice / calcMonths;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setIsBooked(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Image */}
      <div className="h-[400px] relative">
         <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover" />
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 text-white">
                <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                   <div>
                       <div className="flex items-center gap-2 mb-2">
                           <span className="bg-green-600 px-3 py-1 rounded text-xs font-bold">VERIFIED</span>
                           <span className="bg-slate-700 px-3 py-1 rounded text-xs font-bold">{property.titleType}</span>
                       </div>
                       <h1 className="text-3xl md:text-5xl font-bold mb-2">{property.title}</h1>
                       <div className="flex items-center gap-2 text-slate-200">
                           <MapPin size={18} />
                           <span>{property.location}</span>
                       </div>
                   </div>
                   <div className="text-right">
                       <p className="text-sm opacity-80">Outright Price</p>
                       <p className="text-3xl font-bold">₦{currentPrice.toLocaleString()}</p>
                   </div>
                </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">About this Property</h2>
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">{property.description}</p>
                    
                    <div className="mt-6">
                        <h3 className="font-semibold mb-3">Key Features</h3>
                        <ul className="grid grid-cols-2 gap-3">
                            {property.features.map((feat, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
                                    <CheckCircle size={16} className="text-green-500" />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Location</h2>
                    <div className="bg-slate-200 h-64 rounded-lg flex items-center justify-center relative overflow-hidden group">
                        {/* Placeholder for map */}
                        <div className="absolute inset-0 bg-slate-300 flex items-center justify-center">
                            <MapPin size={48} className="text-slate-400" />
                        </div>
                        <span className="relative z-10 bg-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium">Map View Coming Soon</span>
                    </div>
                </div>

                 {/* Documents */}
                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Verification Documents</h2>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-100 p-2 rounded text-red-600">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">Sample Survey Plan</h4>
                                <p className="text-xs text-slate-500">PDF • 2.4 MB</p>
                            </div>
                        </div>
                        <button className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline">
                            <Download size={16} /> Download
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
                
                {/* Scarcity Widget */}
                <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-400">Available Units</span>
                        <span className="font-bold text-2xl">{property.unitsLeft}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                        <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-1000" 
                            style={{ width: `${Math.max(5, (property.unitsLeft / 50) * 100)}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-slate-400">🔥 12 people are viewing this property right now.</p>
                </div>

                {/* Booking Form */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Calendar size={20} className="text-blue-600" />
                        Schedule Inspection
                    </h3>
                    
                    {!isBooked ? (
                        <form onSubmit={handleBooking} className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-slate-600 mb-1">Inspection Type</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button 
                                        type="button"
                                        onClick={() => setBookingType('Physical')}
                                        className={`py-2 text-sm rounded border ${bookingType === 'Physical' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-gray-200 text-slate-600'}`}
                                    >
                                        Physical Visit
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => setBookingType('Virtual')}
                                        className={`py-2 text-sm rounded border ${bookingType === 'Virtual' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-gray-200 text-slate-600'}`}
                                    >
                                        Virtual (Video)
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-600 mb-1">Date</label>
                                    <input 
                                        type="date" 
                                        required
                                        className="w-full p-2 border border-gray-300 rounded text-sm outline-none focus:border-blue-500" 
                                        onChange={(e) => setBookingDate(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-600 mb-1">Time</label>
                                    <input 
                                        type="time" 
                                        required
                                        className="w-full p-2 border border-gray-300 rounded text-sm outline-none focus:border-blue-500" 
                                        onChange={(e) => setBookingTime(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors">
                                Book Inspection
                            </button>
                            <p className="text-xs text-center text-slate-400">Free transport available for physical inspections on Saturdays.</p>
                        </form>
                    ) : (
                        <div className="text-center py-6">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <CheckCircle className="text-green-600" size={24} />
                            </div>
                            <h4 className="font-bold text-slate-800">Request Sent!</h4>
                            <p className="text-sm text-slate-600">Our team will contact you to confirm the {bookingType} inspection.</p>
                        </div>
                    )}
                </div>

                {/* Price Calculator */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Calculator size={20} className="text-blue-600" />
                        Payment Calculator
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="flex justify-between text-sm text-slate-600 mb-1">
                                <span>Number of Plots</span>
                                <span className="font-bold">{calcPlots}</span>
                            </label>
                            <input 
                                type="range" 
                                min="1" 
                                max="10" 
                                value={calcPlots} 
                                onChange={(e) => setCalcPlots(Number(e.target.value))}
                                className="w-full accent-blue-600"
                            />
                        </div>
                        <div>
                            <label className="flex justify-between text-sm text-slate-600 mb-1">
                                <span>Payment Duration</span>
                                <span className="font-bold">{calcMonths} Months</span>
                            </label>
                            <select 
                                value={calcMonths}
                                onChange={(e) => setCalcMonths(Number(e.target.value))}
                                className="w-full p-2 border border-gray-300 rounded text-sm"
                            >
                                <option value="1">Outright (0% Interest)</option>
                                <option value="3">3 Months</option>
                                <option value="6">6 Months</option>
                                <option value="12">12 Months</option>
                            </select>
                        </div>
                        
                        <div className="bg-slate-50 p-4 rounded-lg space-y-2 mt-2">
                            <div className="flex justify-between text-sm text-slate-600">
                                <span>Total Price:</span>
                                <span className="font-bold">₦{totalPrice.toLocaleString()}</span>
                            </div>
                            {calcMonths > 1 && (
                                <div className="flex justify-between text-sm text-blue-700 font-bold border-t border-gray-200 pt-2">
                                    <span>Monthly Pay:</span>
                                    <span>₦{monthlyPay.toLocaleString()}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Quick Contact Buttons */}
                <div className="grid grid-cols-2 gap-4">
                    <a 
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=I am interested in ${property.title}`}
                        className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                    >
                        <MessageCircle size={20} /> WhatsApp
                    </a>
                    <a 
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="flex items-center justify-center gap-2 bg-slate-800 text-white py-3 rounded-lg font-bold hover:bg-slate-900 transition-colors"
                    >
                        <Phone size={20} /> Call Now
                    </a>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};