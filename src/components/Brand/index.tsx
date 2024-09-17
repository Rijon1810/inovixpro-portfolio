import React from 'react';
import styles from './index.module.css';

const Brand = () => {
    const imageSrc = '/Rectangle 3698.png';
    const arrowIconSrc = '/Group 56.png';

    return (
        <section className={styles.section}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>How we can help</h1>
                <p className={styles.subtitle}>
                    We implement thoughtful brand and product experiences that make our <br/>clients look like they’re $1B organizations.
                </p>
            </div>

            <div className={styles.imageTextContainer}>
                <div className={styles.imageDiv}>
                    <img src={imageSrc} alt="Image Description" className={styles.image} />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.contentSection}>
                        <p style={{ marginBottom: '-48px' }}>Best solutions</p>
                        <h3 className={styles.brandingTitle}>Branding</h3>
                        <p className={styles.sectionTextX}>
                            Scelerisque dignissim in leo at magna donec mi metus ipsum luctus nam elit sociis luctus et aliquam libero.
                        </p>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={styles.contentSection}>
                        <h2 className={styles.sectionTitle}>Websites</h2>
                        <p className={styles.sectionText}>
                            Scelerisque dignissim in leo at magna donec mi metus ipsum luctus<br/> nam elit sociis luctus et aliquam libero.
                            <img src={arrowIconSrc} alt="Arrow Icon" className={styles.icon} />
                        </p>
                    </div>

                    <div className={`${styles.separator} ${styles.thinner}`}></div>

                    <div className={styles.contentSection}>
                        <h2 className={styles.sectionTitle}>Apps</h2>
                        <p className={styles.sectionText}>
                            Scelerisque dignissim in leo at magna donec mi metus ipsum luctus <br/>nam elit sociis luctus et aliquam libero.
                            <img src={arrowIconSrc} alt="Arrow Icon" className={styles.icon} />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand;
