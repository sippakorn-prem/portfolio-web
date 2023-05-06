import styles from './Header.module.scss';
import Logo from './Logo';
import { ReactElement } from 'react';
import { brown } from '@mui/material/colors';

export default function Header(): ReactElement {
  return (
    <div className={styles.header}>
      {/* <div className={styles.logo}>
        <Logo fill={brown[200]} />
      </div> */}
    </div>
  );
}
