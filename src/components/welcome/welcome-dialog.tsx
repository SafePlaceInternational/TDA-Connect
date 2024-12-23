"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useState, useEffect } from 'react';


const WelcomeDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(true); 
  }, []); 

  const closeDialog = (): void => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90%] [&>button]:hidden rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-accent-purple">
            Welcome to TDA Connect!
          </DialogTitle>
        </DialogHeader>
        <div>
          <p className="text-center text-xl mb-8">
            Let's check out some key features.
          </p>
          
          <div className="flex gap-4 justify-end mt-4">
            <button
              className="px-4 py-2 border border-black mx-2 rounded-full font-bold"
              onClick={closeDialog}
            >
              Skip
            </button>
            <Link 
              href="/onboarding" 
              className="px-4 py-2 bg-tertiary-500 rounded-full font-bold"
            >
              Start tutorial
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeDialog; 