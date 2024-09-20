// src/components/BookACall/index.tsx
import React from 'react';
import styles from './index.module.css';

interface BookACallProps {
  onBookACallClick: () => void;
}

const BookACall: React.FC<BookACallProps> = ({ onBookACallClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.serviceColumn}>
        <p className={styles.serviceText}>UX/UI</p>
        <p className={styles.serviceText}>Competitor Analysis</p>
        <p className={styles.serviceText}>Branding</p>
        <p className={styles.serviceText}>Copywriting</p>
        <p className={styles.serviceText}>Brand Audit</p>
        <p className={styles.serviceText}>Email Design</p>
        <p className={styles.serviceText}>Social Media Posts</p>
      </div>

      {/* Center Content */}
      <div className={styles.centerColumn}>
        <h1 className={styles.title}>
          You name it, we get it to you in no time!
        </h1>
        <button
          className={styles.bookCallButton}
          onClick={onBookACallClick}
        >
          <span className={styles.bookCallButtonText}>Book a Call</span>
        </button>
      </div>

      {/* Right Service Column */}
      <div
        className={styles.serviceColumn}
        style={{ direction: 'rtl', textAlign: 'right' }}
      >
        <p className={styles.serviceText}>Web Application</p>
        <p className={styles.serviceText}>SAAS</p>
        <p className={styles.serviceText}>Landing Page</p>
        <p className={styles.serviceText}>Full Stack Development</p>
        <p className={styles.serviceText}>iOS & Android Apps</p>
        <p className={styles.serviceText}>Chat Bots & Automation</p>
        <p className={styles.serviceText}>CMS</p>
      </div>
    </div>
  );
};

export default BookACall;
