"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  openNext: () => void;
}

const Onboarding: React.FC<Props> = ({ isOpen, onClose, openNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Quick Exit",
      content:
        "Use this privacy feature to quickly exit the site. Customize in Settings.",
    },
    {
      title: "Resources Hub",
      content: "Find emergency resources, TDA coursework, job board, and more.",
    },
    {
      title: "Groups",
      content: "Join groups to connect with others who have similar interests.",
    },
    {
      title: "Sensitive Topics",
      content:
        "Set up Sensitive Topics in Settings to filter your feed. Posts containing sensitive topics will be hidden from view.",
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < slides.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {slides.map(
        (slide, index) =>
          currentIndex === index && (
            <DialogContent
              key={index}
              className="w-[90%] [&>button]:hidden rounded-xl p-6 gap-0"
            >
              {/* Header */}
              <DialogHeader className="flex flex-row justify-between h-12">
                <DialogTitle className="font-bold">{slide.title}</DialogTitle>
                <div className="self-center">
                <button onClick={onClose}><Image src='Close.svg' alt="close button" width={36} height={36}/></button>
                </div>
              </DialogHeader>
              <hr className="border-accent-purple border-[1px] mt-0" />

              {/* Content */}
              <DialogDescription className="mt-4 text-black">
                {slide.content}
              </DialogDescription>

              {/* Navigation Buttons */}
              <div className="flex justify-end mt-4">
                {currentIndex > 0 && (
                  <button
                    className="w-16 h-10 border border-black mx-2 rounded-full"
                    onClick={goToPrevious}
                  >
                    Back
                  </button>
                )}
                {currentIndex < slides.length - 1 && (
                  <button
                    className="w-16 h-10 bg-tertiary-500 rounded-full"
                    onClick={goToNext}
                  >
                    Next
                  </button>
                )}
                {currentIndex === slides.length - 1 && (
                  <Link href="/">
                    <button
                      className="w-16 h-10 bg-tertiary-500 rounded-full"
                      onClick={openNext}
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
                    onClick={() => setCurrentIndex(dotIndex)}
                    className={`h-3 w-3 rounded-full ${
                      currentIndex === dotIndex ? "bg-gray-900" : "bg-gray-300"
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
