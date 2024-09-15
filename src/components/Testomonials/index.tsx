import React from 'react';
import styles from './index.module.css';

const data = [
  {
    image: '/Frame 1000006187.png',
    name: 'Zahid',
    designation: 'CEO - Ram Enterprise',
    description:
    'Amazing products, very satisfied with the results and customer service. Will definitely be returning for more! Amazing products, very satisfied with the results and customer service. Will definitely be returning for more!',
    stars: '/stars.png', // Add the stars image for rating
  },
  {
    image: '/Frame 1000006187.png',
    name: 'John Doe',
    designation: 'Manager',
    description: 'Excellent service! Highly recommended.',
    stars: '/stars.png',
  },
  {
    image: '/Frame 1000006187.png',
    name: 'Jane Smith',
    designation: 'CTO',
    description:
      'Amazing products, very satisfied with the results and customer service. Will definitely be returning for more!',
    stars: '/stars.png',
  },
  {
    image: '/Frame 1000006187.png',
    name: 'Zahid',
    designation: 'CEO - Ram Enterprise',
    description:
    'Amazing products, very satisfied with the results and customer service. Will definitely be returning for more! Amazing products, very satisfied with the results and customer service. Will definitely be returning for more!',

    stars: '/stars.png', // Add the stars image for rating
  },
  {
    image: '/Frame 1000006187.png',
    name: 'John Doe',
    designation: 'Manager',
    description: 'Excellent service! Highly recommended.',
    stars: '/stars.png',
  },
  {
    image: '/Frame 1000006187.png',
    name: 'Jane Smith',
    designation: 'CTO',
    description:
      'Amazing products, very satisfied with the results and customer service. Will definitely be returning for more!',
    stars: '/stars.png',
  },
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialsWrapper}>
      <div className={styles.secondContainer}>
        <div className={styles.testimonialText}>What Our Clients Say</div>
        <div className={styles.lovedByText}>LOVED BY BUSINESSES WORLDWIDE</div>
      </div>

      <div className={styles.gridContainer}>
        {data.map((profile, index) => (
          <div className={styles.frameChild} key={index}>
            <div className={styles.stars}>
              <img src={profile.stars} alt="Stars" />
            </div>
            <div className={styles.comment}>{profile.description}</div>

            <div className={styles.commentWrapper}>
              <div className={styles.imageWrapper}>
                <img src={profile.image} alt={profile.name} />
              </div>
              <div className={styles.profileInfo}>
                <div className={styles.profileDetails}>
                  <span>{profile.name}</span>
                  <span className={styles.designation}>{profile.designation}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
