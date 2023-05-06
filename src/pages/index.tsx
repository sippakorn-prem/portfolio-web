import styles from './index.module.scss';
import Layout from '@/components/Layout';
import { ReactElement, useEffect } from 'react';
import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { setIntesectionObserver } from '@/utils';

export default function Home(): ReactElement {
  useEffect(() => {
    // setIntesectionObserver(styles.show, styles.hidden);
  }, []);

  return (
    <Layout>
      <div className={styles.background}>
        <Typography className={styles.paragraph} variant="h1">
          Sippakorn Suphapinyo
        </Typography>
        <Typography className={styles.paragraph} variant="h1">
          Sippakorn Suphapinyo
        </Typography>
        <h1 className={styles.paragraph}>Sippakorn Suphapinyo</h1>
      </div>
    </Layout>
  );
}
