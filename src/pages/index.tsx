import Image from 'next/image';
import { ReactElement } from 'react';
import Layout from '@/components/Layout';
import styles from '@/styles/home.module.scss';

export default function Home(): ReactElement {
  return (
    <Layout>
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
