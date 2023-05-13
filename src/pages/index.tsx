import styles from './index.module.scss';
import dynamic from 'next/dynamic';
import { ReactElement, useEffect } from 'react';

const Layout = dynamic(import('@/components/Layout'));
const IntroSplashScreen = dynamic(import('@/components/IntroSplashScreen'));
const AboutMe = dynamic(import('@/components/AboutMe'));
const Typography = dynamic(import('@mui/material/Typography'));
const TextAnimation = dynamic(import('@/components/TextAnimation'), {
  ssr: false,
});

export default function Home(): ReactElement {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <IntroSplashScreen />
        <AboutMe />
        <div className={styles.wrapper}>
          <TextAnimation>
            <Typography variant="h1">Skills</Typography>
          </TextAnimation>
        </div>
        <div className={styles.wrapper}>
          <TextAnimation>
            <Typography variant="h1">Contact</Typography>
          </TextAnimation>
        </div>
      </div>
    </Layout>
  );
}
