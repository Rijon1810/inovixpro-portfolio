// src/app/page.tsx
'use client';

import React, { useRef } from 'react';
import Hero from '../components/Hero';
import Brand from '@/components/Brand';
import Works from '../components/Works';
import HowItsWorks from '@/components/HowItsWorks';
import BookACall from '@/components/BookACall';
import styles from './page.module.css';
import Testimonials from '@/components/Testomonials';
import Questions from '@/components/Questions';
import Discovery from '@/components/Discovery';
import Footer from '@/components/Footer';

export default function Home() {
  const discoveryRef = useRef<HTMLDivElement>(null);

  const scrollToDiscovery = () => {
    if (discoveryRef.current) {
      discoveryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={styles.main}>
      <Hero onBookACallClick={scrollToDiscovery} />
      <Works />
      <Brand />
      <HowItsWorks />
      <BookACall onBookACallClick={scrollToDiscovery} />
      <Testimonials />
      <Questions />
         <div ref={discoveryRef}>
        <Discovery />
      </div>
      <Footer />
    </main>
  );
}
