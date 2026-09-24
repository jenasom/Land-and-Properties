import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { WhatsAppButton } from './components/UI/WhatsAppButton';
import { Home } from './pages/Home';
import { Properties } from './pages/Properties';
import { PropertyDetail } from './pages/PropertyDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { AdminDashboard } from './pages/AdminDashboard';
import { CurrencyProvider } from './context/CurrencyContext';

// Custom ScrollToTop component for HashRouter navigation
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <CurrencyProvider>
      <Router>
        <ScrollToTop />
        <div className="font-sans text-slate-900 bg-white min-h-screen flex flex-col justify-between">
          <Routes>
            {/* Admin Route with standard wrapper */}
            <Route
              path="/admin"
              element={
                <>
                  <Navbar />
                  <main className="flex-1">
                    <AdminDashboard />
                  </main>
                  <Footer />
                </>
              }
            />

            {/* Public Customer Routes */}
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/properties" element={<Properties />} />
                      <Route path="/properties/:id" element={<PropertyDetail />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                    </Routes>
                  </main>
                  <WhatsAppButton />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </CurrencyProvider>
  );
};

export default App;
