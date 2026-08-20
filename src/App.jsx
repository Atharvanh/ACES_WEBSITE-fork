import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './pages/Footer/Footer';
import Home from './pages/home/Home';
import WhoAreWe from './pages/who-are-we/WhoAreWe';
import GoldenMoments from './pages/golden-moments/GoldenMoments';
import Gallery from './pages/gallery/Gallery';
import Feed from './pages/feed/Feed';
import Members from './pages/members/Members';
import MembersList from './pages/members/MembersList';
import MemberProfile from './pages/member-profile/MemberProfile';
import Social from './pages/social/Social';
import { useScrollReveal } from './hooks/useScrollReveal';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const yOffset = -70;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: id === 'home' ? 0 : y, behavior: 'smooth' });
        }, 80);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-mesh text-muted font-sans selection:bg-primary selection:text-white">
      <ScrollToTop />
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-are-we" element={<WhoAreWe />} />
          <Route path="/golden-moments" element={<GoldenMoments />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/social" element={<Social />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/:categoryId" element={<MembersList />} />
          <Route path="/members/:categoryId/:memberId" element={<MemberProfile />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
