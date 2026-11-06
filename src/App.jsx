import React, { useState } from 'react';
import { Envelope } from './components/Envelope';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Blessings } from './components/Blessings';
import { LoveStory } from './components/LoveStory';
import { Schedule } from './components/Schedule';
import { Countdown } from './components/Countdown';
import { Venue } from './components/Venue';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { PetalsCanvas } from './components/PetalsCanvas';

export function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState(false);

  const handleEnvelopeOpen = () => {
    setEnvelopeOpened(true);
  };

  const handleStartMusic = () => {
    setAutoPlayAudio(true);
  };

  const handleReplayEnvelope = () => {
    setEnvelopeOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-ivory text-espresso font-sans selection:bg-gold/20 selection:text-espresso">
      
      {/* 3D Wax Seal Envelope Entrance */}
      {!envelopeOpened && (
        <Envelope
          onOpenComplete={handleEnvelopeOpen}
          onStartMusic={handleStartMusic}
        />
      )}

      {/* Ambient Audio Player (Gramophone / Studio Recorded Wedding Melody) */}
      <AudioPlayer autoPlayTrigger={autoPlayAudio} />

      {/* Romantic Floating Rose & Gold Petals Overlay */}
      <PetalsCanvas />

      {/* Floating Top Navigation */}
      <Navbar />

      {/* Main Wedding Invitation Website Content */}
      <main className="relative z-10">
        {/* Hero Section with Couple Names & Date */}
        <Hero />

        {/* Sacred Sanskrit Invocation & Family Invitation Message */}
        <Blessings />

        {/* Editorial Love Story Journey */}
        <LoveStory />

        {/* Multi-Day Royal Festivities & Schedule (The Wedding Itinerary) */}
        <Schedule />

        {/* Live Antique Gold Countdown */}
        <Countdown />

        {/* Destination BHEL Kalyana Mandapam, Visakhapatnam & Google Maps */}
        <Venue />

        {/* Closing Thank You & Social Sharing */}
        <Footer onReplayEnvelope={handleReplayEnvelope} />
      </main>
    </div>
  );
}

export default App;
