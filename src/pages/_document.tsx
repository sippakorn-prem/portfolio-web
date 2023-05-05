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
        <meta name="theme-color" content="#616161" media="(prefers-color-scheme: dark)" />
        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="/manifest.json" />

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
