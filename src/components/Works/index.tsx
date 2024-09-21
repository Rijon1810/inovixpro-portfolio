'use client';

import React, { useState } from 'react';
import styles from './index.module.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Slider from 'react-slick';

const workList = [
  { imageUrl: '/cover_1.png' },
  { imageUrl: '/cover_2.png' },
  { imageUrl: '/cover_3.png' },
];

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div className={styles.arrowRight} onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={styles.arrowLeft} onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2.7, // Default for larger screens
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />, // Using custom right arrow
    prevArrow: <PrevArrow />, // Using custom left arrow
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2, // Show 2 items on tablets
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Mobile landscape
        settings: {
          slidesToShow: 1.5, // Show 1.5 items on mobile landscape
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile portrait
        settings: {
          slidesToShow: 1, // Show 1 item on small mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.wrapper}>
      {/* Carousel */}
      <div style={{ width: '100%' }}>
        <Slider {...settings}>
          {workList.map((work, index) => (
            <div key={index}>
              <img src={work.imageUrl} alt={`Work Image ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* View All Work Button */}
      <div className={styles.viewAllWorkWrapper}>
        <div className={styles.viewAllWorkButton}>VIEW OUR RECENT WORK</div>
      </div>
    </div>
  );
};

export default Works;
