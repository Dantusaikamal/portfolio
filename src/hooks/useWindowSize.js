import { useCallback, useEffect, useRef, useState } from 'react';

export function useWindowSize() {
  const dimensions = useRef({ width: 1280, height: 800 });
  const frame = useRef();

  const createRuler = useCallback(() => {
    let ruler = document.createElement('div');

    ruler.style.position = 'fixed';
    ruler.style.height = '100vh';
    ruler.style.width = 0;
    ruler.style.top = 0;

    document.documentElement.appendChild(ruler);

    // Set cache conscientious of device orientation
    dimensions.current = {
      width: window.innerWidth,
      height: ruler.offsetHeight,
    };

    // Clean up after ourselves
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);

  // Get the actual height on iOS Safari
  const getHeight = useCallback(() => {
    const isIOS = navigator?.userAgent.match(/iphone|ipod|ipad/i);

    if (isIOS) {
      createRuler();
      return dimensions.current.height;
    }

    return window.innerHeight;
  }, [createRuler]);

  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight(),
    };
  }, [getHeight]);

  const [windowSize, setWindowSize] = useState(dimensions.current);

  useEffect(() => {
    const handleResize = () => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setWindowSize(getSize());
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      cancelAnimationFrame(frame.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [getSize]);

  return windowSize;
}
