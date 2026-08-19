import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import WhoAreWe from './pages/who-are-we/WhoAreWe';
import GoldenMoments from './pages/golden-moments/GoldenMoments';
import Gallery from './pages/gallery/Gallery';
import Feed from './pages/feed/Feed';
import Members from './pages/members/Members';
import MemberProfile from './pages/member-profile/MemberProfile';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-charcoal text-white font-sans selection:bg-primary selection:text-white">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-are-we" element={<WhoAreWe />} />
            <Route path="/golden-moments" element={<GoldenMoments />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/members" element={<Members />} />
            <Route path="/members/:id" element={<MemberProfile />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}
