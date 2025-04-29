'use client';

import React, { useState } from 'react';
import styles from './index.module.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const workList = [
  { imageUrl: '/Cover (1).png' },
  { imageUrl: '/Cover (2).png' },
  { imageUrl: '/Cover (3).png' },
  { imageUrl: '/Cover (4).png' },
  { imageUrl: '/Cover (5).png' },
  { imageUrl: '/Cover (6).png' },
];

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < workList.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.arrowLeft} onClick={handlePrev}>
        <FaArrowLeft />
      </div>
      <div className={styles.arrowRight} onClick={handleNext}>
        <FaArrowRight />
      </div>

      <div className={styles.square}>
        {workList.slice(currentIndex, currentIndex + 3).map((work) => (
          <div className={styles.imageWrapper} key={work.imageUrl}>
            <img src={work.imageUrl} alt="Work Image" />
          </div>
        ))}
      </div>

      <div className={styles.viewAllWorkWrapper}>
        <div className={styles.viewAllWorkButton}>VIEW OUR RECENT WORK</div>
      </div>
    </div>
  );
};

export default Works;
