"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

interface WelcomeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WelcomeDialog: React.FC<WelcomeDialogProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] [&>button]:hidden">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-semibold text-accent-purple mb-4">
            Welcome to TDA Connect!
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-center text-xl mb-8">
            Let's check out some key features.
          </p>
          
          <div className="flex gap-4 justify-end mt-4">
            <Link 
              href="/" 
              className="px-4 py-2 border border-black mx-2 rounded-full"
              onClick={() => onOpenChange(false)}
            >
              Skip
            </Link>
            <Link 
              href="/onboarding" 
              className="px-4 py-2 bg-tertiary-500 rounded-full"
              onClick={() => onOpenChange(false)}
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