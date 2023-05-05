import { ReactElement } from 'react';

export default function ImportIcons(): ReactElement {
  const iconSizes = [48, 96, 192, 256, 384, 512];

  function getSizeBySize(size: number): string {
    return `${size}x${size}`;
  }

  function getHref(size: number): string {
    return `/icons/icon${getSizeBySize(size)}.png`;
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
    </>
  );
}
