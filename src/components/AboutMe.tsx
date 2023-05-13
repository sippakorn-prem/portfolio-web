import styles from './AboutMe.module.scss';
import dynamic from 'next/dynamic';
import { useScrollPosition } from '@/utils/hooks';
import { Container, Typography } from '@mui/material';
import { ReactElement } from 'react';

const TextAnimation = dynamic(() => import('@/components/TextAnimation'), {
  ssr: false,
});

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
        <TextAnimation>
          <Typography variant="h3">
            Hi there, I'm <span className={styles.fontBold}>Prem</span>.
          </Typography>
        </TextAnimation>
      </Container>
    </div>
  );
}
