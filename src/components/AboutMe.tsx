import { RootState } from '@/store/store.interface';
import dynamic from 'next/dynamic';
import { ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './AboutMe.module.scss';

const Link = dynamic(import('next/link'));
const Container = dynamic(import('@mui/material/Container'));
const Typography = dynamic(import('@mui/material/Typography'));
const TextAnimation = dynamic(() => import('@/components/TextAnimation'), {
	ssr: false,
});
const TextScrollAnimation = dynamic(() => import('@/components/TextScrollAnimation'), {
	ssr: false,
});

export default function AboutMe(): ReactElement {
	const state = useSelector((state: RootState) => state);

	useEffect(() => {
		const frame = document.querySelector<HTMLElement>(`.${styles.frame}`);
		const fixedTitle = document.querySelector<HTMLElement>(`.${styles.fixedTitle}`);
		const initFrame = state.scrollY >= innerHeight / 2;
		frame?.classList[initFrame ? 'add' : 'remove'](styles.appear);
		fixedTitle?.classList[initFrame ? 'add' : 'remove'](styles.appear);
	}, [state.scrollY]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.frame}>
				<TextAnimation trigger={state.scrollY >= 500}>
					<Typography className={styles.fontBold} variant="h2">
						About me
					</Typography>
				</TextAnimation>
			</div>
			<Container>
				<div style={{ height: '30vh' }} />
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
			<div style={{ height: '300vh' }} />
		</div>
	);
}
