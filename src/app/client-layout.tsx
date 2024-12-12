"use client";

import React, { RefObject, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
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
  return (
    <div className="flex flex-col max-h-screen h-screen">
      <main
        id="client-layout-inner1"
        className="flex-grow flex flex-col overflow-scroll"
        ref={containerRef}
      >
        <div
          id="client-layout-inner2"
          className="flex-grow flex justify-start px-4"
        >
          {children}
        </div>
      </main>
    </div>
  );
}
