import { RootState } from '@/store/store.interface';
import styles from './AboutMe.module.scss';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

const Link = dynamic(import('next/link'));
const Container = dynamic(import('@mui/material/Container'));
const Typography = dynamic(import('@mui/material/Typography'));
const TextAnimation = dynamic(() => import('@/components/TextAnimation'), {
  ssr: false,
});

export default function AboutMe(): ReactElement {
  const state = useSelector((state: RootState) => state);
  const onEntered = state.scrollY >= state.innerHeight / 3;

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
          <motion.img
            className={styles.avatar}
            src="/assets/images/me.jpeg"
            alt="Me, Sippakorn Suphapinyo, Prem"
            width={400}
            height={400}
            style={{ marginBottom: 24 }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '20px 20px 40px #cbc8c6, -20px -20px 40px #ffffff',
            }}
            whileTap={{
              scale: 1.5,
            }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: 'spring',
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          />
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
              <span>I'm Javascript Enjoyer.</span>
            </Typography>
          </TextAnimation>
        </div>
      </Container>
    </motion.div>
  );
}
