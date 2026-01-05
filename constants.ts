import { Property, Booking, Lead } from './types';

export const COMPANY_INFO = {
  name: "Land and Properties",
  phone: "+234 707 778 7372",
  phoneSecondary: "+234 816 831 1805",
  whatsapp: "2347077787372", // format for API
  email: "info@landandproperties.com.ng",
  address: "Kugama Plaza, Opposite Unity Bank, Bekaji Road, Yola, Adamawa State",
  cac: "RC: 1234567"
};

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Blue Diamond Estate',
    location: 'Ring Road, Jankasa, Adamawa',
    state: 'Adamawa',
    price: 1500000,
    promoPrice: 1150000,
    size: '300sqm',
    titleType: 'C of O',
    status: 'Fast Selling',
    unitsLeft: 5,
    description: 'Located on the main express road, adjacent to Fintiri 1000 Housing Unit Estate. Proximity to proposed Aviation school and DSS quarters. Secured and serene environment.',
    features: ['Main Express Road', 'Dry Land', 'Secure Perimeter', 'Electricity', 'Good Road Network'],
    images: [
      'https://picsum.photos/id/10/800/600',
      'https://picsum.photos/id/11/800/600',
      'https://picsum.photos/id/12/800/600'
    ],
    coordinates: { lat: 9.2035, lng: 12.4954 },
    minDeposit: 500000,
    paymentPlanDuration: 3
  },
  {
    id: '2',
    title: 'Emerald Garden Phase 2',
    location: 'Ibeju-Lekki, Lagos',
    state: 'Lagos',
    price: 3500000,
    size: '600sqm',
    titleType: 'Gazette',
    status: 'Available',
    unitsLeft: 12,
    description: 'A perfect investment opportunity in the heart of the new Lagos. 5 minutes drive from the Dangote Refinery.',
    features: ['Perimeter Fencing', 'Gate House', 'Drainage', 'Security'],
    images: [
      'https://picsum.photos/id/13/800/600',
      'https://picsum.photos/id/14/800/600'
    ],
    coordinates: { lat: 6.4698, lng: 3.5852 },
    minDeposit: 1000000,
    paymentPlanDuration: 6
  },
  {
    id: '3',
    title: 'Peace Haven Courts',
    location: 'Lugbe, Abuja',
    state: 'Abuja',
    price: 4500000,
    size: '450sqm',
    titleType: 'R of O', // Converted to Freehold/Excision type logic in UI
    status: 'Available',
    unitsLeft: 8,
    description: 'Prime dry land behind the airport road. Buy and build immediately.',
    features: ['Instant Allocation', 'Buy and Build', 'Tarred Roads'],
    images: [
      'https://picsum.photos/id/15/800/600',
      'https://picsum.photos/id/16/800/600'
    ],
    coordinates: { lat: 9.0765, lng: 7.3986 } as any, // casting for mock
    minDeposit: 1500000,
    paymentPlanDuration: 12
  },
  {
    id: '4',
    title: 'Golden Gate City',
    location: 'Epe, Lagos',
    state: 'Lagos',
    price: 1200000,
    size: '500sqm',
    titleType: 'Freehold',
    status: 'Sold Out',
    unitsLeft: 0,
    description: 'Completely sold out phase 1. Join the waiting list for Phase 2.',
    features: ['Recreation Center', 'Green Area', 'Security'],
    images: [
      'https://picsum.photos/id/17/800/600'
    ],
    coordinates: { lat: 6.5841, lng: 3.9754 },
    minDeposit: 500000,
    paymentPlanDuration: 3
  }
];

export const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Chinedu Okeke",
    role: "Business Owner",
    text: "I was skeptical at first about buying land online, but Land and Properties provided all documents for verification before I paid a dime. The inspection was seamless.",
    rating: 5
  },
  {
    id: 2,
    name: "Amina Yusuf",
    role: "Civil Servant",
    text: "My allocation was done instantly after my complete payment. The Blue Diamond estate is exactly as described.",
    rating: 5
  },
  {
    id: 3,
    name: "David West",
    role: "Diaspora Investor",
    text: "Managing property from the UK is hard, but their virtual inspection and transparent updates made me confident. I own 2 plots now.",
    rating: 4
  }
];

export const MOCK_BOOKINGS: Booking[] = [
  { id: 'b1', propertyId: '1', propertyName: 'Blue Diamond Estate', clientName: 'John Doe', clientEmail: 'john@example.com', clientPhone: '08012345678', date: '2023-11-20', time: '10:00', type: 'Physical', status: 'Pending' },
  { id: 'b2', propertyId: '2', propertyName: 'Emerald Garden', clientName: 'Sarah Smith', clientEmail: 'sarah@example.com', clientPhone: '08087654321', date: '2023-11-22', time: '14:00', type: 'Virtual', status: 'Confirmed' },
];

export const MOCK_LEADS: Lead[] = [
  { id: 'l1', name: 'Emmanuel Kanu', phone: '08123456789', interest: 'Blue Diamond Estate', date: '2023-10-25', source: 'WhatsApp' },
  { id: 'l2', name: 'Funke Akindele', phone: '09012345678', interest: 'General Inquiry', date: '2023-10-26', source: 'Contact Form' },
];