import styles from '@/styles/pages/home.module.scss';
import Layout from '@/components/Layout';
import { ReactElement, useEffect } from 'react';
import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Logo from '@/components/Logo';
import { setIntesectionObserver } from '@/utils';

export default function Home(): ReactElement {
  useEffect(() => {
    setIntesectionObserver(styles.show, styles.hidden);
  }, []);

  return (
    <Layout>
      <section className={styles.background}>
        <div className={styles.paragraph}>
          <Logo fill={grey[500]} />
        </div>
        <div className={styles.paragraph}>
          <Typography className={styles.hidden} variant="h2" color={grey[500]} gutterBottom>
            Hi, I'm Sippakorn Suphapinyo.
          </Typography>
        </div>
        <div className={styles.paragraph}>
          <Typography className={styles.hidden} variant="h2" color={grey[500]} gutterBottom>
            You can call me Prem.
          </Typography>
        </div>
        <div className={styles.paragraph}>
          <Typography className={styles.hidden} variant="h2" color={grey[500]} gutterBottom>
            I'm Software Developer.
          </Typography>
        </div>
        <div className={styles.paragraph}>
          <Typography className={styles.hidden} variant="h2" color={grey[500]} gutterBottom>
            Lorem Ipsum is simply dummy
          </Typography>
        </div>
      </section>
    </Layout>
  );
}
