
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServiceFeatures from '../components/ServiceFeatures';
import HospitalSearch from '../components/HospitalSearch';
import ConsultationProcess from '../components/ConsultationProcess';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HospitalSearch />
      <ServiceFeatures />
      <ConsultationProcess />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
