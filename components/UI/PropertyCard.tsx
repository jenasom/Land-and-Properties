import React from 'react';
import { MapPin, Maximize, FileCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Property } from '../../types';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const isSoldOut = property.status === 'Sold Out';

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-700 flex items-center gap-1 shadow-sm">
          <CheckCircle2 size={12} />
          VERIFIED
        </div>
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm ${
          isSoldOut ? 'bg-red-500' : property.status === 'Fast Selling' ? 'bg-amber-500' : 'bg-green-600'
        }`}>
          {property.status}
        </div>
        {!isSoldOut && (
            <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                {property.unitsLeft} plots left
            </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-2">
           <h3 className="font-bold text-lg text-slate-800 line-clamp-1 group-hover:text-blue-700 transition-colors">{property.title}</h3>
        </div>
        
        <div className="flex items-center text-slate-500 text-sm mb-4">
          <MapPin size={14} className="mr-1 text-blue-500" />
          <span className="truncate">{property.location}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
          <div className="flex items-center gap-1">
            <Maximize size={14} className="text-slate-400" />
            <span>{property.size}</span>
          </div>
          <div className="flex items-center gap-1">
            <FileCheck size={14} className="text-slate-400" />
            <span className="truncate">{property.titleType}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
           <div className="flex items-end justify-between">
              <div>
                  <p className="text-xs text-slate-400 mb-1">Outright Price</p>
                  <div className="flex flex-col">
                      {property.promoPrice ? (
                          <>
                            <span className="text-xs text-red-400 line-through">₦{property.price.toLocaleString()}</span>
                            <span className="text-xl font-bold text-slate-900">₦{property.promoPrice.toLocaleString()}</span>
                          </>
                      ) : (
                          <span className="text-xl font-bold text-slate-900">₦{property.price.toLocaleString()}</span>
                      )}
                  </div>
              </div>
              <Link 
                to={`/properties/${property.id}`}
                className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Details
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};