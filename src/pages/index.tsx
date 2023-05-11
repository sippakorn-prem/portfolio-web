import IntroSplashScreen from '@/components/IntroSplashScreen';
import styles from './index.module.scss';
import Layout from '@/components/Layout';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { setIntesectionObserver } from '@/utils';
import { Typography } from '@mui/material';

export default function Home(): ReactElement {
  const [pageYOffset, setPageYOffset] = useState<number>(0);

  const handleScroll = useCallback((): void => {
    setPageYOffset(window.scrollY);
  }, []);

  useEffect(() => {
    scrollTo(0, 0);
    setIntesectionObserver({ observeSelector: `.${styles.wrapper} .test` });
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <IntroSplashScreen />
        <div className={[styles.wrapper, styles.snap].join(' ')}>
          <Typography variant="h1">About me</Typography>
        </div>
        <div className={styles.wrapper}>
          <Typography variant="h1">Experence</Typography>
        </div>
        <div className={styles.wrapper}>
          <Typography variant="h1">Skill</Typography>
        </div>
        <div className={styles.wrapper}>
          <Typography variant="h1">Contact</Typography>
        </div>
      </div>
    </Layout>
  );
}
