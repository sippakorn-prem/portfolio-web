import BackgroundAudio from '@/components/BackgroundAudio';
import MyComponent from '@/components/MyComponent';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <>
      <BackgroundAudio />
      <MyComponent />
    </>
  );
}
