# Land and Properties - Verified Nigerian Real Estate

A trust-focused real estate platform connecting local and diaspora investors to verified, litigation-free estate lands and luxury homes in Nigeria (Lagos, Abuja, and high-growth development corridors).

![Land and Properties Banner](https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80)

## Features

- **Authenticated Title Verifications**: Comprehensive legal registries verifying Certificate of Occupancy (C of O), Governor's Consent, Gazette, and Excision with cadastral survey numbers.
- **Diaspora-Ready Multi-Currency**: Switch effortlessly between Nigerian Naira (`₦`), US Dollars (`$`), and British Pounds (`£`) with automated conversions.
- **Inspection Booking**: Real-time scheduling for both in-person chauffeur-driven site visits and live 1-on-1 virtual WhatsApp HD tours.
- **Flexible Down Payment Calculator**: Dynamic installment planning with instant schedule breakdowns.
- **Executive Operations Console**: Admin dashboard tracking inspection rosters, client leads, and real-time inventory.
- **Trust Compliance**: CAC Registered (RC 1849204) and EFCC SCUML compliant.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS & Lucide Icons
- **Routing**: React Router (with SPA rewrites configured for Vercel)
- **Data Visualization**: Recharts
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jenasom494/land-and-properties.git
   cd land-and-properties
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Vercel Deployment

This project includes a pre-configured `vercel.json` for single-page application (SPA) routing rewrites.
Deploy directly via GitHub integration or CLI:

```bash
npx vercel --prod
```
