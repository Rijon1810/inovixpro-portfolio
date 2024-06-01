import React from 'react';
import Image from 'next/image';
import styles from './index.module.css';

const workList = [
  {
    title: 'Design',
    imageUrl: '/design.png',
  },
  {
    title: 'Website',
    imageUrl: '/website.png',
  },
  {
    title: 'Application',
    imageUrl: '/application.png',
  },
];

const Works = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Work</div>
        <div className={styles.square} />
      </div>
      <div className={styles.workList}>
        {workList.map((work) => (
          <div className={styles.work} key={work.title}>
            <Image
              height={356}
              width={388}
              alt={work.title}
              src={work.imageUrl}
            />
            <div className={styles.workTitle}>{work.title}</div>
          </div>
        ))}
      </div>
      <div className={styles.viewAllWorkWrapper}>
        <div className={styles.viewAllWorkButton}>View all work</div>
      </div>
    </div>
  );
};

export default Works;
