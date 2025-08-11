import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set initial value
    setMatches(media.matches);

    // Define listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener
    if (media.addEventListener) {
      media.addEventListener('change', listener);
    } else {
      // Fallback for older browsers
      media.addListener(listener);
    }

    // Cleanup
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener);
      } else {
        // Fallback for older browsers
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
};

// Updated breakpoint hooks with modern values
export const useIsMobile = (): boolean => {
  return useMediaQuery('(max-width: 767px)'); // Below md (768px)
};

export const useIsTablet = (): boolean => {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)'); // md to lg
};

export const useIsDesktop = (): boolean => {
  return useMediaQuery('(min-width: 1024px)'); // lg and above
};

export const useIsLargeScreen = (): boolean => {
  return useMediaQuery('(min-width: 1280px)'); // xl and above
};

// Specific breakpoint hooks
export const useIsXs = (): boolean => {
  return useMediaQuery('(min-width: 475px)');
};

export const useIsSm = (): boolean => {
  return useMediaQuery('(min-width: 640px)');
};

export const useIsMd = (): boolean => {
  return useMediaQuery('(min-width: 768px)');
};

export const useIsLg = (): boolean => {
  return useMediaQuery('(min-width: 1024px)');
};

export const useIsXl = (): boolean => {
  return useMediaQuery('(min-width: 1280px)');
};

export const useIs2xl = (): boolean => {
  return useMediaQuery('(min-width: 1536px)');
};