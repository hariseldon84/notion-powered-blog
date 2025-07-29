import React from 'react';

export function Spinner({ className = "", ...props }) {
  return (
    <div 
      className={`flex flex-col items-center justify-center h-screen w-full bg-background ${className}`}
      {...props}
    >
      <div className="relative">
        {/* Outer ring */}
        <div className="w-24 h-24 rounded-full border-4 border-primary/30 border-t-primary border-r-primary animate-spin"></div>
        
        {/* Inner ring - fixing animation by using reverse direction */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-primary/20 border-b-primary border-l-primary animate-spin-reverse"></div>
        
        {/* Letter A */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-primary">
          A
        </div>
      </div>
      
      <p className="mt-4 text-sm text-muted-foreground animate-pulse">Loading...</p>
    </div>
  );
}
