import React, { useState, useMemo } from 'react';
import { Search, ShieldCheck, RotateCcw, Building2, Trees, SlidersHorizontal } from 'lucide-react';
import { MOCK_PROPERTIES } from '../constants';
import { PropertyCard } from '../components/UI/PropertyCard';
import { TitleVerificationModal } from '../components/UI/TitleVerificationModal';
import { Property, PropertyCategory } from '../types';
import { useCurrency } from '../context/CurrencyContext';

export const Properties: React.FC = () => {
  const { formatPrice } = useCurrency();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'All' | PropertyCategory>('All');
  const [stateFilter, setStateFilter] = useState<string>('All');
  const [titleFilter, setTitleFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(400000000);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [selectedPropertyForVerify, setSelectedPropertyForVerify] = useState<Property | undefined>(undefined);

  const states = useMemo(() => Array.from(new Set(MOCK_PROPERTIES.map(p => p.state))), []);
  const titleTypes = useMemo(() => Array.from(new Set(MOCK_PROPERTIES.map(p => p.titleType))), []);

  const handleOpenVerifyModal = (property?: Property) => {
    setSelectedPropertyForVerify(property);
    setIsVerifyModalOpen(true);
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('All');
    setStateFilter('All');
    setTitleFilter('All');
    setMaxPrice(400000000);
    setSortBy('featured');
  };

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter(prop => {
      const q = searchTerm.toLowerCase();
      const matchesSearch = 
        !q ||
        prop.title.toLowerCase().includes(q) || 
        prop.estateName.toLowerCase().includes(q) ||
        prop.location.toLowerCase().includes(q);

      const matchesCategory = categoryFilter === 'All' || prop.category === categoryFilter;
      const matchesState = stateFilter === 'All' || prop.state === stateFilter;
      const matchesTitle = titleFilter === 'All' || prop.titleType === titleFilter;
      
      const effectivePrice = prop.promoPrice || prop.price;
      const matchesPrice = effectivePrice <= maxPrice;

      return matchesSearch && matchesCategory && matchesState && matchesTitle && matchesPrice;
    }).sort((a, b) => {
      const priceA = a.promoPrice || a.price;
      const priceB = b.promoPrice || b.price;

      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      // 'featured'
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [searchTerm, categoryFilter, stateFilter, titleFilter, maxPrice, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Verification Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-1">
              <ShieldCheck size={14} />
              <span>Certified Documentation · 100% Free From Encumbrance</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-950 font-display">
              Verified Real Estate Portfolio
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Explore inspected estate houses, luxury duplexes, and master-planned land schemes across Lagos and Abuja.
            </p>
          </div>

          <button
            onClick={() => handleOpenVerifyModal()}
            className="self-start md:self-auto bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors shadow-xs"
          >
            <ShieldCheck size={15} className="text-emerald-400" />
            <span>Search Title Dossiers</span>
          </button>
        </div>

        {/* Category Pill Switcher (Functional tab control) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs text-xs font-medium">
            <button
              onClick={() => setCategoryFilter('All')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                categoryFilter === 'All'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              All Listings ({MOCK_PROPERTIES.length})
            </button>
            <button
              onClick={() => setCategoryFilter('House')}
              className={`px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors ${
                categoryFilter === 'House'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Building2 size={13} />
              <span>Estate Houses & Duplexes</span>
            </button>
            <button
              onClick={() => setCategoryFilter('Land')}
              className={`px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors ${
                categoryFilter === 'Land'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <Trees size={13} />
              <span>Verified Land Schemes</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Showing <strong className="text-slate-900 font-mono">{filteredProperties.length}</strong> matching properties</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-white p-5 rounded-xl border border-slate-200 sticky top-24 space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <SlidersHorizontal size={16} />
                  <span>Filters</span>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="text-xs text-slate-400 hover:text-slate-800 flex items-center gap-1 font-medium transition-colors"
                >
                  <RotateCcw size={12} />
                  <span>Reset</span>
                </button>
              </div>

              {/* Keyword Search */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Epe, Lekki, Guzape..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none text-xs font-medium text-slate-900"
                  />
                  <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
                </div>
              </div>

              {/* State Location */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Location (State)
                </label>
                <select
                  value={stateFilter}
                  onChange={(e) => setStateFilter(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                >
                  <option value="All">All Locations</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state} State</option>
                  ))}
                </select>
              </div>

              {/* Legal Title Filter */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Document Title
                </label>
                <select
                  value={titleFilter}
                  onChange={(e) => setTitleFilter(e.target.value)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                >
                  <option value="All">All Title Documents</option>
                  {titleTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Sort Order */}
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:bg-white focus:ring-2 focus:ring-slate-900 outline-none"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              {/* Max Budget Slider */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex justify-between items-center mb-1.5 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-slate-500">Max Budget</span>
                  <span className="font-mono font-bold text-slate-900">{formatPrice(maxPrice)}</span>
                </div>
                <input
                  type="range"
                  min="3000000"
                  max="400000000"
                  step="5000000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-emerald-700 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span>₦3M</span>
                  <span>₦400M</span>
                </div>
              </div>

              {/* Trust Box */}
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100 text-xs">
                <span className="font-bold text-emerald-900 block mb-0.5">Title Perfection</span>
                <p className="text-emerald-700 text-[11px] leading-relaxed">
                  Every listed plot and house includes verifiable survey beacon numbers and registry records.
                </p>
              </div>

            </div>
          </aside>

          {/* Properties Grid Area */}
          <main className="flex-1">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map(prop => (
                  <PropertyCard
                    key={prop.id}
                    property={prop}
                    onVerifyClick={handleOpenVerifyModal}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-200 p-8">
                <p className="text-sm font-semibold text-slate-800 mb-1">No matching properties found</p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mb-4">
                  Try adjusting your budget slider, changing the location, or clearing search keywords.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>

        </div>
      </div>

      {/* Title Verification Modal */}
      <TitleVerificationModal
        isOpen={isVerifyModalOpen}
        onClose={() => setIsVerifyModalOpen(false)}
        initialProperty={selectedPropertyForVerify}
      />
    </div>
  );
};
