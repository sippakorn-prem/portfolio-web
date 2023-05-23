import styles from './index.module.scss';
import dynamic from 'next/dynamic';
import { ReactElement, useCallback, useEffect } from 'react';

const Layout = dynamic(import('@/components/Layout'));
const IntroSplashScreen = dynamic(import('@/components/IntroSplashScreen'));
const AboutMe = dynamic(import('@/components/AboutMe'));

export default function Home(): ReactElement {
  const scrollToTop = useCallback(() => {
    scrollTo(0, 0);
    setTimeout(() => {
      document.querySelector('html')?.classList.add('isLoading');
    }, 50);
  }, []);

  useEffect(scrollToTop, []);

  return (
    <Layout>
      <div className={styles.container}>
        <IntroSplashScreen />
        <AboutMe />
      </div>
    </Layout>
  );
}
