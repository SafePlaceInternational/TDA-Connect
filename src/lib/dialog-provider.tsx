"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DialogContextType {
  currentDialog: number; // Tracks which dialog is active
  currentScreen: number; // Tracks the active screen in the second dialog
  highlightedComponent: string | null; // Tracks which component to highlight
  openDialog: (dialogIndex: number) => void;
  closeDialog: () => void;
  goToNextScreen: (step?: number) => void;
  goToPreviousScreen: () => void;
  highlightComponent: (componentId: string | null) => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [currentDialog, setCurrentDialog] = useState<number>(1);
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const [highlightedComponent, setHighlightedComponent] = useState<string | null>(null);

  const openDialog = (dialogIndex: number) => {
   
    setCurrentDialog(dialogIndex);
    if (dialogIndex === 2) setCurrentScreen(1); // Reset to the first screen for the second dialog
  };

  const closeDialog = () => {
    setCurrentDialog(0);
    setHighlightedComponent(null);
    setCurrentScreen(1);
  };

  const goToNextScreen = (step: number = 1) => {
    setCurrentScreen((prev) => Math.max(1, prev + step));
  };

  const goToPreviousScreen = () => {
    setCurrentScreen((prev) => Math.max(1, prev - 1));
  };

  

  const highlightComponent = (componentId: string | null) => {
    setHighlightedComponent(componentId);
  };

  return (
    <DialogContext.Provider
      value={{
        currentDialog,
        currentScreen,
        highlightedComponent,
        openDialog,
        closeDialog,
        goToNextScreen,
        highlightComponent,
        goToPreviousScreen
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialogContext must be used within a DialogProvider');
  }
  return context;
};
