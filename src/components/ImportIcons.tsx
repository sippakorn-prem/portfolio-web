import { ReactElement } from 'react';

export default function ImportIcons(): ReactElement {
  const iconSizes = [48, 96, 192, 256, 384, 512];

  function getSizeBySize(size: number): string {
    return `${size}x${size}`;
  }

  function getHref(size: number): string {
    return `/assets/icons/icon${getSizeBySize(size)}.png`;
  }

  return (
    <>
      {iconSizes.map((size) => (
        <link
          key={size}
          rel="icon"
          type="image/png"
          sizes={getSizeBySize(size)}
          href={getHref(size)}
        />
      ))}

      {iconSizes.map((size) => (
        <link
          key={size}
          rel="apple-touch-startup-image"
          sizes={getSizeBySize(size)}
          href={getHref(size)}
        />
      ))}

      {iconSizes.map((size) => (
        <link key={size} rel="apple-touch-icon" sizes={getSizeBySize(size)} href={getHref(size)} />
      ))}

      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg" />
      <link rel="icon" type="image/png" href="/assets/icons/favicon.png" />
    </>
  );
}
