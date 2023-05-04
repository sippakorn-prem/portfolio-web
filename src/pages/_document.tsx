import { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import Meta from '@/components/Meta';
import Background from '@/components/Background';

export default function Document(): ReactElement {
  return (
    <Html lang="en">
      <Head>
        <Meta />
        <link rel="manifest" href="/manifest.json" />
        {[16, 24, 32, 48, 64, 96, 128, 256, 512].map(LinkIcon)}
      </Head>
      <Background />
      <body className="body-container">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

const LinkIcon = (size: number): ReactElement => {
  const sizes = `${size}x${size}`;
  const href = `/icons/${size}.png`;
  return (
    <>
      <link key={size} rel="icon" type="image/png" sizes={sizes} href={href} />
      <link rel="apple-touch-icon" sizes={sizes} href={href} />
      <link rel="apple-touch-startup-image" href={href} />
    </>
  );
};
