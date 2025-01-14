"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { useDialogContext } from "@/lib/dialog-provider";

const WelcomeUser = () => {
  const { currentDialog, closeDialog } = useDialogContext();
  return (
    <>
      <Dialog open={currentDialog === 3}>
        <DialogContent className="w-[90%] [&>button]:hidden rounded-xl p-6 gap-0">
          <DialogHeader className="flex flex-row justify-between h-12">
            <DialogTitle className="font-bold">Welcome Ayana!</DialogTitle>
            <div className="self-center">
              <button onClick={closeDialog}>
                <Image
                  src="Close.svg"
                  alt="close button"
                  width={36}
                  height={36}
                />
              </button>
            </div>
          </DialogHeader>
          <hr className="border-accent-purple border-[1px] mt-0" />
          <DialogDescription className="mt-4 text-black font-normal">
            Complete your profile to share your interests.
          </DialogDescription>
          <div className="flex justify-end mt-4">
            <button
              className="w-16 h-10 border border-black mx-2 rounded-full"
              onClick={closeDialog}
            >
              Skip
            </button>
            <Link
              href="/profile"
              className="w-28 h-10 bg-tertiary-500 rounded-full text-center py-2"
            >
              Edit Profile
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WelcomeUser;
