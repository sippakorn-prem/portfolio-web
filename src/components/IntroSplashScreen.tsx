import styles from './IntroSplashScreen.module.scss';
import anime from 'animejs';
import dynamic from 'next/dynamic';
import { ReactElement, useCallback, useEffect } from 'react';
import { useIsMounted } from '@/utils/hooks';

const Typography = dynamic(import('@mui/material/Typography'));

export default function IntroSplashScreen(): ReactElement {
  const isMounted = useIsMounted();

  const initAnimation = useCallback(async (): Promise<void> => {
    // const wrapper = `.${styles.wrapper}`;
    // const line = `${wrapper} .${styles.nameWrapper} .${styles.line}`;
    // const name = `${wrapper} .${styles.name} span`;
    // const position = `${wrapper} .${styles.position} span`;
    // const nameWidth =
    //   document?.querySelector(`${wrapper} .${styles.name}`)?.getBoundingClientRect()?.width ?? 0;
    // const instance = anime
    //   .timeline({})
    //   .add({
    //     targets: line,
    //     scaleY: [0, 1],
    //     opacity: [0, 1],
    //     easing: 'easeOutExpo',
    //     duration: 700,
    //   })
    //   .add({
    //     targets: line,
    //     translateX: nameWidth + 24,
    //     easing: 'easeOutExpo',
    //     duration: 700,
    //     delay: 100,
    //   })
    //   .add(
    //     {
    //       targets: name,
    //       opacity: [0, 1],
    //       easing: 'easeOutExpo',
    //       duration: 600,
    //       delay: (el, i) => 20 * (i + 1),
    //     },
    //     '-=800'
    //   )
    //   .add(
    //     {
    //       targets: line,
    //       scaleY: [1, 0],
    //       opacity: [1, 0],
    //       easing: 'easeOutExpo',
    //       duration: 700,
    //     },
    //     '-=500'
    //   )
    //   .add({
    //     targets: position,
    //     translateX: [40, 0],
    //     translateZ: 0,
    //     opacity: [0, 1],
    //     easing: 'easeOutExpo',
    //     duration: 1200,
    //     delay: (el, i) => 30 * i,
    //   });
    // await instance.finished;
    document.querySelector('html')?.classList.remove('isLoading');
  }, []);

  useEffect(() => {
    if (isMounted?.current) initAnimation();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.nameWrapper}>
        <div className={styles.line} />
        <Typography className={styles.name} variant="h2" align="center">
          {'Sippakorn Suphapinyo'.split('').map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </Typography>
      </div>
      <Typography className={styles.position} variant="h4" align="center">
        {'Software Developer'.split('').map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </Typography>
    </div>
  );
}
