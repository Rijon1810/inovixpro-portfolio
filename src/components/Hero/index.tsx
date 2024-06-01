import React from 'react';
import styles from './index.module.css';

const serviceList = [
  'User interface',
  'User experience',
  'SaaS Expert',
  'Web Development',
  'IOS & Android  Development',
];

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topTitle}>Design and Development agency</div>
      <div className={styles.transformTextAndTalk}>
        <div className={styles.transformText}>Transforming</div>
        <div className={styles.letsTalkButton}>
          <div className={styles.letsTalkText}>Lets Talk</div>
          <div className={styles.arrowIconWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
            >
              <path
                d="M37.4547 30.5691L34.2325 30.5615L34.2499 23.1278L18.7351 38.6115L16.4589 36.3307L31.9313 20.8894L24.5885 20.8723L24.596 17.6501L37.4849 17.6802L37.4547 30.5691Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.yourIdeasInto}>your Ideas into</div>
      <div className={styles.bottomTitleWrapper}>
        <div className={styles.subTitle}>
          Customized development solutions that are visually stunning,
          user-friendly, and seamlessly functional
        </div>
        <div className={styles.transformText}>Innovation</div>
      </div>

      <div className={styles.serviceList}>
        {serviceList.map((service) => (
          <div className={styles.service} key={service}>
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
