import React from 'react';
import styles from './index.module.css';

const HowItsWorks: React.FC = () => {
  return (
    <div className={styles.howItsWorksWrapper}>
      <div className={styles.howItsWorksHeader}>How It Works</div>
      <div className={styles.howItsWorksColumns}>
        <div className={styles.leftColumn}>
          <div className={styles.leftColumnContent}>
            <div className={styles.leftColumnHeading}>Market<br />Research</div>
            <div className={styles.leftColumnText}>
              Recognized in the industry as the best podcast agency of 2022, fastest-growing podcast company, and the number one LinkedIn Marketing Agency
            </div>
          </div>
        </div>
        <div className={styles.centerColumn}>
          <div className={styles.sectionHeading}>Design & Develop</div>
          <div className={styles.sectionText}>
            Recognized in the <br />industry as the best podcast agency....
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.rightColumnContent}>
            <div className={styles.rightColumnHeading}>Test & Launch</div>
            <div className={styles.rightColumnText}>
              Recognized in the <br />industry as the best podcast agency...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItsWorks;
