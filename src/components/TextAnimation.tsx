import styles from './TextAnimation.module.scss';
import anime, { AnimeInstance } from 'animejs';
import { v4 as uuidv4 } from 'uuid';
import { CSSProperties, ReactElement, useCallback, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactElement | ReactElement[];
  trigger?: boolean;
  style?: CSSProperties;
}

export default function TextAnimation(props: Props): ReactElement {
  const { children, trigger, style } = props;
  const uuid = useMemo(() => {
    const id = uuidv4();
    return `uuid${id.replace(/\-/g, '_')}`;
  }, []);
  const animation = useRef<AnimeInstance | null>(null);

  const initAnimation = useCallback(async () => {
    const backDropElement = document?.querySelector<HTMLElement>(`#${uuid} .${styles.backDrop}`);
    const childrenElement = document?.querySelector<HTMLElement>(`#${uuid} #${styles.children}`);
    animation.current = anime
      .timeline({})
      .add({
        targets: backDropElement,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 500,
      })
      .add({
        targets: backDropElement,
        width: '100%',
        easing: 'easeInOutQuart',
        duration: 500,
      });
    await animation.current.finished;
    backDropElement?.classList.add(styles.reverse);
    animation.current = anime
      .timeline({})
      .add({
        targets: backDropElement,
        width: '0%',
        easing: 'easeInOutExpo',
        duration: 500,
      })
      .add(
        {
          targets: childrenElement,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 500,
        },
        '-=500'
      );
  }, []);

  const resetAnimation = useCallback((): void => {
    const backDropElement = document?.querySelector<HTMLElement>(`#${uuid} .${styles.backDrop}`);
    const childrenElement = document?.querySelector<HTMLElement>(`#${uuid} #${styles.children}`);
    backDropElement?.classList?.remove?.(styles.reverse);
    if (backDropElement?.style) backDropElement.style.width = '0%';
    if (childrenElement?.style) childrenElement.style.opacity = '0';
  }, []);

  function handleIntersection(entry: IntersectionObserverEntry | null): void {
    if (!trigger) {
      if (entry?.isIntersecting) initAnimation();
      else resetAnimation();
    }
  }

  useEffect(() => {
    if (trigger) initAnimation();
    else resetAnimation();
  }, [trigger]);

  return (
    <motion.div
      id={uuid}
      className={styles.wrapper}
      style={style}
      onViewportEnter={handleIntersection}
      onViewportLeave={handleIntersection}
    >
      <div className={styles.backDrop} />
      <div id={styles.children}>{children}</div>
    </motion.div>
  );
}
