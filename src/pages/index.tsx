import IntroSplashScreen from '@/components/IntroSplashScreen';
import styles from './index.module.scss';
import Layout from '@/components/Layout';
import AboutMe from '@/components/AboutMe';
import { ReactElement, useEffect } from 'react';
import { Typography } from '@mui/material';

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
          <Typography variant="h1">Skills</Typography>
        </div>
        <div className={styles.wrapper}>
          <Typography variant="h1">Experences</Typography>
        </div>
        <div className={styles.wrapper}>
          <Typography variant="h1">Contact</Typography>
        </div>
      </div>
    </Layout>
  );
}
