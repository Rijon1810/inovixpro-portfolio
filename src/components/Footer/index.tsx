import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa'; // Import icons
import styles from './index.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerGroup}>
        <div className={styles.leftSection}>
          <h2 className={styles.companyName}>Inovixpro</h2>
          <p className={styles.companyDesc}>
            Our consultancy stays in sync with your strategy. Scelerisque dignissim in leo at magna donec mi metus ipsum luctus nam elit sociis luctus et aliquam libero.
          </p>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h3>Sitemap</h3>
              <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Resources</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <h3>Who we are</h3>
              <ul>
                <li>Our Team</li>
                <li>FAQ</li>
                <li>Testimonials</li>
              </ul>
            </div>
          </div>
          <div className={styles.make}>
          <div className={styles.socialMedia}>
            <a href="#" className={styles.socialIcon}><FaInstagram /></a>
            <a href="#" className={styles.socialIcon}><FaTwitter /></a>
            <a href="#" className={styles.socialIcon}><FaYoutube /></a>
            <a href="#" className={styles.socialIcon}><FaFacebook /></a>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.phone}>
              <p>Call Us</p>
              <p>1 800 557 1445</p>
            </div>
            <div className={styles.email}>
              <p>Email</p>
              <p>info@yourcompany.com</p>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
