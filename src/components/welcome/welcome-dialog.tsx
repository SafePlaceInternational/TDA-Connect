"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState} from 'react';
import Onboarding from "./user-onboarding";
import WelcomeUser from "./welcome-user";


const WelcomeDialog = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isTutorialDialogOpen, setIsTutorialDialogOpen] = useState(false);
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false)


  const openTutorialDialog = () => {
    setIsOpen(false);
    setIsTutorialDialogOpen(true);
  }

  const openUserDialog = () => {
    setIsOpen(false);
    setIsTutorialDialogOpen(false);
    setIsUserDialogOpen(true);
  }

  const closeDialog = (): void => setIsOpen(false);
  const closeTutorialDialog = () => setIsTutorialDialogOpen(false)
  const closeUserDialog = () => setIsUserDialogOpen(false)

  return (
    <>
    <Dialog open={isOpen}  onOpenChange={setIsOpen}>
      <DialogContent className="w-[90%] [&>button]:hidden rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-accent-purple">
            Welcome to TDA Connect!
          </DialogTitle>
        </DialogHeader>
        <div>
          <p className="text-center text-md mb-8">
            Let's check out some key features.
          </p>
          
          <div className="flex gap-4 justify-end mt-4">
            <button
              className="px-4 py-2 border border-black mx-2 rounded-full font-bold"
              onClick={closeDialog}
            >
              Skip
            </button>
            <button 
              onClick={openTutorialDialog}
              className="px-4 py-2 bg-tertiary-500 rounded-full font-bold"
            >
              Start tutorial
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    
    <Onboarding isOpen={isTutorialDialogOpen} onClose={closeTutorialDialog} openNext={openUserDialog}/>
    <WelcomeUser isOpen={isUserDialogOpen} onClose={closeUserDialog}/>
    </>
  );
};

export default WelcomeDialog; 