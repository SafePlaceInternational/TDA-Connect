"use client";

import React, { RefObject, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { DialogProvider } from "@/lib/dialog-provider";
import { SessionProvider } from "next-auth/react";
import ConditionalTopNav from "@/components/nav-bar/conditional-top-nav";
import ConditionalBottomNav from "@/components/nav-bar/conditional-bottom-nav";
import Footer from "@/components/footer/page";

export default function ClientLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session: any;
}) {
  const containerRef: RefObject<HTMLDivElement> = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
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
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [pathname]);

  useEffect(() => {
    // Scroll to the top of the page when the app starts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SessionProvider session={session}>
        <DialogProvider>
          <ConditionalTopNav />
          <main
            id="client-layout-inner1"
            className="relative flex flex-col"
          >
            <div
              id="client-layout-inner2"
              className="relative flex flex-grow justify-start overflow-y-auto"
            >
              {children}
            </div>
            
          </main>
          <Footer/>
          <ConditionalBottomNav />
        </DialogProvider>
      </SessionProvider>
    </div>
  );
}
