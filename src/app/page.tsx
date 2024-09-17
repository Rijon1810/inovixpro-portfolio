import Hero from '../components/Hero';
import Brand from '@/components/Brand';
import Works from '../components/Works';
import HowItsWorks from '@/components/HowItsWorks';
import BookACall from '@/components/BookACall';
import styles from './page.module.css';
import Testimonials from '@/components/Testomonials';
import Questions from '@/components/Questions';
import Discovery from '@/components/Discovery';
import Footer from '@/components/Footer'
  
export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Works />
      <Brand />
      <HowItsWorks />
      <BookACall />
      <Testimonials />
      <Questions />
      <Discovery />
      <Footer />
     </main>
  );
}
