"use client";

import React from 'react';
import styles from './index.module.css';
import { FaPlane } from 'react-icons/fa'; // Import vector icon

const Hero = () => {
  return (
    <section className={styles.landing}>
      {/* Loved by Founders Section */}
      <div className={styles.topSection}>
        <div className={styles.avatars}>
          <img src="/fame1.png" alt="Avatars" className={styles.avatarImages} />
        </div>
      </div>

      {/* Main Headline */}
      <div className={styles.headline}>
        Results that drive higher <br />
        <span className={styles.bold}>CONVERSIONS</span>, boost <span className={styles.bold}>REVENUE</span>.
      </div>

      {/* Subtext */}
      <div className={styles.subtext}>
        Design, copy, and development engineered to turn browsers into <br />
        buyers and drive sales on autopilot.
      </div>

      {/* Call to Action Button */}
      <div className={styles.ctaContainer}>
        <button className={styles.ctaButton}>
          <span className={styles.ctaText}>BOOK A CALL</span>
          <FaPlane className={styles.ctaIcon} /> 
        </button>
      </div>
      <p className={styles.ctaSubtext}>It's Free. No subscription required.</p>

      {/* Client Logos */}
      <div className={styles.clients}>
        <div className={styles.rectangleBackground}> 
          <img src="/Rectangle.png" alt="Rectangle" className={styles.rectangle} />
          <img src="/fame3.png" alt="Fame3 Logo" className={styles.clientLogo} />
        </div>
      </div>

      {/* Recent Work Section */}
      <div className={styles.recentWork}>
      <img src="/Recent work.png" alt="riso" className={styles.riso} />
      <img src="/Frame4.png" alt="Arrow" className={styles.arrow} />
      </div>
    </section>
  );
};

export default Hero;
