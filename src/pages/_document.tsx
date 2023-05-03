import { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

export default function Document(): ReactElement {
  const icons = [16, 24, 32, 48, 64, 96, 128, 256];
  return (
    <Html id="html-container" lang="en">
      <Head>
        <meta name="description" content={'Sippakorn "Prem" Suphapinyo\'s portfolio'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {icons.map((size) => (
          <link key={size} rel="icon" sizes={`${size}x${size}`} href={`/icon/${size}.ico`} />
        ))}
      </Head>
      <body id="body-container">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
