"use client";

import React from "react";
import BottomNavBar from "@/components/nav-bar/bottom-nav-bar";
import TopNavbar from "@/components/nav-bar/top-nav-bar";
import { DialogProvider } from "@/lib/dialog-provider";
import { useEffect } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  useEffect(() => {
    // Scroll to the top of the page when the app starts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <DialogProvider>
        <TopNavbar />
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
    </div>
  );
}
