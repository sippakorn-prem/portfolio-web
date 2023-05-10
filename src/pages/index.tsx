import IntroSplashScreen from '@/components/IntroSplashScreen';
import styles from './index.module.scss';
import Layout from '@/components/Layout';
import { ReactElement, useEffect } from 'react';
import { setIntesectionObserver } from '@/utils';
import { Typography } from '@mui/material';

export default function Home(): ReactElement {
  function onDoneSplashScreen(): void {
    document.querySelector('html')?.classList.remove('isLoading');
    document
      .querySelectorAll(`.${styles.wrapper}`)
      ?.forEach((el: Element) => el?.classList.add(styles.snap));
    setTimeout(() => {
      scrollTo(0, window.innerHeight);
    }, 1000);
  }

  function initEventListener(): void {
    window.addEventListener('mousemove', (event: MouseEvent) => {
      const nameEl = document.querySelector<HTMLElement>(`.${styles.wrapper} h1`);
      // const positionEl = document.querySelector<HTMLElement>(`.${styles.position}`);
      const xValue = window.innerWidth / 2 - event.clientX;
      const yValue = window.innerHeight / 2 - event.clientY;
      setTransform(nameEl, xValue, yValue);
      // setTransform(positionEl, xValue, yValue);
    });
  }

  function setTransform(el: HTMLElement | null, xValue: number, yValue: number): void {
    if (el?.style) {
      el.style.transform = `${getTranslateX(el, xValue)} ${getTranslateY(el, yValue)}`;
    }
  }

  function getTranslateX(el: HTMLElement | null, value: number): string {
    const speed = parseFloat(el?.dataset?.speedX || '1');
    return `translateX(${value * speed}px)`;
  }

  function getTranslateY(el: HTMLElement, value: number): string {
    const speed = parseFloat(el?.dataset?.speedY || '1');
    return `translateY(${value * speed}px)`;
  }

  useEffect(() => {
    scrollTo(0, 0);
    setIntesectionObserver({
      observeSelector: `.${styles.wrapper} .test`,
      callback: () => {
        console.log('123123 123 123 ');
      },
    });
    initEventListener();
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <IntroSplashScreen onComplete={onDoneSplashScreen} />
        <div className={styles.wrapper}>
          <Typography variant="h1" data-speed-x="0.03" data-speed-y="0.03">
            About me
          </Typography>
        </div>
        <div className={styles.wrapper}>
          <Typography variant="h1">Experence</Typography>
        </div>
        <div className={styles.wrapper}>
          <Typography variant="h1">Skill</Typography>
        </div>
        <div className={styles.wrapper}>
          <Typography variant="h1">Contact</Typography>
        </div>
      </div>
    </Layout>
  );
}
