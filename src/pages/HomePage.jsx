import React from 'react';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import Gallery from '../components/Gallery';
import AiTool from '../components/AiTool';
import Team from '../components/Team';
import ContactForm from '../components/ContactForm';
import Donation from '../components/Donation';
import Footer from '../components/Footer';
import CaseStudies from '../components/CaseStudies';
import ImpactMetrics from '../components/ImpactMetrics';
import TrustIndicators from '../components/TrustIndicators';
import FAQ from '../components/FAQ';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider />
      <About />
      <ImpactMetrics />
      <Gallery />
      <CaseStudies />
      <AiTool />
      <TrustIndicators />
      <Team />
      <FAQ />
      <ContactForm />
      <Donation />
      <Footer />
    </div>
  );
};

export default HomePage;
