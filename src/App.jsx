import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BackgroundEffect from './components/BackgroundEffect';

// Pages
import Home from './pages/Home';
import PracticeArea from './pages/PracticeArea';

import OurTeam from './pages/OurTeam';
import Judgements from './pages/Judgements';
import Blogs from './pages/Blogs';
import JoinOurTeam from './pages/JoinOurTeam';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-navy-900 font-sans text-slate-300 relative">
      <BackgroundEffect />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice/:slug" element={<PracticeArea />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/judgements" element={<Judgements />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/join-our-team" element={<JoinOurTeam />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
