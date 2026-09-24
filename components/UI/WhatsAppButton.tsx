import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello, I am interested in getting a property from Land and Properties.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-200 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
        Chat with us
      </span>
    </a>
  );
};