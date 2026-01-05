import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { MOCK_PROPERTIES } from '../constants';
import { PropertyCard } from '../components/UI/PropertyCard';
import { FilterType } from '../types';

export const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(0);

  const locations = Array.from(new Set(MOCK_PROPERTIES.map(p => p.state)));
  const types = Array.from(new Set(MOCK_PROPERTIES.map(p => p.titleType)));

  const filteredProperties = MOCK_PROPERTIES.filter(prop => {
    const matchesSearch = prop.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prop.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter ? prop.state === locationFilter : true;
    const matchesType = typeFilter ? prop.titleType === typeFilter : true;
    const matchesPrice = maxPrice > 0 ? (prop.promoPrice || prop.price) <= maxPrice : true;

    return matchesSearch && matchesLocation && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Available Properties</h1>
          <p className="text-slate-500 mt-2">Browse our curated list of verified real estate.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-slate-800">
                <Filter size={20} />
                <h3 className="font-bold">Filters</h3>
              </div>

              <div className="space-y-6">
                <div>
                   <label className="text-sm font-medium text-slate-700 block mb-2">Search</label>
                   <div className="relative">
                     <input 
                       type="text"
                       placeholder="Search by name..."
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                     />
                     <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
                   </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-2">Location</label>
                  <select 
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 outline-none"
                  >
                    <option value="">All Locations</option>
                    {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-2">Document Type</label>
                  <select 
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 outline-none"
                  >
                    <option value="">All Documents</option>
                    {types.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-2">Max Price: ₦{(maxPrice || 5000000).toLocaleString()}</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="10000000" 
                    step="100000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>0</span>
                    <span>10M+</span>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setLocationFilter('');
                    setTypeFilter('');
                    setMaxPrice(0);
                  }}
                  className="w-full py-2 text-sm text-slate-500 hover:text-blue-600 underline"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="w-full lg:w-3/4">
             {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProperties.map(prop => (
                    <PropertyCard key={prop.id} property={prop} />
                  ))}
                </div>
             ) : (
               <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                 <p className="text-slate-500">No properties found matching your criteria.</p>
                 <button 
                    onClick={() => {
                        setSearchTerm('');
                        setLocationFilter('');
                        setTypeFilter('');
                        setMaxPrice(0);
                    }}
                    className="mt-4 text-blue-600 font-medium"
                 >
                   Clear Filters
                 </button>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};