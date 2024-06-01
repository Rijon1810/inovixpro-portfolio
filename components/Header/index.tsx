import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';

const navList = [
  {
    title: 'Home',
    url: '/home',
  },
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'About us',
    url: '/about-us',
  },
];

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Image height={28} width={124} src="/logo.svg" alt="logo" />
      </div>
      <div className={styles.navList}>
        {navList.map((navItem) => (
          <div className={styles.navItem} key={navItem.title}>
            {navItem.title}
          </div>
        ))}
      </div>
      <div className={styles.contact}>Contact</div>
    </div>
  );
};

export default Header;
