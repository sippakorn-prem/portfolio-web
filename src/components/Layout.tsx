import Head from 'next/head';
import { CSSProperties, ReactElement } from 'react';
import Meta, { IMetaProps } from './Meta';

interface Props extends IMetaProps {
  title?: string;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export default function Layout(props: Props): ReactElement {
  return (
    <>
      <Head>
        <Meta {...props} />
        <title>{props.title}</title>
      </Head>
      <main className={props.className} style={props.style}>
        {props.children}
      </main>
    </>
  );
}

Layout.defaultProps = {
  title: 'Sippakorn Suphapinyo',
  className: '',
};
