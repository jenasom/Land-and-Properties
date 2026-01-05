import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { WhatsAppButton } from './components/UI/WhatsAppButton';
import { Home } from './pages/Home';
import { Properties } from './pages/Properties';
import { PropertyDetail } from './pages/PropertyDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { AdminDashboard } from './pages/AdminDashboard';

// Custom ScrollToTop component as HashRouter doesn't support ScrollRestoration fully automatically in all v6 versions
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-slate-800">
        <Routes>
            {/* Admin Route separate from main layout if desired, but keeping navbar for demo simplicity */}
            <Route path="/admin" element={<><Navbar /><AdminDashboard /><Footer /></>} />
            
            {/* Main Routes */}
            <Route path="*" element={
                <>
                    <Navbar />
                    <main>
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
            } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;