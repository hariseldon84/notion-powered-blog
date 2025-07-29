'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Spinner } from './ui/spinner';

export default function NavigationProgress({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(true); // Start with true for initial page load

  // Handle both initial load and navigation
  useEffect(() => {
    // Show spinner immediately
    setIsNavigating(true);
    
    // Keep spinner visible for at least 1 second to ensure it's noticeable
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);
  
  return (
    <>
      {isNavigating && <div className="fixed inset-0 z-50"><Spinner /></div>}
      <div className={isNavigating ? 'invisible' : 'visible'}>
        {children}
      </div>
    </>
  );
}
