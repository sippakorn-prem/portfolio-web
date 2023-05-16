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
        <TextAnimation>
          <Typography className={styles.sentence} variant="h4" align="center">
            Hi there, I'm <span className={styles.fontBold}>Prem</span>.
          </Typography>
        </TextAnimation>
        <TextAnimation>
          <Typography className={styles.sentence} variant="h4" align="center">
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
        <TextAnimation>
          <Typography className={styles.sentence} variant="h4" align="center">
            <span>"A user interface is like a joke.</span>
            <br />
            <span>If you have to explain it, it’s not that good."</span>
          </Typography>
        </TextAnimation>
      </Container>
    </motion.div>
  );
}
