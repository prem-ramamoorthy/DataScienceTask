import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import Schedule from '@/components/Schedule';
import Registration from '@/components/Registration';
import Venue from '@/components/Venue';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Schedule />
        <Registration />
        <Venue />
      </main>
      <Footer />
    </div>
  );
};

export default Index;