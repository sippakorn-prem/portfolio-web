import IntroSplashScreen from '@/components/IntroSplashScreen';
import styles from './index.module.scss';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import AboutMe from '@/components/AboutMe';
import { ReactElement, useEffect } from 'react';
import { Typography } from '@mui/material';

const TextAnimation = dynamic(() => import('@/components/TextAnimation'), {
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
