import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function FooDetail(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    console.log(router);
  }, []);

  return (
    <div id="foo-detail-page">
      <h2>Foo</h2>
    </div>
  );
}
