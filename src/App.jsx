import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroValue from './components/IntroValue';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyUs from './components/WhyUs';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050B14] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IntroValue />
        <Services />
        <Portfolio />
        <WhyUs />
        <Workflow />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
