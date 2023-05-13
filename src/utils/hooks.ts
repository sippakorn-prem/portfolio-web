import { MutableRefObject, useEffect, useRef } from 'react';

export function useIsMounted(): MutableRefObject<boolean> {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return (): void => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}

export function useScrollPosition(callback: () => void): void {
  useEffect(() => {
    window.addEventListener('scroll', callback);
    return () => window.removeEventListener('scroll', callback);
  }, []);
}
