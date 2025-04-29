'use client';
import React, { useEffect } from 'react';
import styles from './index.module.css';

const Discovery: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div className={styles.discoveryContent}>Discovery call</div>
        <div className={styles.companyName}>INOVIXPRO</div>
        <div className={styles.personalInfo}>
          <div className={styles.imageGroup}>
            <img className={styles.size} src="/Rijon.png" alt="Rijon" />
            {/* <img className={styles.size} src="/1000x1000.jpg" alt="Shabbir" /> */}
          </div>
          <div className={styles.name}>Rijon</div>
          <div className={styles.title}>Chief Executive Officers</div>
          <div className={styles.duration}>30 min</div>
        </div>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.right}>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/rizraizada000/30min"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </section>
  );
};

export default Discovery;
