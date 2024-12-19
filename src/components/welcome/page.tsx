"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Welcome: React.FC = () => {
  return (
    <div className="w-full h-screen flex mt-52 px-4 md:px-8">
      <div className="relative w-full max-w-[640px] overflow-hidden">
        <Card className="w-full md:w-3/4 lg:w-2/3 h-auto flex flex-col shadow-md p-6">
          <CardHeader className="px-0">
            <CardTitle>
              <h2 className="text-center text-3xl font-semibold text-accent-purple mb-4">
                Welcome to TDA Connect!
              </h2>
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-4">
            <p className="text-center text-xl mb-8">
              Let's check out some key features.
            </p>
            
            <div className="flex gap-4 justify-end mt-4">
              <Link 
                href="/" 
                className="px-4 py-2 border border-black mx-2 rounded-full"
              >
                Skip
              </Link>
              <Link 
                href="/onboarding" 
                className="px-4 py-2 bg-tertiary-500 rounded-full"
              >
                Start tutorial
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Welcome; 