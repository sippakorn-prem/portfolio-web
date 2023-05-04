import { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

export default function Document(): ReactElement {
  const icons = [16, 24, 32, 48, 64, 96, 128, 256];
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#212121" media="(prefers-color-scheme: dark)" />
        <meta name="description" content={'Sippakorn "Prem" Suphapinyo\'s portfolio'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Sippakorn.page" />
        <meta property="og:description" content="I am Sippakorn Suphapinyo (Prem)" />
        <meta property="og:url" content="https://sippakorn.page/" />
        <meta property="og:image" content="https://sippakorn.page/og-image.png" />

        {icons.map((size) => (
          <link key={size} rel="icon" sizes={`${size}x${size}`} href={`/icon/${size}.ico`} />
        ))}
      </Head>
      <body className="body-container">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
