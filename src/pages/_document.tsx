import { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';
import Meta from '@/components/Meta';
import ImportIcons from '@/components/ImportIcons';

export default function Document(): ReactElement {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="author" content="@sippakorn-prem" />
        <meta name="theme-color" content="#efebe9" media="(prefers-color-scheme: dark)" />
        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <Meta />
        <ImportIcons />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
