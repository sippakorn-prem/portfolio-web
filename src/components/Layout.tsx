import Head from 'next/head';
import { ReactElement } from 'react';
import Meta, { IMetaProps } from './Meta';

interface Props extends IMetaProps {
  title: string;
  children?: ReactElement | ReactElement[];
}

export default function Layout(props: Props): ReactElement {
  return (
    <>
      <Head>
        <Meta {...props} />
        <title>{props.title}</title>
      </Head>
      <main>{props.children}</main>
    </>
  );
}

Layout.defaultProps = {
  title: 'Sippakorn.page',
};
