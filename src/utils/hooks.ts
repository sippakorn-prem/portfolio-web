import { MutableRefObject, useEffect, useRef, useState } from 'react';

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

export function useScrollPosition(callback: () => void, deps?: any[]): void {
  useEffect(() => {
    window.addEventListener('scroll', callback);
    return () => window.removeEventListener('scroll', callback);
  }, deps || []);
}

export function useIntersection(ref: string): boolean {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    const observeElement = document.querySelector(ref);
    if (observeElement) observer.observe(observeElement);
  }, []);
  return isIntersecting;
}
