import Layout from '@/components/Layout';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
	return (
		<Layout>
			{/* <p className="text-5xl font-thin">The quick brown fox jumps over the lazy dog.</p>
			<p className="text-5xl font-extralight">The quick brown fox jumps over the lazy dog.</p>
			<p className="text-5xl font-light">The quick brown fox jumps over the lazy dog.</p>
			<p className="text-5xl font-normal">The quick brown fox jumps over the lazy dog.</p>
			<p className="text-5xl font-medium">The quick brown fox jumps over the lazy dog.</p>
			<p className="text-5xl font-semibold">The quick brown fox jumps over the lazy dog.</p>
			<p className="text-5xl font-bold">The quick brown fox jumps over the lazy dog.</p>
			<p className="text-5xl font-extrabold">The quick brown fox jumps over the lazy dog.</p>
			<p className="text-5xl font-black">The quick brown fox jumps over the lazy dog.</p>
			<p className="text-5xl font-black">The quick brown fox jumps over the lazy dog.</p> */}
			<p className="text-5xl font-light">
				Next.js supports Sass variables exported from CSS Module files.
			</p>
		</Layout>
	);
}
