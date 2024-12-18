"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ResponsiveCarousel: React.FC = () => {
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
    <div className="w-full h-screen flex mt-52 px-4 md:px-8">
      <div className="relative w-full max-w-[640px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex items-center justify-center px-4"
            >
              <Card className="w-full md:w-3/4 lg:w-2/3 h-auto flex flex-col shadow-md p-6">
                {/* Slide Content */}
                <CardHeader className="h-12 px-0">
                  <div className="w-full flex justify-between px-3">
                    <CardTitle>
                      <p>{slide.title}</p>
                    </CardTitle>
                    <CardTitle>
                      <Link href='/'>
                    <button className="items-center">
                      <Image
                        src="/Close.svg"
                        alt="close button"
                        width={36}
                        height={36}
                      />
                    </button>
                    </Link>
                    </CardTitle>
                  </div>
                </CardHeader>
                <hr className="border-accent-purple border-[1px]" />
                <CardContent className="mt-4">
                  <p>{slide.content}</p>
                </CardContent>

                {/* Buttons */}
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
                    <Link href='/'>
                    <button
                      className="w-16 h-10 bg-tertiary-500 rounded-full"
                    >
                      Finish
                    </button>
                    </Link>
                  )}
                </div>

                {/* Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                  {slides.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      onClick={() => setCurrentIndex(dotIndex)}
                      className={`h-3 w-3 rounded-full ${
                        currentIndex === dotIndex
                          ? "bg-gray-900"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;
