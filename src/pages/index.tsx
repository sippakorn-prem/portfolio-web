import styles from './index.module.scss';
import Layout from '@/components/Layout';
import { ReactElement, useEffect } from 'react';
import { Typography } from '@mui/material';
import anime from 'animejs';

export default function Home(): ReactElement {
  useEffect(() => {
    const wrapper = `.${styles.background} .${styles.paragraphWrapper}`;
    const line = `${wrapper} .${styles.name} .${styles.line}`;
    const name = `${wrapper} .${styles.name} span`;
    const position = `${wrapper} .${styles.position} span`;
    anime
      .timeline({ delay: 1000 })
      .add({
        targets: line,
        scaleY: [0, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 700,
      })
      .add({
        targets: line,
        translateX: [
          -10,
          (document?.querySelector(`${wrapper} .${styles.name}`)?.getBoundingClientRect()?.width ??
            0) + 10,
        ],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 100,
      })
      .add(
        {
          targets: name,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 600,
          delay: (el, i) => 20 * (i + 1),
        },
        '-=775'
      )
      .add(
        {
          targets: line,
          scaleY: [1, 0],
          opacity: [1, 0],
          easing: 'easeOutExpo',
          duration: 700,
        },
        '-=300'
      )
      .add(
        {
          targets: position,
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1200,
          delay: (el, i) => 500 + 30 * i,
        },
        '-=450'
      );
  }, []);

  return (
    <Layout>
      <div className={styles.background}>
        <div className={styles.paragraphWrapper}>
          <Typography className={styles.name} variant="h2">
            <div className={styles.line}>|</div>
            {'Sippakorn Suphapinyo'.split('').map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </Typography>
          <Typography className={styles.position} variant="h4">
            {'Software Developer'.split('').map((letter, i) => (
              <span key={i}>{letter}</span>
            ))}
          </Typography>
        </div>
      </div>
    </Layout>
  );
}
