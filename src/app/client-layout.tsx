'use client';

import React, { RefObject, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import BottomNavBar from '@/components/nav-bar/bottom-nav-bar';
import TopNavbar from '@/components/nav-bar/top-nav-bar';
import TopNavbarBeforeLogin from '@/components/nav-bar/top-nav-bar-before-login';
import { DialogProvider } from '@/lib/dialog-provider';
import { SessionProvider } from 'next-auth/react';


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const hasVerticalOverflow =
          containerRef.current.scrollHeight > containerRef.current.clientHeight;
        setHasOverflow(hasVerticalOverflow);
      }
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => window.removeEventListener('resize', checkOverflow);
  }, [pathname]);

 
  useEffect(() => {
    // Scroll to the top of the page when the app starts
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="flex flex-col min-h-screen">
      <SessionProvider>
      <DialogProvider>
        {loggedIn ? <TopNavbar /> : <TopNavbarBeforeLogin />}
        <main
          id="client-layout-inner1"
          className="relative flex flex-col pb-16 mb-4"
        >
          <div
            id="client-layout-inner2"
            className="relative flex flex-grow justify-start overflow-y-auto"
          >
            {children}
          </div>
        </main>
        <BottomNavBar />
      </DialogProvider>
      </SessionProvider>
    </div>
  );
}
