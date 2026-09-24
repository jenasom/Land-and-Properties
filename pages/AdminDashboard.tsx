import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { 
  Users, Calendar, ShieldCheck, 
  Video, Car, MessageCircle, Building2 
} from 'lucide-react';
import { MOCK_BOOKINGS, MOCK_LEADS, MOCK_PROPERTIES } from '../constants';
import { Booking } from '../types';
import { useCurrency } from '../context/CurrencyContext';

const inspectionTrendData = [
  { name: 'Mon', physical: 3, virtual: 2 },
  { name: 'Tue', physical: 2, virtual: 4 },
  { name: 'Wed', physical: 5, virtual: 3 },
  { name: 'Thu', physical: 4, virtual: 5 },
  { name: 'Fri', physical: 7, virtual: 4 },
  { name: 'Sat', physical: 16, virtual: 8 },
  { name: 'Sun', physical: 2, virtual: 6 },
];

export const AdminDashboard: React.FC = () => {
  const { formatPrice } = useCurrency();
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS);
  const [bookingFilter, setBookingFilter] = useState<'All' | 'Physical' | 'Virtual'>('All');

  const totalPortfolioValue = MOCK_PROPERTIES.reduce((acc, p) => acc + p.price * p.unitsLeft, 0);

  const handleStatusChange = (id: string, newStatus: 'Pending' | 'Confirmed' | 'Completed') => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  const filteredBookings = bookings.filter(b => {
    if (bookingFilter === 'All') return true;
    return b.type === bookingFilter;
  });

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 uppercase tracking-wide mb-1">
              <ShieldCheck size={14} />
              <span>Operations & Lead Management Console</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
              Administrative Control Desk
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Manage inspection schedules, diaspora video appointments, and property inventory.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white border border-slate-200 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 shadow-2xs">
              Operator: <span className="text-emerald-800 font-bold">Conveyance & Sales Admin</span>
            </div>
          </div>
        </div>

        {/* High-Level Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Portfolio Value</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Building2 size={16} />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-950 font-mono">
              {formatPrice(totalPortfolioValue)}
            </p>
            <p className="text-[11px] text-emerald-700 font-medium mt-1">
              {MOCK_PROPERTIES.length} verified developments listed
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Scheduled Inspections</span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Calendar size={16} />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-950 font-mono">
              {bookings.length}
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              {bookings.filter(b => b.type === 'Virtual').length} Diaspora Virtual · {bookings.filter(b => b.type === 'Physical').length} Saturday Shuttles
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active High-Intent Leads</span>
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
                <Users size={16} />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-950 font-mono">
              {MOCK_LEADS.length + 18}
            </p>
            <p className="text-[11px] text-purple-700 font-medium mt-1">
              +4 new inquiries in last 24 hrs
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Title Perfection</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck size={16} />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-emerald-800 font-mono">
              100%
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              Zero encumbrance on all registered files
            </p>
          </div>

        </div>

        {/* Charts & Lead Tracker */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Chart (2 cols) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-base text-slate-950">Weekly Inspection Volume (Physical vs Diaspora Virtual)</h3>
                <p className="text-xs text-slate-500">Saturday peaks reflect Lekki & Abuja chauffeur shuttles</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-3 h-3 rounded bg-slate-900 inline-block" /> Physical Visits
                </span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-3 h-3 rounded bg-emerald-600 inline-block" /> Diaspora Virtual
                </span>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={inspectionTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                  <Bar dataKey="physical" fill="#0f172a" radius={[4, 4, 0, 0]} barSize={24} name="Physical Visits" />
                  <Bar dataKey="virtual" fill="#059669" radius={[4, 4, 0, 0]} barSize={24} name="Diaspora Virtual" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Lead Queue */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <h3 className="font-bold text-base text-slate-950">Recent Investor Leads</h3>
                <span className="text-[11px] font-mono text-slate-400">Live Queue</span>
              </div>

              <div className="space-y-3.5">
                {MOCK_LEADS.map(lead => (
                  <div key={lead.id} className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs">
                    <div className="flex items-start justify-between">
                      <span className="font-bold text-slate-900">{lead.name}</span>
                      <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-500">
                        {lead.budget || 'Inquiry'}
                      </span>
                    </div>
                    <p className="text-emerald-800 font-medium text-[11px] mt-0.5 truncate">{lead.interest}</p>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                      <span>{lead.source}</span>
                      <a
                        href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1"
                      >
                        <MessageCircle size={12} />
                        <span>Chat</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100">
              <span className="text-[11px] text-slate-400 block text-center">
                All client entries synced with SCUML Registry
              </span>
            </div>
          </div>

        </div>

        {/* Inspections Management Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
          
          <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-base text-slate-950">Inspection Schedule Roster</h3>
              <p className="text-xs text-slate-500">Manage client visits and diaspora virtual video calls.</p>
            </div>

            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold self-start sm:self-auto">
              {(['All', 'Physical', 'Virtual'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setBookingFilter(type)}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    bookingFilter === type ? 'bg-white text-slate-950 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  {type === 'All' ? 'All Inspections' : type === 'Physical' ? 'Physical Shuttles' : 'Diaspora Virtual'}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4 font-semibold">Client Name</th>
                  <th className="py-3 px-4 font-semibold">Property</th>
                  <th className="py-3 px-4 font-semibold">Format</th>
                  <th className="py-3 px-4 font-semibold">Date & Time</th>
                  <th className="py-3 px-4 font-semibold">Status</th>
                  <th className="py-3 px-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-slate-900 block">{b.clientName}</span>
                      <span className="text-slate-500 text-[11px] font-mono">{b.clientPhone}</span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-800">
                      {b.propertyName}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${
                        b.type === 'Virtual' ? 'bg-emerald-50 text-emerald-800' : 'bg-slate-100 text-slate-800'
                      }`}>
                        {b.type === 'Virtual' ? <Video size={12} /> : <Car size={12} />}
                        {b.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="text-slate-900 font-medium block">{b.date}</span>
                      <span className="text-slate-500 text-[11px]">{b.time}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        b.status === 'Confirmed'
                          ? 'bg-emerald-100 text-emerald-800'
                          : b.status === 'Completed'
                          ? 'bg-slate-100 text-slate-700'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {b.status !== 'Confirmed' && (
                          <button
                            onClick={() => handleStatusChange(b.id, 'Confirmed')}
                            className="bg-emerald-700 hover:bg-emerald-800 text-white px-2.5 py-1 rounded text-[11px] font-semibold"
                          >
                            Confirm
                          </button>
                        )}
                        {b.status === 'Confirmed' && (
                          <button
                            onClick={() => handleStatusChange(b.id, 'Completed')}
                            className="bg-slate-800 hover:bg-slate-900 text-white px-2.5 py-1 rounded text-[11px] font-semibold"
                          >
                            Mark Done
                          </button>
                        )}
                        <a
                          href={`https://wa.me/${b.clientPhone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(b.clientName)},%20this%20is%20Land%20and%20Properties%20regarding%20your%20scheduled%20inspection.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 text-slate-500 hover:text-emerald-700"
                          title="WhatsApp Client"
                        >
                          <MessageCircle size={15} />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
};
