import IntroSplashScreen from '@/components/IntroSplashScreen';
import styles from './index.module.scss';
import Layout from '@/components/Layout';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <Layout>
      <div className={styles.container}>
        <IntroSplashScreen
          onComplete={() => {
            console.log('  DONEEEE');
          }}
        />
        <div className={styles.wrapper}>
          <h1>Test</h1>
        </div>
      </div>
    </Layout>
  );
}
