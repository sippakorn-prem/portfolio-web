import { Head } from 'next/document';
import { ReactElement } from 'react';

type key =
  | 'keywords'
  | 'description'
  | 'ogTitle'
  | 'ogDescription'
  | 'ogType'
  | 'ogUrl'
  | 'ogImage';

type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

export type IMetaProps = PartialRecord<key, string>;

export default function Meta({
  keywords,
  description,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogType,
}: IMetaProps): ReactElement {
  return (
    <>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
    </>
  );
}

Meta.defaultProps = {
  keywords: 'Sippakorn Suphapinyo, Sippakorn, Suphapinyo, Prem, sippakorn-prem',
  description: 'I am Sippakorn Suphapinyo (Prem)',
  ogTitle: 'Prem Sippakorn',
  ogDescription: 'I am Sippakorn Suphapinyo (Prem)',
  ogUrl: 'https://sippakorn.page/',
  ogImage: '/og-image.png',
};
