import React from 'react';
import { MapPin, Maximize, Bed, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../../types';
import { SafeImage } from './SafeImage';
import { useCurrency } from '../../context/CurrencyContext';

interface PropertyCardProps {
  property: Property;
  onVerifyClick?: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onVerifyClick }) => {
  const { formatPrice } = useCurrency();
  const isSoldOut = property.status === 'Sold Out';
  const effectivePrice = property.promoPrice || property.price;

  return (
    <article className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-200 overflow-hidden flex flex-col h-full group hover:shadow-md">
      
      {/* Property Image Container */}
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <SafeImage
          src={property.images[0]}
          alt={`${property.title} in ${property.location}`}
          fallbackCategory={property.category}
          fallbackTitle={property.title}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Quiet status & verification cues (clean backdrop text, not candy pills) */}
        <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold tracking-wide text-emerald-400 flex items-center gap-1 border border-white/10">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>VERIFIED · {property.titleType}</span>
        </div>

        <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-medium text-slate-200 border border-white/10">
          {property.category === 'House' ? 'Estate House' : 'Residential Land'}
        </div>

        {!isSoldOut && (
          <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-slate-200 px-2 py-0.5 rounded border border-white/10">
            {property.unitsLeft} {property.category === 'House' ? 'units' : 'plots'} left
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Estate & Location Kicker */}
        <div className="flex items-center text-xs text-slate-500 mb-1.5 gap-1.5">
          <span className="font-medium text-slate-700 truncate">{property.estateName}</span>
          <span aria-hidden="true">·</span>
          <span className="text-slate-500">{property.state}</span>
        </div>

        {/* Property Title */}
        <h3 className="font-bold text-base text-slate-900 leading-snug mb-2 group-hover:text-emerald-800 transition-colors line-clamp-2">
          <Link to={`/properties/${property.id}`} className="hover:underline">
            {property.title}
          </Link>
        </h3>

        {/* Location address */}
        <div className="flex items-center text-slate-500 text-xs mb-4">
          <MapPin size={13} className="mr-1 text-slate-400 shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* House / Land Specifications */}
        <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 bg-slate-50 rounded-lg text-xs text-slate-600 border border-slate-100">
          <div className="flex items-center gap-1.5 truncate">
            <Maximize size={13} className="text-slate-400 shrink-0" />
            <span className="truncate">{property.size}</span>
          </div>

          {property.category === 'House' && property.bedrooms ? (
            <div className="flex items-center gap-1.5 truncate">
              <Bed size={13} className="text-slate-400 shrink-0" />
              <span>{property.bedrooms} Beds · {property.bathrooms || property.bedrooms} Baths</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 truncate">
              <ShieldCheck size={13} className="text-emerald-600 shrink-0" />
              <span className="truncate">Instant Allocation</span>
            </div>
          )}
        </div>

        {/* Bottom Price & Actions */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-slate-400 block font-medium">
              {property.promoPrice ? 'Promotional Price' : 'Outright Price'}
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-slate-950 font-mono tracking-tight">
                {formatPrice(effectivePrice)}
              </span>
              {property.promoPrice && (
                <span className="text-xs text-slate-400 line-through font-mono">
                  {formatPrice(property.price)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onVerifyClick && (
              <button
                type="button"
                onClick={() => onVerifyClick(property)}
                className="p-2 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors text-xs font-semibold"
                title="View Legal Title Verification Report"
              >
                <ShieldCheck size={18} />
              </button>
            )}

            <Link
              to={`/properties/${property.id}`}
              className="inline-flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors"
            >
              <span>View</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>

      </div>
    </article>
  );
};
