import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import Solutions from '../components/Solutions';
import Works from '../components/Works';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Solutions />
      <Works />
      <Reviews />
      <Footer />
    </main>
  );
}
