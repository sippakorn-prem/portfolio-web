import styles from './TextScrollAnimation.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useIntersection, useScrollPosition } from '@/utils/hooks';
import { ReactElement, useCallback, useMemo } from 'react';

interface Props {
  children: ReactElement | ReactElement[];
}

export default function TextScrollAnimation(props: Props): ReactElement {
  const { children } = props;
  const uuid = useMemo(() => {
    const id = uuidv4();
    return `uuid${id.replace(/\-/g, '_')}`;
  }, []);
  const isPortrait = useMemo(
    () => window.innerHeight > window.innerWidth,
    [window.innerHeight, window.innerWidth]
  );
  const isXs = useMemo(
    () => (isPortrait ? window.innerWidth : window.innerHeight) <= 600,
    [window.innerHeight, window.innerWidth]
  );
  const speed = isXs ? 0.8 : 0.35;
  const isIntersecting = useIntersection(`#${uuid}`);

  const handleBackdropAnimation = useCallback((): void => {
    const offsetTop = document.querySelector<HTMLElement>(`#${uuid}`)?.offsetTop || 0;
    const scrollValue = (window.scrollY - offsetTop) * speed;
    const backDrop = document.querySelector<HTMLElement>(`#${uuid} .${styles.backDrop}`);
    const child = document.querySelector<HTMLElement>(`#${uuid} #${styles.children}`);
    if (backDrop && child) {
      const { style: backdropStyle } = backDrop;
      const { style: childStyle } = child;

      if (scrollValue >= 0) {
        if (scrollValue <= 100) {
          backDrop.classList.remove(styles.reverse);
          backdropStyle.width = `${scrollValue}%`;
        } else {
          backDrop.classList.add(styles.reverse);
          const reverseScrollValue = scrollValue - 100;
          if (reverseScrollValue >= 100) {
            backdropStyle.width = '0';
          } else {
            backdropStyle.width = `${100 - reverseScrollValue}%`;
            childStyle.opacity = `${reverseScrollValue / 100}`;
          }
        }
      } else {
        backDrop.classList.remove(styles.reverse);
        backdropStyle.width = '0';
        childStyle.opacity = '0';
      }
    }
  }, []);

  useScrollPosition((): void => {
    if (isIntersecting) handleBackdropAnimation();
  }, [isIntersecting]);

  return (
    <div id={uuid} className={styles.wrapper}>
      <div className={styles.backDrop} />
      <div id={styles.children}>{children}</div>
    </div>
  );
}
