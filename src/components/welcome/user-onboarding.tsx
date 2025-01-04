"use client";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useDialogContext } from "@/lib/dialog-provider";
import { useEffect } from "react";

const Onboarding = () => {

  const {
    currentDialog,
    currentScreen,
    goToNextScreen,
    goToPreviousScreen,
    openDialog,
    closeDialog,
    highlightComponent,
    highlightedComponent
  } = useDialogContext();

  const slides = [
    {
      id:"button1",
      title: "Quick Exit",
      content:
        "Use this privacy feature to quickly exit the site. Customize in Settings.",
    },
    {
      id:"button2",
      title: "Resources Hub",
      content: "Find emergency resources, TDA coursework, job board, and more.",
    },
    {
      id:"button3",
      title: "Groups",
      content: "Join groups to connect with others who have similar interests.",
    },
    {
      id:"button4",
      title: "Sensitive Topics",
      content:
        "Set up Sensitive Topics in Settings to filter your feed. Posts containing sensitive topics will be hidden from view.",
    },
  ];

  useEffect(() => {
    if (currentDialog === 2 && currentScreen === 1) {
      highlightComponent('exitButton');
    }else if(currentDialog === 2 && currentScreen === 2){
      highlightComponent('resourceButton');
    }else if(currentDialog === 2 && currentScreen === 3){
      highlightComponent('groups');
    }else if(currentDialog === 2 && currentScreen === 4){
      highlightComponent('sensitiveTopic');
    }else{
      highlightComponent(null)
    }
  }, [currentDialog, currentScreen, highlightComponent]);


  return (
    <Dialog open={currentDialog === 2}>
      {slides.map(
        (slide, index) =>
          currentScreen === index + 1 && (
            <DialogContent
              key={index}
              className="w-[90%] [&>button]:hidden rounded-xl p-6 gap-0 z-[1000]"
            >
              {/* Header */}
              <DialogHeader className="flex flex-row justify-between h-12">
                <DialogTitle className="font-bold">{slide.title}</DialogTitle>
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

              {/* Content */}
              <DialogDescription className="mt-4 text-black">
                {slide.content}
              </DialogDescription>

              {/* Navigation Buttons */}
              <div className="flex justify-end mt-4">
                {currentScreen > 1 && (
                  <button
                    className="w-16 h-10 border border-black mx-2 rounded-full"
                    onClick={goToPreviousScreen}
                  >
                    Back
                  </button>
                )}
                {currentScreen < slides.length  && (
                  <button
                    className="w-16 h-10 bg-tertiary-500 rounded-full"
                    onClick={() => goToNextScreen()}
                  >
                    Next
                  </button>
                )}
                {currentScreen === slides.length && (
                  <Link href="/">
                    <button
                      className="w-16 h-10 bg-tertiary-500 rounded-full"
                      onClick={() => openDialog(3)}
                    >
                      Finish
                    </button>
                  </Link>
                )}
              </div>

              {/* Indicator Dots */}
              <div className="flex justify-center space-x-2 mt-6">
                {slides.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() =>
                      goToNextScreen(dotIndex - (currentScreen - 1))
                    }
                    className={`h-3 w-3 rounded-full ${
                      currentScreen - 1 === dotIndex
                        ? "bg-gray-900"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </DialogContent>
          )
      )}
    </Dialog>
  );
};

export default Onboarding;
