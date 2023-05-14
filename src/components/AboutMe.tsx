import styles from './AboutMe.module.scss';
import dynamic from 'next/dynamic';
import { useScrollPosition } from '@/utils/hooks';
import { ReactElement } from 'react';
import Link from 'next/link';

const Container = dynamic(import('@mui/material/Container'));
const Typography = dynamic(import('@mui/material/Typography'));
const TextScrollAnimation = dynamic(() => import('@/components/TextScrollAnimation'), {
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
        <TextScrollAnimation>
          <Typography variant="h4" gutterBottom>
            Hi there, I'm <span className={styles.fontBold}>Prem</span>.
          </Typography>
        </TextScrollAnimation>
        <TextScrollAnimation>
          <Typography variant="h4" gutterBottom>
            <span>I'm Software Developer who live in </span>
            <Link
              className={styles.link}
              href="https://goo.gl/maps/pvwS3od7g6ZFeEQN8"
              target="_blank"
            >
              Bangkok, Thailand.
            </Link>
          </Typography>
        </TextScrollAnimation>
        <TextScrollAnimation>
          <Typography variant="h4" style={{ marginTop: '60vh' }} gutterBottom>
            "A user interface is like a joke.
          </Typography>
        </TextScrollAnimation>
        <TextScrollAnimation>
          <Typography variant="h4" gutterBottom>
            If you have to explain it, it’s not that good."
          </Typography>
        </TextScrollAnimation>
      </Container>
    </div>
  );
}
