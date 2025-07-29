'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

// Wrapper component that doesn't use any hooks
export default function NotFoundWrapper() {
  return (
    <Suspense fallback={<NotFoundFallback />}>
      <NotFoundContent />
    </Suspense>
  );
}

// Fallback component shown during loading
function NotFoundFallback() {
  return (
    <div className="container max-w-4xl py-16 text-center">
      <h1 className="text-3xl font-bold mb-6">Loading...</h1>
    </div>
  );
}

// Actual content component that can use client-side hooks safely
function NotFoundContent() {
  return (
    <div className="container max-w-4xl py-16 text-center">
      <Card className="p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-6">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Return to Home
        </Link>
      </Card>
    </div>
  );
}
