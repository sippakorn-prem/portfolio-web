import dynamic from 'next/dynamic';
import { ReactElement, useEffect } from 'react';
import styles from './index.module.scss';

const Layout = dynamic(import('@/components/Layout'));
const IntroSplashScreen = dynamic(import('@/components/IntroSplashScreen'));
const AboutMe = dynamic(import('@/components/AboutMe'));

export default function Home(): ReactElement {
	useEffect(() => {
		scrollTo(0, 0);
	}, []);

	return (
		<Layout>
			<div className={styles.container}>
				<IntroSplashScreen />
				<AboutMe />
			</div>
		</Layout>
	);
}
