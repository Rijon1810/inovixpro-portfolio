'use client';
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open', !menuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close the menu after clicking on mobile
    document.body.classList.remove('menu-open');
  };

  useEffect(() => {
    const handleKeyDown = (event: { key: string; }) => {
      if (event.key.toLowerCase() === 'c') {
        const bookACallSection = document.getElementById('book-a-call');
        if (bookACallSection) {
          bookACallSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
          <a 
            href="#works" 
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('works');
            }}
          >
            WORKS
          </a>
          <a 
            href="#how-it-works" 
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('how-it-works');
            }}
          >
            HOW IT WORKS
          </a>
          <a 
            href="#faq" 
            className={styles.navItem}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('faq');
            }}
          >
            FAQ
          </a>
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