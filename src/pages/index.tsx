import MyComponent from '@/components/MyComponent';
import styles from '@/styles/Home.module.scss';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <>
      <span className={styles.colorPrimary}>Sippakorn Prem</span>
      <MyComponent />
    </>
  );
}
