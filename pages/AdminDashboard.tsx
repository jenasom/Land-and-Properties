import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Calendar, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';
import { MOCK_BOOKINGS, MOCK_LEADS, MOCK_PROPERTIES } from '../constants';

const data = [
  { name: 'Mon', bookings: 4 },
  { name: 'Tue', bookings: 3 },
  { name: 'Wed', bookings: 7 },
  { name: 'Thu', bookings: 2 },
  { name: 'Fri', bookings: 6 },
  { name: 'Sat', bookings: 12 },
  { name: 'Sun', bookings: 5 },
];

export const AdminDashboard = () => {
  const totalProperties = MOCK_PROPERTIES.length;
  const soldOut = MOCK_PROPERTIES.filter(p => p.status === 'Sold Out').length;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
          <div className="bg-white px-4 py-2 rounded shadow-sm text-sm font-medium text-slate-600">
             Logged in as Super Admin
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 text-sm font-medium">Total Leads</h3>
                <Users className="text-blue-500" size={20} />
             </div>
             <p className="text-3xl font-bold text-slate-800">{MOCK_LEADS.length + 142}</p>
             <p className="text-xs text-green-500 flex items-center mt-2"><TrendingUp size={12} className="mr-1"/> +12% from last week</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 text-sm font-medium">Pending Inspections</h3>
                <Calendar className="text-amber-500" size={20} />
             </div>
             <p className="text-3xl font-bold text-slate-800">{MOCK_BOOKINGS.filter(b => b.status === 'Pending').length + 5}</p>
             <p className="text-xs text-slate-400 mt-2">Requires confirmation</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 text-sm font-medium">Properties Active</h3>
                <CheckCircle className="text-blue-500" size={20} />
             </div>
             <p className="text-3xl font-bold text-slate-800">{totalProperties - soldOut}</p>
             <p className="text-xs text-slate-400 mt-2">{soldOut} properties sold out</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 text-sm font-medium">Revenue (Mo)</h3>
                <TrendingUp className="text-purple-500" size={20} />
             </div>
             <p className="text-3xl font-bold text-slate-800">₦12.5M</p>
             <p className="text-xs text-green-500 mt-2">Goal: ₦15M</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-slate-800 mb-6">Inspection Requests Overview</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="bookings" fill="#1d4ed8" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Leads */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <h3 className="font-bold text-slate-800 mb-6">Recent Leads</h3>
             <div className="space-y-4">
                {MOCK_LEADS.map((lead) => (
                   <div key={lead.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{lead.name}</p>
                        <p className="text-xs text-slate-500">Interested in: {lead.interest}</p>
                        <p className="text-[10px] text-slate-400 mt-1">Via {lead.source} • {lead.date}</p>
                      </div>
                   </div>
                ))}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg opacity-60">
                    <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                    <div className="flex-1 space-y-2">
                        <div className="h-3 bg-slate-300 rounded w-1/2"></div>
                        <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                    </div>
                </div>
             </div>
             <button className="w-full mt-4 text-sm text-blue-600 font-medium hover:underline">View All Leads</button>
          </div>
        </div>
      </div>
    </div>
  );
};