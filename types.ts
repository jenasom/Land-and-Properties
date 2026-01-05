export interface Property {
  id: string;
  title: string;
  location: string;
  state: string;
  price: number;
  promoPrice?: number;
  size: string; // e.g., "500sqm"
  titleType: 'C of O' | 'Gazette' | 'Deed of Assignment' | 'Excision' | 'Freehold' | 'R of O';
  status: 'Available' | 'Sold Out' | 'Fast Selling';
  unitsLeft: number;
  description: string;
  features: string[];
  images: string[];
  coordinates: { lat: number; lng: number };
  videoUrl?: string;
  minDeposit?: number;
  paymentPlanDuration?: number; // in months
}

export interface Booking {
  id: string;
  propertyId: string;
  propertyName: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  date: string;
  time: string;
  type: 'Physical' | 'Virtual';
  status: 'Pending' | 'Confirmed' | 'Completed';
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  interest: string;
  date: string;
  source: string;
}

export enum FilterType {
  LOCATION = 'location',
  PRICE_MAX = 'priceMax',
  TYPE = 'titleType'
}