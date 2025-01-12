import { useState, useEffect } from 'react';

export function useWindowWidth() {
  // Use state to track window width, initially set to 0 (or any default value)
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    // Check if window is defined (i.e., we are on the client-side)
    if (typeof window !== 'undefined') {
      const handleResize = () => setWidth(window.innerWidth);

      // Set the initial width when component mounts
      handleResize();

      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Only run once on mount

  return width;
}
