import { Property, Booking, Lead } from './types';

export const COMPANY_INFO = {
  name: "Land and Properties Nigeria",
  shortName: "Land & Properties",
  tagline: "Verified Real Estate Investments with 100% Peace of Mind",
  phone: "+234 803 456 7890",
  phoneSecondary: "+234 707 778 7372",
  diasporaHotline: "+44 20 7946 0192", // London desk
  whatsapp: "2348034567890", // format for WhatsApp click-to-chat
  email: "info@landandproperties.com.ng",
  salesEmail: "sales@landandproperties.com.ng",
  address: "Plot 14, Admiralty Way, Lekki Phase 1, Lagos State, Nigeria",
  branchAbuja: "Suite 302, Grand Square Plaza, Central Business District, Abuja",
  cac: "RC: 1849204",
  scuml: "SCUML/EFCC/RN: 2021-09412"
};

export const EXCHANGE_RATES = {
  NGN: 1,
  USD: 1550, // ₦1,550 / $1
  GBP: 2020  // ₦2,020 / £1
};

export const FORMAT_CURRENCY = (amount: number, currency: 'NGN' | 'USD' | 'GBP' = 'NGN'): string => {
  if (currency === 'USD') {
    const val = Math.round(amount / EXCHANGE_RATES.USD);
    return `$${val.toLocaleString()}`;
  }
  if (currency === 'GBP') {
    const val = Math.round(amount / EXCHANGE_RATES.GBP);
    return `£${val.toLocaleString()}`;
  }
  return `₦${amount.toLocaleString()}`;
};

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'The Oakwood 5-Bedroom Fully Detached Luxury Duplex',
    estateName: 'Richmond Park Estate, Lekki Phase 1',
    category: 'House',
    location: 'Lekki Phase 1 (Off Freedom Way), Lagos',
    state: 'Lagos',
    price: 240000000,
    promoPrice: 215000000,
    size: '550sqm Compound Space',
    bedrooms: 5,
    bathrooms: 6,
    parkingSpaces: 4,
    titleType: "Governor's Consent",
    status: 'Fast Selling',
    unitsLeft: 2,
    isFeatured: true,
    description: `A masterclass in contemporary Nigerian luxury living. This 5-bedroom all-en-suite detached duplex with private rooftop terrace and attached boys' quarters (BQ) sits in a fully paved, 24/7 serviced estate in prime Lekki Phase 1. 
    
    Equipped with Italian fitted chef's kitchen, biometric fingerprint access doors, 4K CCTV surveillance system, private swimming pool, and dedicated stamped-concrete 4-car park. Built on dry land with zero flood risk and official Governor's Consent registered at Lagos State Lands Bureau, Alausa.`,
    features: [
      'Private Swimming Pool',
      'Fitted Chef Kitchen with Island',
      'All En-Suite Bedrooms + BQ',
      'Governor\'s Consent Title',
      '24/7 Armed Security & CCTV',
      'Fibre-Optic Internet Ready',
      'Automated Gate & Electric Fence',
      'Treated Water Supply'
    ],
    highlightBadges: ['Serviced Estate', 'Ready For Occupancy', 'Zero Flood Zone'],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 6.4474, lng: 3.4723 },
    minDeposit: 50000000,
    paymentPlanDuration: 12,
    verificationReport: {
      registrar: 'Lagos State Lands Bureau (Alausa, Ikeja)',
      verifiedDate: '12th January 2026',
      surveyStatus: 'Approved & Chartered Red Copy Registered',
      beaconNumbers: 'BK-LA/99241 to BK-LA/99244',
      governmentAcquisitionFree: true,
      registryFileNumber: 'LS/GC/2021/VOL-184/PG-92',
      lawyerSignature: 'Adegboruwa & Associates (SAN)'
    }
  },
  {
    id: '2',
    title: 'Guzape Hillside 4-Bedroom Semi-Detached Smart Villa',
    estateName: 'Asokoro View Terraced Enclave',
    category: 'House',
    location: 'Guzape Diplomatic Enclave, Abuja FCT',
    state: 'Abuja',
    price: 185000000,
    promoPrice: 172000000,
    size: '480sqm Land Allocation',
    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 3,
    titleType: 'C of O',
    status: 'Available',
    unitsLeft: 4,
    isFeatured: true,
    description: `Perched on the scenic elevation of Guzape with panoramic views of the Abuja city skyline, this contemporary 4-bedroom semi-detached smart villa combines timeless granite masonry with ultra-modern smart home automation.
    
    Includes 10kVA solar hybrid inverter system with lithium batteries, central surround sound audio, double-height living room ceiling, marble stairs, and automated roller shutters. Direct C of O issued by the Federal Capital Development Authority (FCDA).`,
    features: [
      'Federal C of O (FCDA Verified)',
      '10kVA Solar Hybrid Backup System',
      'Double-Volume Living Area',
      'Smart Lighting & App Access',
      'Landscaped Private Garden',
      'Paved Asphalt Access Roads',
      'Armed MOPOL Guard Patrol'
    ],
    highlightBadges: ['Solar Powered', 'FCDA C of O', 'Panoramic View'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 9.0321, lng: 7.5187 },
    minDeposit: 35000000,
    paymentPlanDuration: 6,
    verificationReport: {
      registrar: 'Abuja Geographic Information Systems (AGIS)',
      verifiedDate: '4th February 2026',
      surveyStatus: 'Approved Cadastral Survey (FCDA/GZP/2020)',
      beaconNumbers: 'AGIS/BEA/4021A - 4021D',
      governmentAcquisitionFree: true,
      registryFileNumber: 'FCDA/MISC/GZP/88419',
      lawyerSignature: 'Aliyu, Musa & Partners Legal Barristers'
    }
  },
  {
    id: '3',
    title: 'Crown Court 4-Bedroom Serviced Terraces',
    estateName: 'Crown Court Gated Estate',
    category: 'House',
    location: 'Chevron Drive / Orchid Road, Lekki, Lagos',
    state: 'Lagos',
    price: 88000000,
    promoPrice: 79500000,
    size: '350sqm Built Area',
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 2,
    titleType: "Governor's Consent",
    status: 'Fast Selling',
    unitsLeft: 3,
    isFeatured: true,
    description: `A boutique private estate community designed for young professionals and savvy buy-to-let investors. These 4-bedroom terraces offer a guaranteed annual rental yield of 11-13% in the high-demand Chevron-Orchid corridor.
    
    Complete with clean central underground drainage, uniform perimeter street lighting, estate gym, children play park, and dedicated facility managers.`,
    features: [
      'Uniform Gated Architectural Community',
      'Governor\'s Consent Title',
      '12% Projected Rental Yield',
      'Fitted Wardrobes & Smoked Glass',
      'Commercial Grade Borehole & Water Treatment',
      '24hr Security Patrol'
    ],
    highlightBadges: ['High Rental ROI', 'Pay in 6 Months', 'Instant Keys'],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 6.4358, lng: 3.5381 },
    minDeposit: 20000000,
    paymentPlanDuration: 6,
    verificationReport: {
      registrar: 'Lagos State Lands Registry, Alausa',
      verifiedDate: '18th November 2025',
      surveyStatus: 'Registered Layout Plan (Plan No: LA/ET/7712)',
      beaconNumbers: 'ET-4012 through ET-4015',
      governmentAcquisitionFree: true,
      registryFileNumber: 'LS/GC/2019/VOL-112/PG-04',
      lawyerSignature: 'Oladipo & Co. Solicitors'
    }
  },
  {
    id: '4',
    title: 'Blue Diamond Residential Estate Plots',
    estateName: 'Blue Diamond Master-Planned Estate',
    category: 'Land',
    location: 'Lekki-Epe Expressway, Adjacent Alaro City, Epe, Lagos',
    state: 'Lagos',
    price: 9500000,
    promoPrice: 8200000,
    size: '500sqm (100% Dry Land)',
    titleType: 'C of O',
    status: 'Fast Selling',
    unitsLeft: 9,
    isFeatured: true,
    description: `Directly along the booming Lekki-Epe corridor, directly opposite the mega industrial corridor and 3 minutes from Alaro City and the proposed Lekki International Airport. 
    
    100% dry, table land requiring zero sand-filling. Registered Certificate of Occupancy allocated by Lagos State Government. Instant beacon allocation immediately after down-payment. Zero omo-onile issues guaranteed with perimeter wall and manned entrance gate.`,
    features: [
      'Lagos State Certificate of Occupancy (C of O)',
      '100% Dry Table Land (No Sandfilling)',
      'Instant Allocation with Registered Survey',
      'Direct Expressway Access Road',
      'High Capital Appreciation Corridor (+35% YoY)',
      'Perimeter Fence & Security Gatehouse',
      'Zero Omo-Onile / Community Interference'
    ],
    highlightBadges: ['C of O Title', 'Instant Allocation', 'Zero Sandfilling'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 6.5841, lng: 3.9754 },
    minDeposit: 2000000,
    paymentPlanDuration: 6,
    verificationReport: {
      registrar: 'Office of the Surveyor-General of Lagos State',
      verifiedDate: '20th January 2026',
      surveyStatus: 'Lodged and Approved Cadastral Survey Plan',
      beaconNumbers: 'SGO/EPE/9023/1A - 9023/1D',
      governmentAcquisitionFree: true,
      registryFileNumber: 'C of O No: 42/42/2021A (Lagos State Government Gazette)',
      lawyerSignature: 'Babatunde Legal Partners'
    }
  },
  {
    id: '5',
    title: 'Emerald Horizon Waterfront Estate & Prototype Duplexes',
    estateName: 'Emerald Coastal Sanctuary',
    category: 'House',
    location: 'Coastal Road, Ibeju-Lekki, Lagos',
    state: 'Lagos',
    price: 72000000,
    promoPrice: 65000000,
    size: '4-Bedroom Detached Villa (450sqm Plot)',
    bedrooms: 4,
    bathrooms: 4,
    parkingSpaces: 3,
    titleType: 'Gazette',
    status: 'Available',
    unitsLeft: 5,
    isFeatured: false,
    description: `A contemporary beachside serviced estate in Ibeju-Lekki, 6 minutes drive from the Dangote Refinery & Petrochemical Complex and Lekki Deep Sea Port. 
    
    Choose between purchasing a fully finished prototype 4-bedroom detached duplex or virgin residential plots. Covered by an authentic Lagos State Government Gazette. Ideal for expatriate executive rentals and mid-to-long term wealth preservation.`,
    features: [
      'Official Lagos State Gazette Title',
      'Proximity to Dangote Refinery & Lekki Deep Sea Port',
      'Coastal Breeze & Serene Atmosphere',
      'Paved Internal Interlocking Roads',
      'Central Estate Solar Streetlights',
      'Title Guaranteed Free from Acquisition'
    ],
    highlightBadges: ['Official Gazette', 'Port Corridor ROI', 'Flexible 12-Month Plan'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 6.4698, lng: 3.5852 },
    minDeposit: 15000000,
    paymentPlanDuration: 12,
    verificationReport: {
      registrar: 'Lagos State Ministry of Physical Planning & Urban Development',
      verifiedDate: '10th October 2025',
      surveyStatus: 'Gazetted Excision Layout',
      beaconNumbers: 'IBL/GZ/1102 to IBL/GZ/1106',
      governmentAcquisitionFree: true,
      registryFileNumber: 'Gazette No. 24 Vol. 41 (Notice No. 182)',
      lawyerSignature: 'Chief Olatunji Legal Chambers'
    }
  },
  {
    id: '6',
    title: 'Peace Haven Courts - Prime Residential Plots',
    estateName: 'Peace Haven Gated Enclave',
    category: 'Land',
    location: 'Airport Road, Lugbe Extension, Abuja FCT',
    state: 'Abuja',
    price: 6500000,
    promoPrice: 5800000,
    size: '600sqm (Residential Allocation)',
    titleType: 'R of O',
    status: 'Available',
    unitsLeft: 7,
    isFeatured: false,
    description: `Ready-to-build dry residential land in Lugbe, Abuja. Located just 12 minutes drive from Nnamdi Azikiwe International Airport and 20 minutes to Central Business District (CBD).
    
    Fastest developing residential hub in Abuja with active neighbor houses under construction. Physical beacon pegging carried out on site with buyers within 48 hours of subscription.`,
    features: [
      'FCDA Right of Occupancy (R of O)',
      '100% Ready-to-Build Neighborhood',
      'Good Topography & Dry Soil',
      'Electricity Transformers Installed',
      'Instant Allocation of Physical Beacon'
    ],
    highlightBadges: ['Ready to Build', 'Airport Corridor', 'Fast Allocation'],
    images: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 9.0765, lng: 7.3986 },
    minDeposit: 1500000,
    paymentPlanDuration: 6,
    verificationReport: {
      registrar: 'Abuja Geographic Information Systems (AGIS)',
      verifiedDate: '15th November 2025',
      surveyStatus: 'Approved Layout Plan (FCDA/LGB/704)',
      beaconNumbers: 'FCDA-LGB-9114 through 9117',
      governmentAcquisitionFree: true,
      registryFileNumber: 'R of O Ref: MISC/LGB/40192',
      lawyerSignature: 'Usman & Partners Legal'
    }
  },
  {
    id: '7',
    title: 'Maitama Grand Crest 5-Bedroom Architectural Palace',
    estateName: 'Maitama Diplomatic View',
    category: 'House',
    location: 'Maitama Extension, Abuja FCT',
    state: 'Abuja',
    price: 360000000,
    size: '950sqm Private Compound',
    bedrooms: 5,
    bathrooms: 7,
    parkingSpaces: 6,
    titleType: 'C of O',
    status: 'Fast Selling',
    unitsLeft: 1,
    isFeatured: true,
    description: `An ultra-exclusive architectural triumph in Abuja's most prestigious district. This palatial 5-bedroom residence features private glass elevator, infinity pool, 12-seater private cinema room, industrial Spanish kitchen, separate chef dirty kitchen, and 2-room staff quarters.
    
    Complete with ballistic-rated security entry doors, dedicated 50kVA standby soundproof generator, and verified Federal C of O in the owner's name.`,
    features: [
      'Federal C of O in Diplomatic Zone',
      'Private Glass Elevator & Infinity Pool',
      '12-Seater Private Cinema Room',
      'Dedicated 50kVA Soundproof Generator',
      'Ballistic Security Doors',
      'Marble Bathrooms with Jacuzzi Spas',
      '6-Car Interlocked Parking Space'
    ],
    highlightBadges: ['Ultra Luxury', 'Private Elevator', 'Diplomatic Zone'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 9.0882, lng: 7.4985 },
    minDeposit: 100000000,
    paymentPlanDuration: 6,
    verificationReport: {
      registrar: 'Federal Ministry of Works & Housing / AGIS',
      verifiedDate: '5th January 2026',
      surveyStatus: 'Approved Presidential Cadastre',
      beaconNumbers: 'MT-EXT-0044A to 0044F',
      governmentAcquisitionFree: true,
      registryFileNumber: 'FCDA/RES/MTM/001842',
      lawyerSignature: 'Gadzama SAN & Co.'
    }
  },
  {
    id: '8',
    title: 'Golden Crest Garden Plots (Fast Growth Zone)',
    estateName: 'Golden Crest City Phase 2',
    category: 'Land',
    location: 'Ketu-Epe Expressway, Lagos State',
    state: 'Lagos',
    price: 4800000,
    promoPrice: 3950000,
    size: '500sqm (Dry Plain)',
    titleType: 'Freehold',
    status: 'Fast Selling',
    unitsLeft: 11,
    isFeatured: false,
    description: `The best budget-friendly high-yield land investment in Lagos today. Positioned right along the Ketu-Epe axis with direct links to the new Lagos Food Logistics Hub and agricultural mega-centers. 
    
    Registered Survey and Deed of Assignment. Absolutely zero dispute, free from government committed acquisition, with quick title perfection options.`,
    features: [
      'Registered Survey & Deed of Assignment',
      'Instant Physical Pegging & Allocation',
      'Close to Lagos Food & Logistics Hub',
      '100% Dry Soil, Free from Encroachment',
      'Affordable Installment Starting at ₦500k'
    ],
    highlightBadges: ['Budget Friendly', 'High Appreciation', 'Zero Omo-Onile'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80'
    ],
    coordinates: { lat: 6.6124, lng: 4.0121 },
    minDeposit: 800000,
    paymentPlanDuration: 6,
    verificationReport: {
      registrar: 'Surveyor-General Office Lagos',
      verifiedDate: '12th December 2025',
      surveyStatus: 'Lodged Registered Survey (Plan No: LA/KT/189)',
      beaconNumbers: 'KTE/9912A to 9912D',
      governmentAcquisitionFree: true,
      registryFileNumber: 'Deed of Assignment Vol. 42 Page 88',
      lawyerSignature: 'Kayode Sanni Legal Services'
    }
  }
];

export const VERIFICATION_GUARANTEES = [
  {
    title: "100% Legal Title Due Diligence",
    desc: "Every land and estate house is vetted at the State Lands Bureau (Alausa, Lagos or AGIS, Abuja) before being listed. Zero uncommitted lands.",
    stat: "Zero Title Disputes in 6+ Years"
  },
  {
    title: "Zero Omo-Onile (Land Grabber) Guarantee",
    desc: "All our estates are gated, perimeter-fenced, and protected by private corporate security with biometric gatehouses.",
    stat: "100% Secure Enclaves"
  },
  {
    title: "Physical & Virtual Video Inspections",
    desc: "Free weekend chauffeur shuttles to site inspections in Lagos and Abuja. High-definition live WhatsApp video tours for diaspora investors.",
    stat: "Over 850 Inspections Conducted"
  },
  {
    title: "Immediate Deed & Allocation",
    desc: "Receive your physical beacon allocation, survey plan, deed of contract, and provisional allotment letter immediately upon subscription.",
    stat: "Instant Beacon Allocation"
  }
];

export const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Dr. Chinedu Okeke",
    location: "London, United Kingdom (Diaspora Buyer)",
    role: "NHS Consultant Surgeon",
    text: "Buying real estate in Nigeria while living in the UK used to give me sleepless nights due to horror stories from relatives. Land and Properties conducted a live 45-minute WhatsApp video inspection of the Oakwood duplex in Lekki, sent the legal search report from Alausa, and their lawyers handled the paperwork seamlessly. My keys were delivered to my mother in Lagos.",
    rating: 5,
    propertyBought: "The Oakwood 5-Bedroom Duplex, Lekki"
  },
  {
    id: 2,
    name: "Engr. Folake Balogun",
    location: "Victoria Island, Lagos",
    role: "Oil & Gas Project Director",
    text: "I bought 4 plots in Blue Diamond Estate, Epe in 2024. The instant beacon pegging gave me peace of mind. We verified the C of O at Alausa with our private surveyor, and the coordinates matched the government records to the millimeter. The land has already appreciated by 48%. Highly recommended!",
    rating: 5,
    propertyBought: "4 Plots at Blue Diamond Estate, Epe"
  },
  {
    id: 3,
    name: "Barrister Amina Yusuf",
    location: "Maitama, Abuja",
    role: "Corporate Attorney & Investor",
    text: "As a lawyer, title purity is non-negotiable for me. The AGIS search on the Guzape property returned 100% clean with no encumbrance. Their customer support team is punctual, transparent, and strictly adheres to anti-money laundering and SCUML regulations.",
    rating: 5,
    propertyBought: "Guzape Smart Villa, Abuja"
  },
  {
    id: 4,
    name: "Oluwaseun Adeleke",
    location: "Houston, Texas, USA",
    role: "Software Engineering Lead",
    text: "The flexible 12-month installment plan allowed me to lock in the pre-launch price of Crown Court Terraces without liquidating my stock portfolio. Transparent receipt generation and weekly video construction updates kept me in the loop throughout.",
    rating: 5,
    propertyBought: "Crown Court 4-Bedroom Terrace, Lekki"
  }
];

export const MOCK_BOOKINGS: Booking[] = [
  { 
    id: 'b1', 
    propertyId: '1', 
    propertyName: 'The Oakwood 5-Bedroom Luxury Duplex', 
    clientName: 'Dr. John Emeka', 
    clientEmail: 'j.emeka@cardiology.co.uk', 
    clientPhone: '+44 7911 123456', 
    date: '2026-10-02', 
    time: '11:00 AM', 
    type: 'Virtual', 
    locationPreference: 'WhatsApp Video Call (UK Time)',
    status: 'Confirmed',
    notes: 'Interested in outright purchase and penthouse floor layout'
  },
  { 
    id: 'b2', 
    propertyId: '4', 
    propertyName: 'Blue Diamond Estate Plots (Epe)', 
    clientName: 'Mrs. Funmilayo Adeleke', 
    clientEmail: 'funmiadeleke@gmail.com', 
    clientPhone: '0802 345 6789', 
    date: '2026-10-04', 
    time: '09:30 AM', 
    type: 'Physical', 
    locationPreference: 'Pick up at Lekki Phase 1 Office for Saturday Shuttle',
    status: 'Pending',
    notes: 'Looking for 2 plots side-by-side for residential development'
  },
  { 
    id: 'b3', 
    propertyId: '2', 
    propertyName: 'Guzape Hillside Smart Villa (Abuja)', 
    clientName: 'Col. Ibrahim Bello (Rtd)', 
    clientEmail: 'i.bello@consultancy.ng', 
    clientPhone: '0803 998 7766', 
    date: '2026-10-05', 
    time: '02:00 PM', 
    type: 'Physical', 
    locationPreference: 'Meet on site at Guzape Estate Gate',
    status: 'Confirmed',
    notes: 'Client requests meeting with resident structural engineer'
  }
];

export const MOCK_LEADS: Lead[] = [
  { id: 'l1', name: 'Alhaji Bashir Dikko', phone: '0803 112 4455', email: 'bdikko@trade.ng', interest: 'Maitama Palace 5-Bed Mansion', date: '2026-09-22', source: 'WhatsApp Concierge', budget: '₦350M - ₦400M' },
  { id: 'l2', name: 'Ngozi Chimamanda', phone: '+1 404 889 1209', email: 'ngozi@techatlanta.com', interest: 'Crown Court Terraces Lekki', date: '2026-09-23', source: 'Diaspora Inquiry Form', budget: '₦80M - ₦90M' },
  { id: 'l3', name: 'Capt. Tunde Bakare', phone: '0812 555 4321', email: 'tunde.b@aviation.ng', interest: 'Blue Diamond Epe 3 Plots', date: '2026-09-23', source: 'Website Inspection Form', budget: '₦25M - ₦30M' },
  { id: 'l4', name: 'Mrs. Kemi Ojo', phone: '0901 222 8899', email: 'kemi.ojo@lagoshealth.gov.ng', interest: 'Emerald Horizon Waterfront', date: '2026-09-21', source: 'Call-in', budget: '₦65M' }
];

export const FAQ_ITEMS = [
  {
    question: "How do I verify the authenticity of your land titles?",
    answer: "Every listed property includes its official state file number, registered survey plan number, and title document (C of O, Governor's Consent, or Official Gazette). We actively encourage your private legal team and registered surveyor to conduct independent searches at the Lagos State Lands Bureau in Alausa or AGIS in Abuja before committing any funds."
  },
  {
    question: "How does the inspection work if I am in the Diaspora (UK, US, Canada, Europe)?",
    answer: "We offer dedicated Virtual Live Video Inspections via WhatsApp or Zoom. A licensed property specialist will walk you through the property, street access, perimeter fence, surrounding neighborhood, and electrical/drainage infrastructure in real time. You can also designate a family member or surveyor in Nigeria for a physical visit."
  },
  {
    question: "Are there any hidden fees like Omo-Onile (Land Grabbers) or development levies?",
    answer: "Never. All our properties have zero community/omo-onile interference. Our invoices clearly state all applicable costs (Deed of Assignment, Registered Survey, and Estate Infrastructure Levy) upfront. There are no sudden surprises."
  },
  {
    question: "When do I get my physical plot allocation and documents?",
    answer: "For land purchases, physical beacon allocation and pegging happen immediately upon payment completion (or down payment in allocated phases). You receive your provisional allotment letter within 24 hours and your deed of contract instantly."
  },
  {
    question: "What payment options are available?",
    answer: "We offer Outright Payment (which attracts a 5-10% promo discount) as well as flexible 3, 6, and 12-month installment payment plans. Payments are made directly to the registered corporate bank account of Land and Properties Nigeria."
  }
];