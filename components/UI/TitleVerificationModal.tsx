import React, { useState } from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Download, X, MapPin } from 'lucide-react';
import { Property } from '../../types';
import { MOCK_PROPERTIES, COMPANY_INFO } from '../../constants';

interface TitleVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProperty?: Property;
}

export const TitleVerificationModal: React.FC<TitleVerificationModalProps> = ({
  isOpen,
  onClose,
  initialProperty
}) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>(
    initialProperty ? initialProperty.id : MOCK_PROPERTIES[0].id
  );
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const currentProperty = MOCK_PROPERTIES.find(p => p.id === selectedPropertyId) || MOCK_PROPERTIES[0];
  const { verificationReport } = currentProperty;

  const handleDownloadReport = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <ShieldCheck size={24} />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Official Due Diligence Registry
              </span>
              <h2 className="text-xl font-bold text-white">Title Verification & Legal Dossier</h2>
            </div>
          </div>
          <p className="text-xs text-slate-300 max-w-lg mt-1">
            Every estate house and land parcel sold by {COMPANY_INFO.name} undergoes full title perfection at the state lands bureau with zero legal encumbrance.
          </p>
        </div>

        {/* Property Selector */}
        <div className="p-6 bg-slate-50 border-b border-slate-200">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Select Property to Verify
          </label>
          <div className="relative">
            <select
              value={selectedPropertyId}
              onChange={(e) => setSelectedPropertyId(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-600 appearance-none cursor-pointer"
            >
              {MOCK_PROPERTIES.map(p => (
                <option key={p.id} value={p.id}>
                  {p.title} · [{p.category}] · {p.titleType} ({p.location})
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-3.5 pointer-events-none text-slate-400">
              ▼
            </div>
          </div>
        </div>

        {/* Verification Certificate Details */}
        <div className="p-6 space-y-6">
          <div className="flex items-start justify-between bg-emerald-50/60 p-4 rounded-xl border border-emerald-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 size={16} className="text-emerald-700" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Authentication Status: 100% Verified
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base">{currentProperty.title}</h3>
              <p className="text-xs text-slate-600 flex items-center gap-1 mt-0.5">
                <MapPin size={12} className="text-slate-400" /> {currentProperty.location}
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="inline-block bg-slate-900 text-white text-xs font-bold px-2.5 py-1 rounded">
                {currentProperty.titleType}
              </span>
            </div>
          </div>

          {/* Dossier Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-400 block mb-1 font-medium">Lands Registry File Number</span>
              <span className="font-mono font-bold text-slate-800 text-sm">
                {verificationReport.registryFileNumber}
              </span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-400 block mb-1 font-medium">Issuing Authority</span>
              <span className="font-bold text-slate-800">
                {verificationReport.registrar}
              </span>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-400 block mb-1 font-medium">Cadastral Survey & Beacons</span>
              <span className="font-bold text-slate-800">
                {verificationReport.beaconNumbers}
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">{verificationReport.surveyStatus}</p>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-400 block mb-1 font-medium">Last Legal Search Date</span>
              <span className="font-bold text-slate-800">
                {verificationReport.verifiedDate}
              </span>
              <p className="text-[11px] text-emerald-700 font-medium mt-0.5">
                Acquisition Free: Certified
              </p>
            </div>
          </div>

          {/* Legal Sign-Off Note */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-400 block">External Legal Counsel Verification</span>
              <span className="font-semibold text-slate-800">{verificationReport.lawyerSignature}</span>
              <p className="text-[11px] text-slate-500">Corporate Member, Nigerian Bar Association (NBA)</p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-md font-semibold text-[11px]">
                <FileCheck size={13} />
                No Encumbrance
              </span>
            </div>
          </div>

          {/* Download Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleDownloadReport}
              className="w-full sm:flex-1 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-5 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors shadow-sm"
            >
              <Download size={16} />
              {downloadSuccess ? 'Verification Dossier Downloaded (PDF)' : 'Download Full Legal Dossier (PDF)'}
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello, I reviewed the title verification dossier for ${encodeURIComponent(currentProperty.title)} (${currentProperty.titleType}) and I would like to schedule an independent search.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-5 rounded-xl text-center text-sm transition-colors"
            >
              Speak with Legal Officer
            </a>
          </div>

          {downloadSuccess && (
            <p className="text-xs text-center text-emerald-700 font-medium animate-in fade-in">
              ✓ Sample search report package with survey coordinates has been prepared for download.
            </p>
          )}
        </div>

      </div>
    </div>
  );
};
