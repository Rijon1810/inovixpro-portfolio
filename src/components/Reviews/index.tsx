import React from 'react';
import styles from './index.module.css';

const reviewList = [
  {
    title: 'Website Design and Develop',
    description:
      'Inovix Pro did an outstanding job designing and developing our new website. It\'s user-friendly, visually appealing, and has significantly improved our service efficiency. The team was professional, responsive, and understood our needs perfectly. We\'ve received great feedback from our customers about the ease of scheduling and managing their services online. ',
    clientName: 'Jim Toney',
    clientDesignation: 'CEO, omnicleaners',
  },
];

const Reviews = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.reviewSection}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
        >
          <g clip-path="url(#clip0_69_313)">
            <path
              d="M39.3333 49.167L49.1667 49.167C51.7746 49.167 54.2758 48.131 56.1199 46.2869C57.964 44.4428 59 41.9416 59 39.3337L59 29.5003C59 28.1963 58.482 26.9458 57.5599 26.0237C56.6379 25.1017 55.3873 24.5837 54.0833 24.5837L39.5546 24.5837C40.1379 21.1505 41.9159 18.034 44.5744 15.7848C47.233 13.5356 50.601 12.2985 54.0833 12.292C54.7353 12.292 55.3606 12.033 55.8216 11.572C56.2827 11.1109 56.5417 10.4857 56.5417 9.83366C56.5417 9.18167 56.2827 8.55638 55.8216 8.09536C55.3606 7.63433 54.7353 7.37533 54.0833 7.37533C48.8692 7.38119 43.8703 9.45508 40.1834 13.142C36.4964 16.829 34.4225 21.8279 34.4167 27.042L34.4167 44.2503C34.4167 45.5543 34.9347 46.8049 35.8567 47.7269C36.7788 48.649 38.0294 49.167 39.3333 49.167Z"
              fill="#DCEBFD"
            />
            <path
              d="M4.91738 49.167L14.7507 49.167C17.3586 49.167 19.8598 48.131 21.7039 46.2869C23.548 44.4428 24.584 41.9416 24.584 39.3337L24.584 29.5003C24.584 28.1963 24.066 26.9458 23.1439 26.0237C22.2219 25.1017 20.9713 24.5837 19.6673 24.5837L5.13863 24.5837C5.72191 21.1505 7.49991 18.034 10.1585 15.7848C12.817 13.5356 16.185 12.2985 19.6673 12.292C20.3193 12.292 20.9446 12.033 21.4056 11.572C21.8667 11.1109 22.1257 10.4857 22.1257 9.83366C22.1257 9.18167 21.8667 8.55638 21.4056 8.09536C20.9446 7.63433 20.3193 7.37533 19.6673 7.37533C14.4532 7.38119 9.45435 9.45508 5.76742 13.142C2.08048 16.829 0.00658465 21.8279 0.000726727 27.042L0.000725222 44.2503C0.000725108 45.5543 0.51873 46.8049 1.44078 47.7269C2.36283 48.649 3.6134 49.167 4.91738 49.167Z"
              fill="#DCEBFD"
            />
          </g>
          <defs>
            <clipPath id="clip0_69_313">
              <rect
                width="59"
                height="59"
                fill="white"
                transform="translate(59 59) rotate(-180)"
              />
            </clipPath>
          </defs>
        </svg>
        {reviewList.map((review) => (
          <div className={styles.review} key={review.title}>
            <div className={styles.reviewTitle}>{review.title}</div>
            <div className={styles.reviewDescription}>{review.description}</div>
            <div className={styles.clientName}>{review.clientName}</div>
            <div className={styles.clientDesignation}>{review.clientDesignation}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
