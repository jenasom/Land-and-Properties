export type PropertyCategory = 'House' | 'Land';

export type TitleType = 
  | 'C of O' 
  | "Governor's Consent" 
  | 'Gazette' 
  | 'Deed of Assignment' 
  | 'Excision' 
  | 'Freehold' 
  | 'R of O';

export interface VerificationReport {
  registrar: string;
  verifiedDate: string;
  surveyStatus: string;
  beaconNumbers: string;
  governmentAcquisitionFree: boolean;
  registryFileNumber: string;
  lawyerSignature: string;
}

export interface Property {
  id: string;
  title: string;
  estateName: string;
  category: PropertyCategory;
  location: string;
  state: 'Lagos' | 'Abuja' | 'Oyo' | 'Adamawa' | 'Rivers' | 'Ogun' | string;
  price: number;
  promoPrice?: number;
  size: string; // e.g., "500sqm", "4-Bedroom Terrace + BQ"
  bedrooms?: number;
  bathrooms?: number;
  parkingSpaces?: number;
  titleType: TitleType;
  status: 'Available' | 'Sold Out' | 'Fast Selling';
  unitsLeft: number;
  description: string;
  features: string[];
  images: string[];
  coordinates: { lat: number; lng: number };
  videoUrl?: string;
  minDeposit?: number;
  paymentPlanDuration?: number; // in months
  verificationReport: VerificationReport;
  highlightBadges?: string[];
  isFeatured?: boolean;
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
  locationPreference?: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  notes?: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  interest: string;
  date: string;
  source: string;
  budget?: string;
}

export type Currency = 'NGN' | 'USD' | 'GBP';

export enum FilterType {
  CATEGORY = 'category',
  LOCATION = 'location',
  PRICE_MAX = 'priceMax',
  TYPE = 'titleType'
}
