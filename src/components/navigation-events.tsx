// navigation-events.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';
import { Spinner } from './ui/spinner';

export const NavigationContext = createContext({
  isNavigating: false,
});

export function useNavigation() {
  return useContext(NavigationContext);
}

export function NavigationEvents({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);

  // Initial load - show spinner briefly
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 1000); // Show spinner for at least 1 second on initial load
    
    return () => clearTimeout(timer);
  }, []);

  // Listen for URL changes
  useEffect(() => {
    setIsNavigating(true);
    
    // Add a small delay to ensure spinner shows
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <NavigationContext.Provider value={{ isNavigating }}>
      {isNavigating && <Spinner />}
      <div className={isNavigating ? 'hidden' : ''}>
        {children}
      </div>
    </NavigationContext.Provider>
  );
}
