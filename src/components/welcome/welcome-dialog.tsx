"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDialogContext } from "@/lib/dialog-provider";

const WelcomeDialog = () => {
  const { currentDialog, openDialog, closeDialog } = useDialogContext();

  return (
    <>
      <Dialog open={currentDialog === 1}>
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
                onClick={() => openDialog(2)}
                className="px-4 py-2 bg-tertiary-500 rounded-full font-bold"
              >
                Start tutorial
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WelcomeDialog;
