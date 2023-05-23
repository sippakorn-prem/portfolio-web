import { RootState } from '@/store/store.interface';
import styles from './AboutMe.module.scss';
import dynamic from 'next/dynamic';
import { ReactElement, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const Link = dynamic(import('next/link'));
const Container = dynamic(import('@mui/material/Container'));
const Typography = dynamic(import('@mui/material/Typography'));
const TextAnimation = dynamic(() => import('@/components/TextAnimation'), {
  ssr: false,
});

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function AboutMe(): ReactElement {
  const state = useSelector((state: RootState) => state);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const onEntered = state.scrollY >= state.innerHeight / 3;

  const handleIntersection = useCallback((entry: IntersectionObserverEntry | null) => {
    setIsInView(Boolean(entry?.isIntersecting));
  }, []);

  return (
    <motion.div className={styles.wrapper}>
      <AnimatePresence>
        {onEntered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.frame}
          >
            <TextAnimation style={{ marginLeft: 0 }}>
              <Typography className={styles.fontBold} variant="h2">
                About me
              </Typography>
            </TextAnimation>
          </motion.div>
        )}
      </AnimatePresence>
      <Container>
        <div className={styles.contentWrapper}>
          <motion.div
            style={{ marginBottom: 24 }}
            initial={false}
            animate={
              isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            onViewportEnter={handleIntersection}
            onViewportLeave={handleIntersection}
          >
            <Image
              className={styles.avatar}
              src="/assets/images/me.jpeg"
              alt="Me, Sippakorn Suphapinyo, Prem"
              width={400}
              height={400}
              onLoad={(): void => setIsLoaded(true)}
              priority
            />
          </motion.div>
          <TextAnimation>
            <Typography variant="h4" align="center">
              Hi there, I'm Sippakorn Suphapinyo.
            </Typography>
          </TextAnimation>
          <TextAnimation style={{ marginTop: 4 }}>
            <Typography variant="h4" align="center">
              My nickname is <span className={styles.fontBold}>Prem</span>.
            </Typography>
          </TextAnimation>
        </div>
        <div className={styles.contentWrapper}>
          <TextAnimation>
            <Typography variant="h4" align="center">
              <span>I'm Software Developer who live in </span>
              <Link
                className={styles.link}
                href="https://goo.gl/maps/pvwS3od7g6ZFeEQN8"
                target="_blank"
              >
                Bangkok, Thailand.
              </Link>
            </Typography>
          </TextAnimation>
        </div>
        <div className={styles.contentWrapper}>
          <TextAnimation>
            <Typography variant="h4" align="center">
              <span>Nice to meet you.</span>
            </Typography>
          </TextAnimation>
        </div>
      </Container>
    </motion.div>
  );
}
