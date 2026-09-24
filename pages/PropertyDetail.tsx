import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { 
  MapPin, ShieldCheck, CheckCircle2, Bed, Car, Maximize, 
  Download, Phone, MessageCircle, Calendar, Calculator, ArrowLeft, 
  FileCheck, Video, Trees 
} from 'lucide-react';
import { MOCK_PROPERTIES, COMPANY_INFO } from '../constants';
import { SafeImage } from '../components/UI/SafeImage';
import { TitleVerificationModal } from '../components/UI/TitleVerificationModal';
import { useCurrency } from '../context/CurrencyContext';

export const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { formatPrice } = useCurrency();
  const property = MOCK_PROPERTIES.find(p => p.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);

  // States for Calculator
  const [calcQuantity, setCalcQuantity] = useState(1);
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [calcMonths, setCalcMonths] = useState<number>(property?.paymentPlanDuration || 6);

  // Booking Form State
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('10:00');
  const [bookingType, setBookingType] = useState<'Physical' | 'Virtual'>('Physical');
  const [diasporaLocation, setDiasporaLocation] = useState('UK / Europe (GMT/BST)');
  const [isBooked, setIsBooked] = useState(false);

  if (!property) return <Navigate to="/properties" replace />;

  const basePrice = property.promoPrice || property.price;
  const totalPrice = basePrice * calcQuantity;
  const downPaymentAmount = (totalPrice * downPaymentPercent) / 100;
  const remainingBalance = totalPrice - downPaymentAmount;
  const monthlyPayment = calcMonths > 1 ? remainingBalance / calcMonths : 0;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs">
          <Link
            to="/properties"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 font-medium transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to All Properties</span>
          </Link>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-slate-600 font-semibold">{property.estateName}</span>
            <span>/</span>
            <span className="text-slate-900 font-medium truncate max-w-[200px]">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Gallery & Header Block */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs mb-8">
          
          {/* Main Photo Display */}
          <div className="relative h-[360px] sm:h-[480px] lg:h-[540px] bg-slate-950">
            <SafeImage
              src={property.images[activeImageIndex] || property.images[0]}
              alt={`${property.title} - View ${activeImageIndex + 1}`}
              fallbackCategory={property.category}
              fallbackTitle={property.title}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover"
            />

            {/* Quiet Top Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
              <span className="bg-slate-950/85 backdrop-blur-md text-emerald-400 border border-white/10 px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5">
                <ShieldCheck size={14} />
                <span>VERIFIED · {property.titleType}</span>
              </span>
              <span className="bg-slate-950/85 backdrop-blur-md text-white border border-white/10 px-3 py-1 rounded-md text-xs font-medium">
                {property.category === 'House' ? 'Modern Estate House' : 'Residential Land Scheme'}
              </span>
            </div>

            {/* Bottom Scrim Header Info */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">
                  <span>{property.estateName}</span>
                  <span>·</span>
                  <span>{property.state} State</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display leading-tight">
                  {property.title}
                </h1>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-2">
                  <MapPin size={14} className="text-emerald-400 shrink-0" />
                  <span>{property.location}</span>
                </div>
              </div>

              {/* Price Callout */}
              <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl text-left md:text-right shrink-0">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-medium">
                  {property.promoPrice ? 'Promotional Price' : 'Outright Price'}
                </span>
                <div className="flex md:justify-end items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    {formatPrice(basePrice)}
                  </span>
                  {property.promoPrice && (
                    <span className="text-xs text-slate-400 line-through font-mono">
                      {formatPrice(property.price)}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-emerald-400 font-medium block mt-0.5">
                  Initial deposit from {formatPrice(property.minDeposit || basePrice * 0.2)}
                </span>
              </div>
            </div>

          </div>

          {/* Thumbnail Strip */}
          {property.images.length > 1 && (
            <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-3 overflow-x-auto scrollbar-hide">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-14 sm:w-28 sm:h-18 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-emerald-500 scale-102 shadow-md' : 'border-transparent opacity-60 hover:opacity-90'
                  }`}
                >
                  <SafeImage
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fallbackCategory={property.category}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Quick Spec Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
              Title Type
            </span>
            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
              <ShieldCheck size={16} className="text-emerald-700" />
              <span>{property.titleType}</span>
            </div>
            <span className="text-[11px] text-slate-500 mt-0.5 block">State Registry Certified</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
              Allocation Area
            </span>
            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
              <Maximize size={16} className="text-slate-500" />
              <span className="truncate">{property.size}</span>
            </div>
            <span className="text-[11px] text-slate-500 mt-0.5 block">Cadastral Survey Lodged</span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
              {property.category === 'House' ? 'Bedrooms & Baths' : 'Topography'}
            </span>
            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
              {property.category === 'House' ? (
                <>
                  <Bed size={16} className="text-slate-500" />
                  <span>{property.bedrooms || 4} Beds · {property.bathrooms || 5} Baths</span>
                </>
              ) : (
                <>
                  <Trees size={16} className="text-emerald-600" />
                  <span>100% Dry Plain Soil</span>
                </>
              )}
            </div>
            <span className="text-[11px] text-slate-500 mt-0.5 block">
              {property.category === 'House' ? 'All En-Suite + BQ' : 'Zero Sandfilling Required'}
            </span>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
              Units Available
            </span>
            <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm font-mono">
              <span className="text-emerald-700">{property.unitsLeft}</span>
              <span>{property.category === 'House' ? 'Duplexes Left' : 'Plots Available'}</span>
            </div>
            <span className="text-[11px] text-slate-500 mt-0.5 block">Immediate Beacon Handover</span>
          </div>
        </div>

        {/* Main Content Split: Left (Details, Dossier, Map) vs Right (Booking & Calculator) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Property Overview */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-950 font-display mb-4">
                Property Overview
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line mb-6">
                {property.description}
              </p>

              {/* Highlights List */}
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Key Features & Estate Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 size={15} className="text-emerald-700 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Official Title Due Diligence Dossier */}
            <section className="bg-slate-900 text-white p-6 sm:p-8 rounded-xl border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                    <FileCheck size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                      Title Authentication & Legal Search
                    </span>
                    <h3 className="text-lg font-bold text-white">Official Due Diligence Record</h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsVerifyModalOpen(true)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap self-start sm:self-auto"
                >
                  <Download size={14} />
                  <span>Download Full Legal Dossier</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-slate-800/80 rounded-lg border border-slate-700">
                  <span className="text-slate-400 block mb-1">State Lands Registry File Number</span>
                  <span className="font-mono font-bold text-white text-sm">
                    {property.verificationReport.registryFileNumber}
                  </span>
                </div>

                <div className="p-3.5 bg-slate-800/80 rounded-lg border border-slate-700">
                  <span className="text-slate-400 block mb-1">Issuing Government Registry</span>
                  <span className="font-bold text-white">
                    {property.verificationReport.registrar}
                  </span>
                </div>

                <div className="p-3.5 bg-slate-800/80 rounded-lg border border-slate-700">
                  <span className="text-slate-400 block mb-1">Registered Beacon / Pillar Range</span>
                  <span className="font-bold text-emerald-300 font-mono">
                    {property.verificationReport.beaconNumbers}
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">{property.verificationReport.surveyStatus}</p>
                </div>

                <div className="p-3.5 bg-slate-800/80 rounded-lg border border-slate-700">
                  <span className="text-slate-400 block mb-1">Acquisition & Encumbrance Status</span>
                  <span className="font-bold text-emerald-400">
                    100% Free From Committed Acquisition
                  </span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Verified on {property.verificationReport.verifiedDate}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Retained Legal Counsel: <strong className="text-slate-200">{property.verificationReport.lawyerSignature}</strong></span>
                <span className="text-emerald-400 font-medium">✓ Survey Plan Attached</span>
              </div>
            </section>

            {/* Neighborhood & Access Guide */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200">
              <h2 className="text-xl font-bold text-slate-950 font-display mb-4">
                Location & Estate Surroundings
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Situated along fully tarred access roads with active commercial and residential landmarks.
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">GPS Coordinates:</span>
                  <span className="font-mono text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {property.coordinates.lat.toFixed(4)}° N, {property.coordinates.lng.toFixed(4)}° E
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Access Road Status:</span>
                  <span className="text-slate-900">Paved Asphalt Dual-Carriageway with Streetlights</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Power Infrastructure:</span>
                  <span className="text-slate-900">Dedicated 500kVA Transformer & Estate Generator</span>
                </div>
              </div>

              {/* Saturday Chauffeur Callout */}
              <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Car size={16} />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-emerald-950 block">Complimentary Weekend Chauffeur Shuttles</span>
                  <p className="text-emerald-700">
                    Join our air-conditioned inspection shuttle every Saturday at 10:00 AM from our Lekki Phase 1 or Abuja CBD office.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column (1 Col Sidebar) */}
          <aside className="space-y-6">
            
            {/* Schedule Inspection Card */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <Calendar size={18} className="text-emerald-700" />
                <h3 className="font-bold text-base text-slate-950">Book Site Inspection</h3>
              </div>

              {!isBooked ? (
                <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
                  
                  {/* Inspection Format */}
                  <div>
                    <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
                      Inspection Format
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setBookingType('Physical')}
                        className={`py-2 px-3 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors border ${
                          bookingType === 'Physical'
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Car size={13} />
                        <span>Physical Visit</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setBookingType('Virtual')}
                        className={`py-2 px-3 rounded-lg font-semibold flex items-center justify-center gap-1.5 transition-colors border ${
                          bookingType === 'Virtual'
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <Video size={13} />
                        <span>Virtual Video Tour</span>
                      </button>
                    </div>
                  </div>

                  {bookingType === 'Virtual' && (
                    <div>
                      <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                        Your Current Time Zone (Diaspora)
                      </label>
                      <select
                        value={diasporaLocation}
                        onChange={(e) => setDiasporaLocation(e.target.value)}
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800"
                      >
                        <option value="UK / Europe (GMT/BST)">UK / Europe (GMT/BST)</option>
                        <option value="USA / Canada (Eastern Standard)">USA / Canada (Eastern Time)</option>
                        <option value="USA / Canada (Central / Pacific)">USA / Canada (Central/Pacific)</option>
                        <option value="UAE / Gulf (GST)">UAE / Dubai (GST)</option>
                      </select>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ngozi Adeleke"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                    />
                  </div>

                  {/* Phone & WhatsApp */}
                  <div>
                    <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                      Phone Number (WhatsApp Preferred)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 or +44 / +1"
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                    />
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:bg-white outline-none"
                      />
                    </div>
                    <div>
                      <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                        Time
                      </label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:bg-white outline-none"
                      >
                        <option value="10:00">10:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 rounded-xl transition-colors shadow-xs"
                  >
                    Confirm {bookingType} Inspection
                  </button>

                  <p className="text-[11px] text-slate-400 text-center leading-normal">
                    Free transportation provided. Virtual sessions are conducted 1-on-1 via WhatsApp video with site engineer.
                  </p>

                </form>
              ) : (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Inspection Request Confirmed</h4>
                  <p className="text-xs text-slate-600">
                    Thank you, <strong>{bookingName}</strong>. Our inspection lead has reserved your slot for{' '}
                    <strong>{bookingDate || 'Saturday'}</strong> at <strong>{bookingTime}</strong> ({bookingType}).
                  </p>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello,%20I%20just%20booked%20an%20inspection%20for%20${encodeURIComponent(property.title)}%20(${bookingType})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-lg"
                  >
                    Fast-Track on WhatsApp
                  </a>
                </div>
              )}
            </div>

            {/* Flexible Payment & Installment Calculator */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <Calculator size={18} className="text-slate-700" />
                <h3 className="font-bold text-base text-slate-950">Payment & Plan Calculator</h3>
              </div>

              <div className="space-y-4 text-xs">
                
                {/* Quantity */}
                <div>
                  <div className="flex justify-between font-semibold text-slate-600 mb-1">
                    <span>Number of {property.category === 'House' ? 'Units' : 'Plots'}</span>
                    <span className="font-mono text-slate-950 font-bold">{calcQuantity}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={calcQuantity}
                    onChange={(e) => setCalcQuantity(Number(e.target.value))}
                    className="w-full accent-emerald-700 cursor-pointer"
                  />
                </div>

                {/* Down payment % */}
                <div>
                  <div className="flex justify-between font-semibold text-slate-600 mb-1">
                    <span>Initial Deposit Percentage</span>
                    <span className="font-mono text-slate-950 font-bold">{downPaymentPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-emerald-700 cursor-pointer"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                    Repayment Schedule
                  </label>
                  <select
                    value={calcMonths}
                    onChange={(e) => setCalcMonths(Number(e.target.value))}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900"
                  >
                    <option value="1">Outright (Single Payment - 5% Discount)</option>
                    <option value="3">3 Months Installment</option>
                    <option value="6">6 Months Installment</option>
                    <option value="12">12 Months Flexible Plan</option>
                  </select>
                </div>

                {/* Calculation Summary Box */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex justify-between text-slate-600">
                    <span>Total Investment:</span>
                    <span className="font-mono font-bold text-slate-950">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-emerald-800 font-medium">
                    <span>Down Payment ({downPaymentPercent}%):</span>
                    <span className="font-mono font-bold">{formatPrice(downPaymentAmount)}</span>
                  </div>
                  {calcMonths > 1 && (
                    <div className="flex justify-between text-slate-900 font-bold pt-2 border-t border-slate-200">
                      <span>Monthly Payment:</span>
                      <span className="font-mono text-emerald-700">{formatPrice(monthlyPayment)} / mo</span>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Quick Contact Desk */}
            <div className="p-5 bg-slate-950 text-white rounded-xl space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400 block">
                Direct Sales Line
              </span>
              <p className="text-xs text-slate-300">
                Speak directly with an accredited property specialist at {COMPANY_INFO.name}.
              </p>
              
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello,%20I%20am%20inquiring%20about%20${encodeURIComponent(property.title)}%20(${property.titleType})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-4 rounded-lg text-center text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={15} />
                  <span>Inquire via WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="bg-white/10 hover:bg-white/15 text-white font-semibold py-2.5 px-4 rounded-lg text-center text-xs flex items-center justify-center gap-2 transition-colors border border-white/10"
                >
                  <Phone size={14} />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

          </aside>

        </div>

      </div>

      {/* Legal Title Verification Modal */}
      <TitleVerificationModal
        isOpen={isVerifyModalOpen}
        onClose={() => setIsVerifyModalOpen(false)}
        initialProperty={property}
      />

    </div>
  );
};
