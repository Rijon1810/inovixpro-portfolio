'use client';
import React, { useState } from 'react';
import styles from './index.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open', !menuOpen);
  };

  return (
    <>
      {/* Add backdrop when menu is open */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
      ></div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoText}>Inovixpro</span>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ''}`}>
          <a href="#" className={styles.navItem}>HOW IT WORKS</a>
          <a href="#" className={styles.navItem}>PRICING</a>
          <a href="#" className={styles.navItem}>WORK</a>
          <a href="#" className={styles.navItem}>FAQ</a>
        </nav>

        <div className={styles.rightSide}>
          <div className={styles.callButton}>
            <a href="#" className={styles.press}>PRESS</a>
            <span className={styles.callIcon}>C</span>
            <span className={styles.callText}>TO BOOK A CALL</span>
          </div>
          <div
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
          >
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
