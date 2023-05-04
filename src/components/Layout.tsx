import Head from 'next/head';
import { ReactElement } from 'react';

interface ILayoutProps {
  children?: ReactElement | ReactElement[];
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'Sippakorn.page',
  description = 'I am Sippakorn Suphapinyo (Prem)',
}: ILayoutProps): ReactElement {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
