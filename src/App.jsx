import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyIntro from './components/CompanyIntro';
import DesignWorkGallery from './components/DesignWorkGallery';
import CompanyContact from './components/CompanyContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen ambient-navy-bg text-white flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CompanyIntro />
        <DesignWorkGallery />
        <CompanyContact />
      </main>
      <Footer />
    </div>
  );
}
