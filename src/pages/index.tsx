import BackgroundAudio from '@/components/BackgroundAudio';
import MyComponent from '@/components/MyComponent';
import Image from 'next/image';
import { ReactElement } from 'react';
import styles from '@/styles/Home.module.scss';
import Layout from '@/components/Layout';

export default function Home(): ReactElement {
  return (
    <Layout>
      <div className={styles.background}>
        <div className={styles.backdrop} />
      </div>
      <Image
        className={styles.logo}
        alt="Sippakorn.page Logo"
        src="logo.svg"
        width={20}
        height={20}
        priority
      />
    </Layout>
  );
}
