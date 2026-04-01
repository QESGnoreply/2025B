import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { CoreAgenda } from './components/CoreAgenda';
import { KeyHighlights } from './components/KeyHighlights';
import { Portfolio } from './components/Portfolio';
import { SocialImpact } from './components/SocialImpact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <Intro />
      <CoreAgenda />
      <KeyHighlights />
      <Portfolio />
      <SocialImpact />
      <Footer />
    </div>
  );
}

export default App;
