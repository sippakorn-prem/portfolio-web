import styles from './AboutMe.module.scss';
import { useScrollPosition } from '@/utils/hooks';
import { Container, Typography } from '@mui/material';
import { ReactElement } from 'react';

export default function AboutMe(): ReactElement {
  useScrollPosition(() => {
    const title = document.querySelector<HTMLElement>(`.${styles.title}`);
    if (title?.style) {
      const isPortrait = window.innerHeight > window.innerWidth;
      const scrollValue = window.scrollY * 0.2;
      const translateValue = isPortrait ? `${scrollValue}px` : `${scrollValue}px, 0`;
      title.style.transform = `translate(${translateValue})`;
    }
  });

  return (
    <div className={styles.wrapper}>
      <Typography className={styles.title} variant="h1">
        About me
      </Typography>
      <Container>
        <Typography variant="h3" align="center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
      </Container>
    </div>
  );
}
