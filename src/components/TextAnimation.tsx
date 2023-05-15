import styles from './TextAnimation.module.scss';
import anime, { AnimeInstance } from 'animejs';
import { v4 as uuidv4 } from 'uuid';
import { ReactElement, useCallback, useEffect, useMemo, useRef } from 'react';
import { setIntesectionObserver } from '@/utils';

interface Props {
  children: ReactElement | ReactElement[];
  trigger?: boolean;
}

export default function TextAnimation(props: Props): ReactElement {
  const { children, trigger } = props;
  const uuid = useMemo(() => {
    const id = uuidv4();
    return `uuid${id.replace(/\-/g, '_')}`;
  }, []);
  const animation = useRef<AnimeInstance | null>(null);

  const initAnimation = useCallback(async () => {
    const backDropElement = document?.querySelector<HTMLElement>(`#${uuid} .${styles.backDrop}`);
    const childrenElement = document?.querySelector<HTMLElement>(`#${uuid} #${styles.children}`);
    animation.current = anime({
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

  useEffect(() => {
    if (trigger) initAnimation();
    else resetAnimation();
  }, [trigger]);

  useEffect(() => {
    if (!trigger) {
      setIntesectionObserver({
        observeSelector: `#${uuid}`,
        callback: (entry) => {
          if (entry.isIntersecting) initAnimation();
          else resetAnimation();
        },
      });
    }
  }, []);

  return (
    <div id={uuid} className={styles.wrapper}>
      <div className={styles.backDrop} />
      <div id={styles.children}>{children}</div>
    </div>
  );
}
